/*
 * @Author: shunjinchan
 * @Date:   2015-10-15 15:08:08
 * @Last Modified by:   shunjinchan
 * @Last Modified time: 2016-01-03 17:36:47
 */

require('../../css/components/dialog.css');

var Backdrop = require('./backdrop.js');
var backdrop = new Backdrop();

var dialogTemplateTempDiv = document.createElement('div');

var defaults = {
    backdrop: true,
    dialogButtonOk: '确认',
    dialogButtonCancel: '取消',
    animation: 'scale'
};

function Dialog() {}

Dialog.prototype = {
    constructor: Dialog,

    /**
     * render dialog
     * @param  {Object} configs 配置信息
     * @return {[type]}         [description]
     */
    _render: function(configs) {
        if (this.isOpen) return;

        var self = this;
        var dialogHTML = '';
        var buttonsHTML = '';
        var buttonText = '';
        var footerHTML = '';
        var $buttons = '';
        var titleHTML = configs.title ? '<div class="dialog-title">' + configs.title + '</div>' : '';
        var content = configs.content ? configs.content : '';
        var afterContent = configs.afterContent ? configs.afterContent : '';
        var extraClass = configs.extraClass || '';
        var animation = configs.animation || defaults.animation;
        
        if (configs.buttons && configs.buttons.length > 0) {
            for (var i = 0; i < configs.buttons.length; i++) {
                // 只有一个 buttons 时，不需要加左边框
                if (i === 0) {
                    buttonsHTML += '<a href="javascript:;" class="dialog-button">' + configs.buttons[i].text + '</a>';
                } else {
                    buttonsHTML += '<a href="javascript:;" class="dialog-button border-l">' + configs.buttons[i].text + '</a>';
                }
            }

            footerHTML = '<div class="dialog-footer border-t">' + buttonsHTML + '</div>';
        }

        dialogHTML = '<div class="dialog ' + animation + ' ' + extraClass + '"><div class="dialog-container">' + titleHTML + '<div class="dialog-body">' + content + afterContent + '</div></div>' + footerHTML + '</div>';

        dialogTemplateTempDiv.innerHTML = dialogHTML;
        this.$box = $(dialogTemplateTempDiv).children();
        $('body').append($(dialogTemplateTempDiv).children()[0]);

        // setSize
        if (animation === 'scale') {
            this.$box.css('marginTop', -Math.round(this.$box.outerHeight() / 2 / 1.185) + 'px');
        } else {
            this.$box.css('marginTop', -Math.round(this.$box.outerHeight() / 2) + 'px');
        }

        // bindEvents
        $buttons = this.$box.find(".dialog-button");

        $.each($buttons, function(index, ele) {
            $(ele).on('click', function(e) {
                e.preventDefault();

                if (configs.buttons[index].close !== false) self.close();
                configs.buttons[index].onClick && configs.buttons[index].onClick(self, e);
                configs.onClick && configs.onClick(self.$box, index);
            });
        });
    },

    /**
     * open dialog
     * @param  {Object} configs 配置信息
     * @return {[type]}         [description]
     */
    open: function(configs) {
        this._render(configs);
        // show backdrop and dialog
        this.backdrop = configs.backdrop || defaults.backdrop;

        this.backdrop && backdrop.open();
        this.$box.show().removeClass('transition-out').addClass('transition-in');

        this.isOpen = true;
    },

    /**
     * close dialog
     * @param  {Object} configs 配置
     * @return {[type]}         [description]
     */
    close: function() {
        var self = this;

        if (this.$box.length === 0) {
            return;
        }

        this.backdrop && backdrop.close();
        this.$box.removeClass('transition-in').addClass('transition-out')
            .transitionEnd(function(e) {
                self.$box.off();
                self.$box.remove();
                self.$box = null;
                self.isOpen = false;
            });
    },

    /**
     * alert 对话框
     * @param  {String} content    对话框内容
     * @param  {String} title      对话框标题
     * @param  {function} callbackOk 确定按钮回调函数
     * @return {[type]}            [description]
     */
    alert: function(content, title, callbackOk) {
        if (typeof title === 'function') {
            callbackOk = arguments[1];
            title = undefined;
        }

        this.open({
            title: title || '',
            content: content || '',
            buttons: [{
                text: defaults.dialogButtonOk,
                onClick: callbackOk
            }]
        });
    },

    /**
     * confirm 对话框
     * @param  {String} content        对话框内容
     * @param  {String} title          对话框标题
     * @param  {function} callbackOk     确定按钮回调函数
     * @param  {function} callbackCancel 取消按钮回调函数
     * @return {[type]}                [description]
     */
    confirm: function(content, title, callbackOk, callbackCancel) {
        if (typeof title === 'function') {
            callbackCancel = arguments[2];
            callbackOk = arguments[1];
            title = undefined;
        }

        this.open({
            title: title || '',
            content: content || '',
            buttons: [{
                text: defaults.dialogButtonCancel,
                onClick: callbackCancel
            }, {
                text: defaults.dialogButtonOk,
                onClick: callbackOk
            }]
        });
    },

    /**
     * prompt 对话框，有文本输入框
     * @param  {String} content        对话框内容
     * @param  {String} title          对话框标题
     * @param  {function} callbackOk     确定按钮回调函数
     * @param  {function} callbackCancel 取消按钮回调函数
     * @return {[type]}                [description]
     */
    prompt: function(content, title, callbackOk, callbackCancel) {
        if (typeof title === 'function') {
            callbackCancel = arguments[2];
            callbackOk = arguments[1];
            title = undefined;
        }

        this.open({
            title: title || '',
            content: content || '',
            afterContent: '<input type="text" class="dialog-prompt-input">',
            buttons: [{
                text: defaults.dialogButtonCancel,
            }, {
                text: defaults.dialogButtonOk,
                close: false // prompt 组件点击确认按钮默认不关闭，需要手动调用 close
            }],
            onClick: function(box, index) {
                var value = box.find('.dialog-prompt-input').val();

                if (index === 0 && callbackCancel) callbackCancel(value);
                if (index === 1 && callbackOk) callbackOk(value);
            }
        });
    },

    /**
     * prompt 对话框，有密码输入框
     * @param  {String} content        对话框内容
     * @param  {String} title          对话框标题
     * @param  {function} callbackOk     确定按钮回调函数
     * @param  {function} callbackCancel 取消按钮回调函数
     * @return {[type]}                [description]
     */
    password: function(content, title, callbackOk, callbackCancel) {
        if (typeof title === 'function') {
            callbackCancel = arguments[2];
            callbackOk = arguments[1];
            title = undefined;
        }

        this.open({
            title: title || '',
            content: content || '',
            afterContent: '<input type="password" class="dialog-prompt-input" name="dialog-password" placeholder="请输入密码">',
            buttons: [{
                text: defaults.dialogButtonCancel,
            }, {
                text: defaults.dialogButtonOk,
                close: false // password 组件点击确认按钮默认不关闭，需要手动调用 close
            }],
            onClick: function(box, index) {
                var password = box.find('.dialog-prompt-input[name="dialog-password"]').val();

                if (index === 0 && callbackCancel) callbackCancel(password);
                if (index === 1 && callbackOk) callbackOk(password);
            }
        });
    }
};

module.exports = Dialog;
