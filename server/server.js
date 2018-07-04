/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var url=require('url');
var cheerio = require('cheerio');
var path = require('path');
var fs = require('fs');
var gm = require('gm');
var app = express();
var request = require('request');
var tesseract = require('node-tesseract');
var bodyParser = require('body-parser');
var multer = require('multer');
var logger = require('morgan');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
var port = 80;
process.argv.slice(2).forEach(function (val, index, array) {
    if(val.indexOf('=') > 0) {
        var arr = val.split('=');
        if(arr[0] == 'port') port = arr[1];
    }

});
console.log(process.pid);
if(process.send) process.send(process.pid);
// all environments
app.set('port', port);

//app.use(express.favicon());   // connect 内建的中间件，使用默认的 favicon 图标
//app.use(express.favicon(__dirname+"/deploy/favicon.ico"));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(multer()); // for parsing multipart/form-data

/**
 * 处理图片为阈值图片
 * @param imgPath
 * @param newPath
 * @param [thresholdVal=55] 默认阈值
 * @returns {Promise}
 */
function processImg (imgPath, newPath, thresholdVal) {
    return new Promise((resolve, reject) => {
        gm(imgPath)
            .threshold(thresholdVal || 90)
            .write(newPath, (err)=> {
                if (err) return reject(err);

                resolve(newPath);
            });
    });
}

/**
 * 识别图片
 * @param imgPath
 * @param options tesseract options
 * @returns {Promise}
 */
function recognizer (imgPath, options) {
    options = Object.assign({psm: 7}, options);

    return new Promise((resolve, reject) => {
        tesseract
            .process(imgPath, options, (err, text) => {
                if (err) return reject(err);
                resolve(text.replace(/[\r\n\s]/gm, ''));
            });
    });
}

    var picname = "asd.png";
    app.post('/backoffice/vcode.do', function(req, res){
        var base64str = req.body.picbase.substr(22);
        var bitmap = new Buffer(base64str, 'base64');
        // write buffer to file
        fs.writeFileSync(picname, bitmap);
        processImg(picname, 'test_1.jpg')
            .then(recognizer)
            .then(code => {
               console.log(`识别成功:${code}`);
               res.send(`{"a":"${code}"}`);
            })
            .catch((err)=> {
                console.error(`识别失败:${err}`);
            });

    });

///connect 内建的中间件，设置根目录下的 public 文件夹为存放 image、css、js 等静态文件的目录。

app.use('/backoffice',express.static(path.join(__dirname, 'app')));
app.use('/backoffice',express.static(path.join(__dirname, '.tmp')));

 //connect 内建的中间件 在终端显示简单的日志。
app.use(logger('dev'));

//app.use(express.json()); app.use(express.urlencoded()); app.use(express.multipart());
//app.use(express.bodyParser());

//connect 内建的中间件，可以协助处理 POST 请求，伪装 PUT、DELETE 和其他 HTTP 方法。
//app.use(express.methodOverride());

//调用路由解析的规则
app.all('/xweb/*',function(request, respont) {
  proxy.web(request, respont, { target: 'http://192.168.33.55:2020'});
});

var server = http.createServer(app);
var url = "https://www.yy123.com/backoffice/login.html";
function start() {
  server.listen(app.get('port'), function(){
    setTimeout(function() {
      require('open')(url);
    },500);
    console.log('Express server listening on port ' + app.get('port'));
  });
}

var child = require('child_process');
// 查到被占用的端口号
child.exec('netstat -aon|findstr 80',
  function (error, stdout, stderr) {
   // console.log('stdout: ' + stdout);
    var starr = stdout.split('\n');
    console.log('starr[0]: ' + starr[0]);
    var starrr = starr[0].split(/\s+/);
    starrr = starrr.filter(function(val) {
      return !!val;
    });
    var currport = starrr[1].replace(/^.+:(.*)$/g, '$1');
    if(port == currport) {
      // 查找进程PID使用的程序
      child.exec('tasklist|findstr '+starrr[4],
        function (error, stdout, stderr) {
         // console.log('stdout: ' + stdout);
          var starr = stdout.split('\n');
          console.log('starr[0]: ' + starr[0]);
          console.log('stderr: ' + stderr);
          if (error !== null) {
            console.log('exec error: ' + error);
          }
      });
      // KISS PID
      child.exec('taskkill /F /PID '+starrr[4],
        function (error, stdout, stderr) {
          console.log('stdout: ' + stdout);
          console.log('stderr: ' + stderr);
          start();
          if (error !== null) {
            console.log('exec error: ' + error);
          }
      });

    }else {
      start();
    }
    console.log('starrr: ' + starrr);
  //  console.log(stdout);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
