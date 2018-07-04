const path = require('path');

function Reg(content, opts, reg) {
  var currentPath = opts.__path;
    var result = '';
    var _content = '';
    var startEnd;
    var matchStart;
    while (matchStart = reg.exec(content)) {
      startEnd = matchStart.index + matchStart[0].length;
      if(!path.isAbsolute(matchStart[1])) {
        _content += content.slice(0, matchStart.index);
        _content += matchStart[0].replace(matchStart[1], path.join(currentPath, matchStart[1]).split(path.sep).join('/'));
      }else{
        _content += content.slice(0, startEnd);
      }
      content = content.slice(startEnd);
    };
    _content += content;

    return _content;
}


module.exports = function(content, opts) {
    
    var cssReg = new RegExp('<link.+href=[\'\"]([^\'\"]+)[\'\"][^>]*>', 'i');
    content = Reg(content, opts, cssReg);
    var jsReg = new RegExp('<script.+src=[\'\"]([^\'\"]+)[\'\"][^>]*>(.|\n)*?</script>', 'i');
    content = Reg(content, opts, jsReg);

   return content;
};