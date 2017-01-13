/*
 * @Author: shunjinchan
 * @Date:   2015-10-15 15:08:08
 * @Last Modified by:   pigsy.chen
 * @Last Modified time: 2016-05-03 20:33:56
 */

'use strict';

require('../../css/components/tab.css');

var defaults = {
    activeClass: 'active'
};

/**
 * tab 切换
 * usage:
 * var tab = new Tab({
 *     control: $('#J-tab .button'),
 *     onchange: function () {}
 * })
 */
function Tab(opts) {
    var self = this;
    this.target = [];

    $.extend(opts, defaults);

    // 收集 target
    $.each(opts.control, function (index, ele) {
        self.target.push($($(this).attr('data-target')));
    });

    opts.target = this.target;
    this.opts = opts;
    bindEvents(opts);
}

function bindEvents(opts) {
    $.each(opts.control, function (index, ele) {
        $(this).on('click', function (e) {
            e.preventDefault();
            clickHandler($(this), opts);
        });
    });
}

function clickHandler(obj, opts) {
    var target = obj.attr('data-target');
    var activeClass = opts.activeClass ? opts.activeClass : defaults.activeClass;

    if (obj.hasClass(activeClass)) {
        return false;
    }

    // 高亮当前按钮
    opts.control.removeClass(activeClass);
    obj.addClass(activeClass);

    // 显示当前面板
    $.each(opts.target, function (index, ele) {
        ele.removeClass(activeClass);

        $(target).addClass(activeClass);
    });

    opts.onchange && opts.onchange();
}

module.exports = Tab;
