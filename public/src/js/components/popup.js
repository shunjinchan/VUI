/*
 * @Author: shunjinchan
 * @Date:   2015-10-29 17:22:40
 * @Last Modified by:   shunjinchan
 * @Last Modified time: 2016-01-03 18:41:39
 */

require('../../css/components/popup.css');

var Backdrop = require('./backdrop.js');
var backdrop = new Backdrop();

var instance;

// 默认配置
var configs = {
    target: null, // 目标 popup
    backdrop: true, // 蒙层
    extraClass: null, // 节点附加 class，方便自行控制不同场景的样式
    box: '<div class="popup"><div class="popup-body"></div></div>', // popup box，当没有传入 target 为空时使用
    title: null,
    body: null, // 要插入到 popup-body 的 html
    animation: 'from-bottom', // 动画
    transitionOpen: 'slide-in',
    transitionClose: 'slide-out'
};

/**
 * 弹窗
 * @param {Object} options 自定义配置
 */
function Popup() {}

Popup.prototype = {
    constructor: Popup,

    conf: function(options) {
        configs = $.extend({}, configs, options);

        return this;
    },

    /**
     * 打开弹窗
     * @param  {zepto 对象} obj 弹窗，obj 为空时会创建一个popup，这种类型的在 close 时会被移除
     * @return {undfined}
     */
    open: function(obj) {
        if (this.isOpen) return;

        var self = this;
        instance = this;
        this.$box = obj ? obj : configs.target;

        if (!this.$box) {
            this.$box = $(configs.box).appendTo('body');
            configs.destory = true;
        }

        configs.backdrop && backdrop.open();

        configs.target = this.$box;

        this.$box.show();
        render();
        bindEvents();

        // 触发 relayout，少了这玩意 css 动画不执行
        var clientLeft = this.$box[0].clientLeft;

        // 触发 open 事件
        this.$box.trigger('open');

        this.$box.removeClass(configs.transitionClose).addClass(configs.transitionOpen)
            .transitionEnd(function(e) {
                if (self.$box.hasClass(configs.transitionClose)) {
                    // 触发 closed 事件
                    self.$box.trigger('closed');
                } else {
                    self.$box.trigger('opened');
                }
        });

        this.isOpen = true;

        return this;
    },

    close: function() {
        var self = this;

        if (!this.$box) return;

        this.$box.trigger('close');

        configs.backdrop && backdrop.close();

        this.$box.removeClass(configs.transitionOpen).addClass(configs.transitionClose)
            .transitionEnd(function(e) {
                if (self.$box.hasClass(configs.transitionClose)) {
                    self.$box.trigger('closed');
                    self.$box.removeClass(configs.transitionClose).hide();

                    configs.destory && self.$box.remove();
                } else {
                    self.$box.trigger('opened');
                }
        });

        this.isOpen = false;

        return this;
    }
};

function render() {
    configs.animation &&
    configs.target.addClass(configs.animation);

    configs.extraClass &&
    configs.target.addClass(configs.extraClass);

    configs.title &&
    configs.target.find('.popup-title').html(configs.title);

    configs.body &&
    configs.target.find('.popup-body').html(configs.body);
}

function bindEvents() {
    instance.$box.on('click', '[data-toggle="popup"]', function(e) {
        var $target = $(e.currentTarget);

        if ($target.data('action')
            && $target.data('action') === 'close') {
            if ($target[0].nodeName.toLowerCase() === 'a') {
                e.preventDefault();
            }
            instance.close();
        }
    });
}

module.exports = Popup;
