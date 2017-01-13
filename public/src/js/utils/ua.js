/*
* @Author: pigsy.chen
* @Date:   2016-05-17 00:18:45
* @Last Modified by:   pigsy.chen
* @Last Modified time: 2016-05-17 00:18:54
*/

'use strict';

var userAgent = (window.navigator && navigator.userAgent) || '';

function detect(pattern) {
    return function () {
        return (pattern).test(userAgent);
    };
}

var UA = {
    // chrome
    isChrome: detect(/webkit\W.*(chrome|chromium)\W/i),

    // firefox
    isFirefox: detect(/mozilla.*\Wfirefox\W/i),

    // 使用 gecko 引擎的浏览器，可能是 firefox 也可能是其他的
    isGecko: detect(/mozilla(?!.*webkit).*\Wgecko\W/i),

    // IE
    isIE: function () {
        if (navigator.appName === 'Microsoft Internet Explorer') {
            return true;
        } else if (detect(/\bTrident\b/)) {
            return true;
        } else {
            return false;
        }
    },

    // kindle
    isKindle: detect(/\W(kindle|silk)\W/i),

    // mobile
    isMobile: detect(/(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)/i),

    // opera
    isOpera: detect(/opera.*\Wpresto\W|OPR/i),

    // safari
    isSafari: detect(/webkit\W(?!.*chrome).*safari\W/i),

    // 平板
    isTablet: detect(/(ipad|android(?!.*mobile)|tablet)/i),

    // tv
    isTV: detect(/googletv|sonydtv|appletv/i),

    // webkit
    isWebKit: detect(/webkit\W/i),

    // android
    isAndroid: detect(/android/i),

    // ios
    isIOS: detect(/(ipad|iphone|ipod)/i),

    // ipad
    isIPad: detect(/ipad/i),

    // iphone
    isIPhone: detect(/iphone/i),

    // ipod
    isIPod: detect(/ipod/i),

    // 手机 qq 浏览器
    isMQQ: detect(/mqqbrowser/i),

    // qq 浏览器
    isQQ: detect(/qqbrowser/i),

    // qq 内置浏览器
    isIMQQ: detect(/\bQQ\b/i),

    // uc 浏览器
    isUC: detect(/uc browser|ucbrowser|ucweb/i),

    // 360 浏览器
    is360: detect(/qhbrowser|360(.+)browser/i),

    // 微信浏览器
    isWechat: detect(/micromessenger/i),

    // 百度浏览器
    isBaidu: detect(/baidubrowser|flyflow/i),

    // 猎豹浏览器
    isLiebao: detect(/liebao/i),

    // 搜狗浏览器
    isSogou: detect(/sogou|metasr/i),

    // 傲游浏览器
    isMaxthon: detect(/maxthon/i),

    // useragent
    whoami: function () {
        return userAgent;
    }
};

module.exports = UA;
