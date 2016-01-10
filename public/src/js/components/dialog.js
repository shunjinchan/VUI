/*
 * @Author: shunjinchan
 * @Date:   2015-10-15 15:08:08
 * @Last Modified by:   pigsy.chen
 * @Last Modified time: 2016-01-10 10:58:10
 */

require('../../css/components/dialog.css');

var dialogTemplateTempDiv = document.createElement('div');

var defaults = {
    backdrop: true, // 蒙层
    dialogButtonOk: '确认', // 确认按钮文案
    dialogButtonCancel: '取消', // 取消按钮文案
    animation: 'scale', // 动画，需与 css 动画配合
    verticalButton: 'vertical-button'
};

// 实例
var instance;

function Dialog() {
    //如果已经缓存了实例，则直接返回缓存的实例 
    if(instance instanceof Dialog){
        return instance;
    } 

    this.createTime = new Date();
    //缓存实例 
    instance = this; 

    return this;
}

Dialog.prototype = {
    constructor: Dialog,

    /**
     * render dialog
     * @param  {Object} configs 配置信息
     * @return {[type]}         [description]
     */
    _render: function(configs) {
        var self = this;
        var dialogHTML = '';
        var buttonsHTML = '';
        var buttonText = '';
        var footerHTML = '';
        var titleHTML = configs.title ? '<div class="dialog-title">' + configs.title + '</div>' : '';
        var content = configs.content ? configs.content : '';
        var afterContent = configs.afterContent ? configs.afterContent : '';
        var extraClass = configs.extraClass || '';
        var animation = configs.animation || defaults.animation;
        var verticalButton = configs.verticalButton ? defaults.verticalButton : '';

        if (configs.buttons && configs.buttons.length > 0) {
            for (var i = 0; i < configs.buttons.length; i++) {
                buttonsHTML += '<a href="javascript:;" class="dialog-button">' + configs.buttons[i].text + '</a>';
            }

            footerHTML = '<div class="dialog-footer">' + buttonsHTML + '</div>';
        }

        dialogHTML = '<div class="dialog ' + animation + ' ' + extraClass + ' ' + verticalButton + '"><div class="dialog-container">' + titleHTML + '<div class="dialog-body">' + content + afterContent + '</div></div>' + footerHTML + '</div>';

        dialogTemplateTempDiv.innerHTML = dialogHTML;
        this.$box = $(dialogTemplateTempDiv).children();
        $('body').append($(dialogTemplateTempDiv).children()[0]);

        this.$backdrop = $('<div id="backdrop" class="backdrop"></div>');
        $('body').append(this.$backdrop);

        this._setSize(animation);
    },

    _setSize: function(animation) {
        if (animation === 'scale') {
            this.$box.css('marginTop', - Math.round(this.$box.outerHeight() / 2 / 1.185) + 'px');
        } else {
            this.$box.css('marginTop', - Math.round(this.$box.outerHeight() / 2) + 'px');
        }
    },

    _bindEvents: function(configs) {
        var self = this;
        var $buttons;

        if (configs.type === 'actionSheet') {
            $buttons = this.$box.find(".action-sheet-button");
        } else {
            $buttons = this.$box.find(".dialog-button");
        }

        $.each($buttons, function(index, ele) {
            $(ele).on('click', function(e) {
                e.preventDefault();

                if (configs.buttons[index].close !== false) self.close();
                configs.buttons[index].onClick && configs.buttons[index].onClick(self, e);
                configs.onClick && configs.onClick(self.$box, index);
            });
        });

        this.$box.on('click', '[data-action="close"]', function(e) {
            self.close();
        });

        this.$backdrop.on('touchmove', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
    },

    /**
     * open dialog
     * @param  {Object} configs 配置信息
     * @return {[type]}         [description]
     */
    open: function(configs) {
        if (this.isOpen) return;
        
        this._render(configs);
        this._bindEvents(configs);
        this.$backdrop && this.$backdrop.addClass('visible');
        this.$box.show().removeClass('transition-out').addClass('transition-in');

        this.isOpen = true;
    },

    /**
     * close dialog
     * @param  {function} 关闭之后的回调函数
     * @return {[type]}         [description]
     */
    close: function(callback) {
        var self = this;

        if (this.$box.length === 0) {
            return;
        }

        this.$backdrop && this.$backdrop.removeClass('visible');
        this.$box.removeClass('transition-in').addClass('transition-out')
            .transitionEnd(function(e) {
                self.$box.off();
                self.$box.remove();
                self.$box = null;
                
                self.$backdrop.off();
                self.$backdrop.remove();

                self.isOpen = false;

                callback && typeof callback === 'function' && callback();
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
            afterContent: '<input type="text" class="dialog-input">',
            buttons: [{
                text: defaults.dialogButtonCancel,
            }, {
                text: defaults.dialogButtonOk,
                close: false // prompt 组件点击确认按钮默认不关闭，需要手动调用 close
            }],
            onClick: function(box, index) {
                var value = box.find('.dialog-input').val();

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
            afterContent: '<input type="password" class="dialog-input" name="dialog-password" placeholder="请输入密码">',
            buttons: [{
                text: defaults.dialogButtonCancel,
            }, {
                text: defaults.dialogButtonOk,
                close: false // password 组件点击确认按钮默认不关闭，需要手动调用 close
            }],
            onClick: function(box, index) {
                var password = box.find('.dialog-input[name="dialog-password"]').val();

                if (index === 0 && callbackCancel) callbackCancel(password);
                if (index === 1 && callbackOk) callbackOk(password);
            }
        });
    },

    login: function(content, title, callbackOk, callbackCancel) {
        if (typeof title === 'function') {
            callbackCancel = arguments[2];
            callbackOk = arguments[1];
            title = undefined;
        }

        this.open({
            title: title || '',
            content: content || '',
            afterContent: '<input type="text" class="dialog-input" name="dialog-username" placeholder="请输入用户名"><input type="password" class="dialog-input" name="dialog-password" placeholder="请输入密码">',
            buttons: [{
                text: defaults.dialogButtonCancel,
            }, {
                text: defaults.dialogButtonOk,
                close: false // password 组件点击确认按钮默认不关闭，需要手动调用 close
            }],
            onClick: function(box, index) {
                var username = box.find('.dialog-input[name="dialog-username"]').val();
                var password = box.find('.dialog-input[name="dialog-password"]').val();

                if (index === 0 && callbackCancel) callbackCancel(username, password);
                if (index === 1 && callbackOk) callbackOk(username, password);
            }
        });
    },

    register: function(content, title, callbackOk, callbackCancel) {
        if (typeof title === 'function') {
            callbackCancel = arguments[2];
            callbackOk = arguments[1];
            title = undefined;
        }

        this.open({
            title: title || '',
            content: content || '',
            afterContent: '<input type="text" class="dialog-input" name="dialog-username" placeholder="请输入用户名"><input type="password" class="dialog-input" name="dialog-password" placeholder="请输入密码"><input type="text" class="dialog-input" name="dialog-auth-code" placeholder="请输入验证码">',
            buttons: [{
                text: defaults.dialogButtonCancel,
            }, {
                text: defaults.dialogButtonOk,
                close: false // password 组件点击确认按钮默认不关闭，需要手动调用 close
            }],
            onClick: function(box, index) {
                var username = box.find('.dialog-input[name="dialog-username"]').val();
                var password = box.find('.dialog-input[name="dialog-password"]').val();
                var authCode = box.find('.dialog-input[name="dialog-auth-code"]').val();

                if (index === 0 && callbackCancel) callbackCancel(username, password, authCode);
                if (index === 1 && callbackOk) callbackOk(username, password, authCode);
            }
        });
    },

    /**
     * actionSheet dialog
     * @param  {Object} configs 配置信息
     * @return {[type]}         [description]
     */
    actionSheet: function(configs) {
        if (this.isOpen) return;
        
        var self = this;
        var actionSheetHTML = '';
        var buttonsHTML = '';
        var buttonText = '';
        var groupHTML = '';
        var footerHTML = '<div class="action-sheet-footer"><a href="javascript:;" class="action-sheet-close" data-action="close">' + defaults.dialogButtonCancel + '</a></div>';
        var titleHTML = configs.title ? '<div class="action-sheet-title">' + configs.title + '</div>' : '';
        var extraClass = configs.extraClass || '';
        var animation = configs.animation || 'from-bottom';
        var verticalButton = configs.verticalButton ? defaults.verticalButton : '';

        if (configs.buttons && configs.buttons.length > 0) {
            for (var i = 0; i < configs.buttons.length; i++) {
                buttonsHTML += '<a href="javascript:;" class="action-sheet-button">' + configs.buttons[i].text + '</a>';
            }

            groupHTML = '<div class="action-sheet-group">' + buttonsHTML + '</div>';
        }

        actionSheetHTML = '<div class="action-sheet ' + animation + ' ' + extraClass + ' ' + verticalButton + '"><div class="action-sheet-container">' + titleHTML + groupHTML + '</div>' + footerHTML + '</div>';

        dialogTemplateTempDiv.innerHTML = actionSheetHTML;
        this.$box = $(dialogTemplateTempDiv).children();
        $('body').append($(dialogTemplateTempDiv).children()[0]);

        this.$backdrop = $('<div id="backdrop" class="backdrop"></div>');
        $('body').append(this.$backdrop);

        this._bindEvents(configs);
        this.$backdrop && this.$backdrop.addClass('visible');
        this.$box.show().removeClass('transition-out').addClass('transition-in');

        this.isOpen = true;
    },
};

module.exports = Dialog;
