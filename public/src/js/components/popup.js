/*
 * @Author: shunjinchan
 * @Date:   2015-10-29 17:22:40
 * @Last Modified by:   shunjinchan
 * @Last Modified time: 2016-01-06 00:30:57
 */

require('../../css/components/popup.css');

// 默认配置
var defaults = {
    backdrop: true, // 蒙层
    animation: 'from-bottom', // 动画
    box: '<div class="popup"></div>', // popup box，当没有传入 target 为空时使用
};

var instance;

/**
 * 弹窗
 * @param {Object} options 自定义配置
 */
function Popup() {
    //如果已经缓存了实例，则直接返回缓存的实例 
    if (instance instanceof Popup) {
        return instance;
    }

    this.createTime = new Date();
    //缓存实例 
    instance = this;

    return this;
}

Popup.prototype = {
    constructor: Popup,

    _render: function(configs) {
        var self = this;
        var animation = configs.animation || defaults.animation;
        var extraClass = configs.extraClass || '';
        var popupHTML = configs.html || '';
        var titleHTML = configs.title ? '<div class="popup-header top-bar border-b"><h3 class="popup-title">' 
            + configs.title + '</h3><a href="" class="close" data-toggle="popup" data-action="close"></a></div>' : '';
        var bodyHTML = configs.body ? '<div class="popup-body">' + configs.body + '</div>' : '';
        var footerHTML = configs.footer ? '<div class="popup-footer bottom-bar border-t">' + configs.footer + '</div>' : '';

        if (configs.target && configs.target.length > 0) {
            this.$box = configs.target;

            this.destory = false;
        } else {
            this.$box = $(defaults.box).appendTo('body');
            
            if (!popupHTML) {
                this.$box.html(titleHTML + bodyHTML + footerHTML);
            }

            this.destory = true;
        }

        popupHTML && this.$box.html(popupHTML);

        this.$box.show();
        extraClass && this.$box.addClass(extraClass);
        animation && this.$box.addClass(animation);

        // 触发 relayout，少了这玩意 css 动画不执行
        var clientLeft = this.$box[0].clientLeft;

        this.$box.trigger('open');
        this.$box.removeClass('transition-out').addClass('transition-in')
            .transitionEnd(function(e) {
                if (self.$box.hasClass('transition-out')) {
                    // 触发 closed 事件
                    self.$box.trigger('closed');
                } else {
                    self.$box.trigger('opened');
                }
            });

        this.$backdrop = $('<div id="backdrop" class="backdrop"></div>');
        $('body').append(this.$backdrop);
    },

    open: function(configs) {
        if (this.isOpen) return;

        this._render(configs);
        bindEvents();
        this.isOpen = true;
    },

    close: function() {
        var self = this;

        if (!this.$box) return;

        this.$box.trigger('close');

        this.$backdrop && this.$backdrop.removeClass('visible');
        this.$box.removeClass('transition-in').addClass('transition-out')
            .transitionEnd(function(e) {
                if (self.$box.hasClass('transition-out')) {
                    self.$box.trigger('closed');
                    self.$box.removeClass('transition-out').hide();

                    self.$backdrop.off();
                    self.$backdrop.remove();

                    this.destory && self.$box.remove();
                } else {
                    self.$box.trigger('opened');
                }
            });

        this.isOpen = false;
    }
};

function bindEvents() {
    instance.$box.on('click', '[data-toggle="popup"]', function(e) {
        var $target = $(e.currentTarget);

        if ($target.data('action') && $target.data('action') === 'close') {
            if ($target[0].nodeName.toLowerCase() === 'a') {
                e.preventDefault();
            }
            instance.close();
        }
    });

    instance.$backdrop.on('touchmove', function(e) {
        e.preventDefault();
        e.stopPropagation();
    });
}

module.exports = Popup;
