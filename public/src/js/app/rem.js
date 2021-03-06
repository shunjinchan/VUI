(function (win, doc) {

    var dpr;
    var docEl;
    var width;
    var rootFontsize;

    docEl = doc.documentElement;
    dpr = win.devicePixelRatio || 1;

    // 设置 html dpr值，用于 css hack
    docEl.setAttribute('data-dpr', dpr);

    // 前提条件 ip6 的高清视觉稿
    function updateRem() {
        // 适配屏幕宽度为 320px - 640px
        width = Math.min(docEl.clientWidth, 540);
        width = width < 320 ? 320 : width;

        // 将 ip6 视觉稿 rootFontsize 的值设置为 50，其他按比例处理
        rootFontsize = width * 2 / 750 * 50;

        // 设置 html 元素的字体大小基准值
        docEl.style.fontSize = rootFontsize + 'px';
    }

    // 给js调用的，某一屏幕宽度下 rootFontsize 和 px 之间的转换函数
    window.px2rem = function (px) {
        return px / rootFontsize;
    };

    window.rem2px = function (rem) {
        return rem * rootFontsize;
    };

    window.rootFontsize = rootFontsize;

    doc.addEventListener('DOMContentLoaded', updateRem, false);

    // 在页面调整时更新 rootFontsize
    win.addEventListener('resize', updateRem, false);

    // 在页面显示时更新 rootFontsize
    win.addEventListener('pageshow', updateRem, false);

})(window, document);
