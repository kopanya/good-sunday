/**
 * 简单的订阅模式
 */
var Publisher = (function () {
  /**
   *  data: , fn: []
   */
  var subscribers = {};
  var _fn;
  /**
   * type: 类型， key: 订阅key值, obj：function/data, mode: 方式：once订阅一次
   */
  var visitSubscribers = function (type, key, obj, mode) {
      if (type == 'unsubscribe') {
          if (!obj) subscribers[key] == void 0;
          else {
              for (var i = 0; i < subscribers[key].fn; i++) {
                  if (obj == subscribers[key].fu[i]) return subscribers[key].fu.splice(i, 1);
              }
          }
          return;
      }
      var keys = key.split(',');
      for (var i = 0; i < keys.length; i++) {
          key = $.trim(keys[i]);
          if (key == '') continue;
          if (!subscribers[key]) subscribers[key] = { fn: [] };
          if (type == 'subscribe') {
              if (mode) {
                  obj = {
                      mode: mode,
                      fn: obj
                  };
              }
              subscribers[key].fn.push(obj);
          }
          if (type == 'publish') {
              subscribers[key].data = obj;
          }

          if (subscribers[key].data) {
              // 要移除的fn
              var delIndex = [];
              for (var i = 0; i < subscribers[key].fn.length; i++) {
                  var fn = subscribers[key].fn[i];
                  if ($.isFunction(fn)) fn(subscribers[key].data, subscribers[key].is);
                  else if (fn.mode == 'once') {
                      delIndex.push(i);
                      fn.fn(subscribers[key].data, subscribers[key].is)
                  }
              }
              $.each(delIndex, function (i, val) {
                  subscribers[key].fn.splice(val, 1);
              });
              subscribers[key].is = true;
          }
      }
  }
  return {
      //--- 取消订阅
      unsubscribe: function (key, fn) {
          if (!subscribers[key]) return;
          visitSubscribers('unsubscribe', key, fn);
      },
      //--- 制定订阅
      subscribe: function (key, fn) {
          var keys = key.split(':');
          visitSubscribers('subscribe', keys[0], fn, keys[1]);
      },
      //--- 发布消息
      publish: function (key, data) {
          visitSubscribers('publish', key, data);
      }
  }

})();