/* 
 * @Author: shunjinchan
 * @Date:   2016-01-17 23:09:06
 * @Last Modified by:   shunjinchan
 * @Last Modified time: 2016-01-17 23:17:15
 */

var broswer = {};

(function() {

    var ua = navigator.userAgent;
    var mobile = ua.match(/android|webos|ip(hone|ad|od)|opera (mini|mobi|tablet)|iemobile|windows.+(phone|touch)|mobile|fennec|kindle (Fire)|Silk|maemo|blackberry|playbook|bb10\; (touch|kbd)|Symbian(OS)|Ubuntu Touch/i);
    var isMobile = false;

    // mobile
    if (mobile) {
        isMobile = true;
    }

    if (isMobile) {
        broswer.isWeixin = /MicroMessenger/i.test(ua); // 微信浏览器
        broswer.isUCBrowser = /UC Browser|UCBrowser|UCWEB/.test(ua); // uc 浏览器
        broswer.isQQBroswer = /QQBrowser/.test(ua); // qq 浏览器
    }

})();

module.exports = broswer;
