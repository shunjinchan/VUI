/*
 * @Author: shunjinchan
 * @Date:   2015-10-15 15:08:08
 * @Last Modified by:   shunjinchan
 * @Last Modified time: 2016-01-06 23:41:00
 */

require('../../css/components/tab.css');

var defaults = {
    activeClass: 'active'
};

function Tab() {}

Tab.prototype = {
    constructor: Tab,

    init: function(configs) {
        var self = this;

        this.control = configs.control;
        this.target = [];

        // 收集 target
        $.each(this.control, function(index, ele) {
            self.target.push($($(this).attr('data-target')));
        });

        this._bind(configs);
    },

    _bind: function(configs) {
        var self = this;
        var target;
        var activeClass = configs.activeClass ? configs.activeClass : defaults.activeClass;

        function clickHandler(e) {
            e.preventDefault();

            // 如果点击的是当前 active tab
            if ($(this).hasClass(activeClass)) {
                return false;
            }

            // 当前 control 高亮，其他 control 去高亮
            self.control.removeClass(activeClass);
            $(this).addClass(activeClass);

            // 显示当前 pane，其他 pane 隐藏
            target = $(this).attr('data-target');

            $.each(self.target, function(index, ele) {
                ele.removeClass(activeClass);

                $(target).addClass(activeClass);
            });

            // 第一个参数当前 control
            // 第二个参数当前 pane
            configs.onchange && configs.onchange($(this), $(target));
        }

        $.each(this.control, function(index, ele) {
            $(this).on('click', clickHandler);
        });
    }
};

module.exports = Tab;
