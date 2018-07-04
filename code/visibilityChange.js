var visibilityChange = (function (window) {
  var inView = false;
  return function (fn) {
      window.onfocus = window.onblur = window.onpageshow = window.onpagehide = function (e) {
          if ({focus:1, pageshow:1}[e.type]) {
              if (inView) return;
              fn("visible");
              inView = true;
          } else if (inView) {
              fn("hidden");
              inView = false;
          }
      };
  };
}(this));