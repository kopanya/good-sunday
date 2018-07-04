/**
 *  判断是否是IE浏览器以及版本号
 **/
var ie = (function() { 
  var v = 3,
  div = document.createElement('div'),
  all = div.getElementsByTagName('i');
  while (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0]);
  return v > 4 ? v: 100;
} ())