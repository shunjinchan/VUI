/*
 * @Author: shunjinchan
 * @Date:   2015-10-15 15:08:08
 * @Last Modified by:   shunjinchan
 * @Last Modified time: 2015-12-31 00:31:01
 */

require('../../css/components/popup.css');

var Backdrop = require('./backdrop.js');
var backdrop = new Backdrop();

var timer = null;

var html = '<div class="dialog show">' +
    '<div class="dialog-container">' +
    '<div class="dialog-header"><strong class="dialog-title"></strong></div>' +
    '<div class="dialog-body"></div>' +
    '<div class="dialog-footer border-t"></div>' +
    '</div>' +
    '</div>';

var configs = {
    backdrop: true,
    buttons: [{
        text: '确认',
        type: 'button-confirm',
        // onTap(obj, ele, event)
        // 第一个参数是当前 Dialog 对象
        // 第二个参数是当前点击对象
        // 第二个参数是当前点事件
        onTap: function(obj, ele, e) {
            obj.hide();
        }
    }, ],
    cssClass: 'dialog-alert' // theme，默认 alert 对话框
};

function Dialog(params) {
    this.configs = $.extend({}, configs, params);

    this.html = {
        backdrop: '<div class="modal-backdrop"></div>',
        box: '<div class="popup-container show">' +
            '<div class="dialog">' +
            '<div class="dialog-header"><strong class="dialog-title"></strong></div>' +
            '<div class="dialog-body"></div>' +
            '<div class="dialog-footer border-t"></div>' +
            '</div>' +
            '</div>'
    };
}

Dialog.prototype = {
    constructor: Dialog,

    render: function() {
        if (this.isShown) return;

        this.$box = $(this.html.box);
        this.$dialog = this.$box.find('.dialog');

        // 插入对话框
        $('body').append(this.$box);

        // 是否需要蒙层
        if (this.configs.backdrop) {
            this.backdrop();
        }

        // template
        if (this.configs.template) {
            this.$dialog.html(this.configs.template);

            return false;
        }

        if (this.configs.templateUrl) {
            $.get(this.configs.templateUrl, function(data) {
                self.$dialog.html(data);
            });

            return false;
        }

        var type; // 按钮类型
        var self = this;

        function buttonsRender() {
            // 根据 buttons 长度添加按钮
            for (var i = 0; i < counts; i++) {
                type = self.configs.buttons[i].type ? self.configs.buttons[i].type : '';
                text = self.configs.buttons[i].text ? self.configs.buttons[i].text : '';

                // 只有一个 buttons 时，不需要加左边框
                if (i === 0) {
                    buttons += '<a href="javascript:;" class="' +
                        type +
                        '">' +
                        text +
                        '</a>';
                } else {
                    buttons += '<a href="javascript:;" class="border-l ' +
                        type +
                        '">' +
                        text +
                        '</a>';
                }
            }
        }

        // 当 buttons 有且为数组的时候
        if (this.configs.buttons && Array.isArray(this.configs.buttons)) {
            var counts = this.configs.buttons.length; // 按钮个数
            var buttons = ''; // 存放按钮 html
            var text; // 按钮文案

            buttonsRender();
        }

        // 设置 title 跟 subtitle
        this.configs.title && this.$box.find('.dialog-title').html(this.configs.title);
        this.configs.subTitle && this.$box.find('.dialog-body').html(this.configs.subTitle);

        // 插入 dialog-footer
        this.configs.buttons && this.$box.find(".dialog-footer").html(buttons);

        // 独有id
        this.configs.id && this.$dialog.attr('id', this.configs.id);

        // 主题
        this.configs.cssClass && this.$dialog.addClass(this.configs.cssClass);

        // zIndex
        this.configs.zIndex && this.$box.css('zIndex', this.configs.zIndex);

        this.bind();
    },

    // 事件绑定
    bind: function() {
        // 按钮
        var $buttons = this.$box.find(".dialog-footer a");
        var self = this;

        // 为按钮添加点击时的函数
        $.each($buttons, function(index, ele) {
            $(ele).on('touchend', function(e) {
                self.configs.buttons[index].onTap && self.configs.buttons[index].onTap(self, this, e);

                e.preventDefault();
            });
        });

        // 阻止页面滚动
        this.$box.on('touchmove', function(e) {
            e.preventDefault();
        });
    },

    /**
     * 当使用 alert 与 confirm 方式调用的时候
     * 默认会被认为接受默认设置
     **/
    // 警告对话框，单个按钮
    // callback 为确定按钮点击时的回调函数
    alert: function(str, callback) {
        if (this.isShown) return;

        // 如果 undefined 或者空值
        if (str === undefined || str === '') {
            return false;
        }

        // 对话框 title
        var title = typeof str === 'string' ? str : str.toString();

        var configs = {
            title: title, // dialog-header 内容
            buttons: [{
                text: '确认',
                type: 'button-confirm',
                onTap: callback ? callback : null
            }],
            cssClass: 'dialog-alert'
        };

        configs = $.extend({}, this.configs, configs);

        this.show(configs);
    },

    // 确认对话框，两个按钮
    // cancelCallback 为取消按钮点击时的回调函数
    // confirmCallback 为确定按钮点击时的回调函数
    confirm: function(str, cancelCallback, confirmCallback) {
        if (this.isShown) return;

        // 如果undefined或者空值
        if (str === undefined || str === '') {
            return false;
        }

        // 对话框 title，如果不是字符串则将其转换成字符串
        var title = typeof str === 'string' ? str : str.toString();

        var configs = {
            title: title, // dialog-header 内容
            buttons: [{
                text: '取消',
                type: 'button-cancel',
                onTap: cancelCallback
            }, {
                text: '确认',
                type: 'button-confirm',
                onTap: confirmCallback
            }],
            cssClass: 'dialog-confirm'
        };

        configs = $.extend({}, this.configs, configs);

        this.show(configs);
    }
};
