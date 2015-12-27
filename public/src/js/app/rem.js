(function(win, doc) {
    var isMobile = (function(userAgent) {
        'use strict';

        return !!userAgent.match(/android|webos|ip(hone|ad|od)|opera (mini|mobi|tablet)|iemobile|windows.+(phone|touch)|mobile|fennec|kindle (Fire)|Silk|maemo|blackberry|playbook|bb10\; (touch|kbd)|Symbian(OS)|Ubuntu Touch/i);
    }(navigator.userAgent));

    // 前提条件 ip6 的高清视觉稿
    var fixScreen = function() {
        var rem;
        var dpr;
        var docEl;
        var width;

        docEl = doc.documentElement;
        dpr = win.devicePixelRatio || 1;

        // 设置 html dpr值，用于 css hack
        docEl.setAttribute('data-dpr', dpr);

        var page = doc.querySelector('.ui-page');

        if (page) {
            page.style.minWidth = 320 + 'px';
            page.style.maxWidth = 540 + 'px';
        }

        var refreshRem = function() {
            // 适配屏幕宽度为 320px - 640px
            width = Math.min(docEl.clientWidth, 540);
            width = width < 320 ? 320 : width;

            // 将 ip6 视觉稿 rem 的值设置为 50，其他按比例处理
            rem = width * 2 / 750 * 50;

            // 设置 html 元素的字体大小基准值
            docEl.style.fontSize = rem + "px";
        };

        // 在页面调整时更新 rem
        win.addEventListener('resize', function(e) {
            refreshRem();
        }, false);

        // 在页面显示时更新 rem
        win.addEventListener('pageshow', function(e) {
            refreshRem();
        }, false);

        refreshRem();

        // 给js调用的，某一屏幕宽度下 rem 和 px 之间的转换函数
        window.px2rem = function(px) {
            return px / 50;
        };
        window.rem2px = function(rem) {
            return rem * 50;
        };

        window.rem = rem;
    };

    if (isMobile) {
        doc.addEventListener('DOMContentLoaded', fixScreen, false);
    } else {
        doc.documentElement.style.fontSize = '50px';
    }
})(window, document);
