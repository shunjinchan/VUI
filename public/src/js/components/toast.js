/* 
* @Author: shunjinchan
* @Date:   2015-10-15 13:34:31
* @Last Modified by:   shunjinchan
* @Last Modified time: 2015-11-02 22:38:54
*/

!(function() {

    (function(factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(['zepto', 'velocity', 'dialog'], factory);
        } else {
            // Browser globals
            factory(Zepto, Velocity, Popup);
        }
    }(function($, Velocity, Popup) {

        function Toast(options) {
            this.options = $.extend({}, Toast.options, options);

            this.html = {
                backdrop: '<div class="modal-backdrop"></div>',
                box: '<div class="popup-container show">' +
                    '<div class="toast">' +
                    '<div class="toast-header"><strong class="toast-title"></strong></div>' +
                    '<div class="toast-body"></div>' +
                    '</div>' +
                    '</div>'
            };
        }

        Toast.options = {
            backdrop: false,
            type: 'toast',
            cssClass: 'toast',
            timer: 3000,
            zIndex: 3000
        };

        Toast.prototype = new Popup();

        Toast.prototype.constructor = Toast;

        Toast.prototype.render = function() {
            if (this.isShown) return;

            var type; // 按钮类型
            var self = this;

            this.$box = $(this.html.box);
            this.$toast = this.$box.find('.toast');

            // 插入对话框
            $('body').append(this.$box);

            // 是否需要蒙层
            if (this.options.backdrop) {
                this.backdrop();
            }

            if (this.options.template) {
                this.$toast.html(this.options.template);

                return false;
            }

            if (this.options.templateUrl) {
                $.get(this.options.templateUrl, function(data) {
                    self.$toast.html(data);
                });

                return false;
            }

            this.options.title && this.$box.find('.toast-title').html(this.options.title);
            this.options.subTitle && this.$box.find('.toast-body').html(this.options.subTitle);

            // 独有id
            this.options.id && this.$toast.attr('id', this.options.id);

            // 主题
            this.options.cssClass && this.$toast.addClass(this.options.cssClass);

            // zIndex
            this.options.zIndex && this.$box.css('zIndex', this.options.zIndex);

            this.bind();
        };


        if (typeof define === 'function' && define.amd) {
            return Toast;
        } else {
            window.Toast = Toast;
        }

    }));

})();