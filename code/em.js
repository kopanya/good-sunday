/**
 * 1
 */
  /**
   * 1
   */
    (function(win) {
        var maxWidth = 540; //页面最大宽度(如:iphone6 375*667)
        var desinWidth = 750; //视觉设计宽度

        var doc = win.document;
        var docEl = doc.documentElement;

        var dpr = Math.min(win.devicePixelRatio, 3);

        window.devicePixelRatioValue = dpr;

        var scale = 1 / dpr;

        var metaEl = doc.createElement("meta");
        metaEl.setAttribute("name", "viewport");
        metaEl.setAttribute("content", "initial-scale=" + scale + ", maximum-scale=" + scale + ", minimum-scale=" + scale + ", user-scalable=0, minimal-ui");
        docEl.firstElementChild.appendChild(metaEl);

        function setRem() {
            var visualView = Math.min(docEl.getBoundingClientRect().width, maxWidth * dpr);
            docEl.style.fontSize = 100 * visualView / desinWidth + "px";
        }

        var timer;

        win.addEventListener("resize", function() {
            clearTimeout(timer);
            timer = setTimeout(setRem, 300);
        });

        /*win.addEventListener('onorientationchange', function () {
            clearTimeout(timer);
            timer = setTimeout(setRem, 300);
        });*/

        win.addEventListener("pageshow", function(e) {
            if (e.persisted) {
                clearTimeout(timer);
                timer = setTimeout(setRem, 300);
            }
        });

        var baseFont = 18;
        if (doc.readyState === "complete") {
            doc.body.style.fontSize = baseFont * dpr + "px";
        } else {
            doc.addEventListener("DOMContentLoaded", function(e) {
                doc.body.style.fontSize = baseFont * dpr + "px";
            });
        }

        setRem();

        docEl.setAttribute("data-dpr", dpr);

    })(window)
/**
 * 2
 */
function r_s_h(){
    var uAgent = window.navigator.userAgent;
    var isIOS = uAgent.match(/iphone/i);
    var isYIXIN = uAgent.match(/yixin/i);
    var is2345 = uAgent.match(/Mb2345/i);
    var ishaosou = uAgent.match(/mso_app/i);
    var isSogou = uAgent.match(/sogoumobilebrowser/ig);
    var isLiebao = uAgent.match(/liebaofast/i);
    var isGnbr = uAgent.match(/GNBR/i);

    /*YIXIN 和 2345 这里有个刚调用系统浏览器时候的bug，需要一点延迟来获取*/
    if(isYIXIN || is2345 || ishaosou || isSogou || isLiebao || isGnbr){
        setTimeout(function(){
            var w = window.innerWidth;
            var h = window.innerHeight;
            var d = (10 * w) / 320;
            var eh = document.getElementsByTagName("html")[0];
            eh.style.fontSize = d+"px";
            eh.style.minHeight = h+"px";
        },500);
    }else{
        var w = window.innerWidth;
        var h = window.innerHeight;
        var d = (10 * w) / 320;
        var eh = document.getElementsByTagName("html")[0];
        eh.style.fontSize = d+"px";
        eh.style.minHeight = h+"px";
    }
}
(function(){
	r_s_h();
})();

/**
 * 2
 */

function r_s_h() {
    var uAgent = window.navigator.userAgent;
    var isIOS = uAgent.match(/iphone/i);
    var isYIXIN = uAgent.match(/yixin/i);
    var is2345 = uAgent.match(/Mb2345/i);
    var ishaosou = uAgent.match(/mso_app/i);
    var isSogou = uAgent.match(/sogoumobilebrowser/ig);
    var isLiebao = uAgent.match(/liebaofast/i);
    var isGnbr = uAgent.match(/GNBR/i);

    /*YIXIN 和 2345 这里有个刚调用系统浏览器时候的bug，需要一点延迟来获取*/
    if (isYIXIN || is2345 || ishaosou || isSogou || isLiebao || isGnbr) {
        setTimeout(function() {
            var w = window.innerWidth;
            var h = window.innerHeight;
            var d = (10 * w) / 320;
            var eh = document.getElementsByTagName("html")[0];
            eh.style.fontSize = d + "px";
            eh.style.minHeight = h + "px";
        }, 500);
    } else {
        var w = window.innerWidth;
        var h = window.innerHeight;
        var d = (10 * w) / 320;
        var eh = document.getElementsByTagName("html")[0];
        eh.style.fontSize = d + "px";
        eh.style.minHeight = h + "px";
    }
}
(function() {
    r_s_h();
})();