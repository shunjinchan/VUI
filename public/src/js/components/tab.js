/* 
 * @Author: shunjinchan
 * @Date:   2015-10-15 15:08:08
 * @Last Modified by:   shunjinchan
 * @Last Modified time: 2015-12-08 23:50:56
 */

!(function() {

    (function(factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(['zepto'], factory);
        } else {
            // Browser globals
            factory(Zepto);
        }
    }(function($) {

        function Tab(options) {
            this.options = $.extend({}, Tab.options, options);

            this.render();
        }

        Tab.options = {
            control: null,
            onchange: null,
            activeClass: 'active'
        };

        Tab.prototype.render = function() {
            var self = this;

            this.control = this.options.control;
            this.target = [];
            
            // 收集 target
            $.each(this.control, function(index, ele) {
                self.target.push($($(this).attr('data-target')));
            });

            this.bind();
        };

        // 事件绑定
        Tab.prototype.bind = function() {
            var self = this;
            var target;

            $.each(this.control, function(index, ele) {
                $(this).on('click', function(e) {
                    e.preventDefault();

                    // 如果点击的是当前 active tab
                    if ($(this).hasClass(self.options.activeClass)) {
                        return false;
                    }

                    // 当前 control 高亮，其他 control 去高亮
                    self.control.removeClass(self.options.activeClass);
                    $(this).addClass(self.options.activeClass);

                    // 显示当前 pane，其他 pane 隐藏
                    target = $(this).attr('data-target');

                    $.each(self.target, function(index, ele) {
                        ele.removeClass(self.options.activeClass);

                        $(target).addClass(self.options.activeClass);
                    });

                    // 第一个参数当前 control
                    // 第二个参数当前 pane
                    self.options.onchange && self.options.onchange($(this), $(target));
                });
            });
        };

        if (typeof define === 'function' && define.amd) {
            return Tab;
        } else {
            window.Tab = Tab;
        }

    }));

})();
