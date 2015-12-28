/*
 * @Author: shunjinchan
 * @Date:   2015-10-29 17:22:40
 * @Last Modified by:   shunjinchan
 * @Last Modified time: 2015-12-28 17:28:10
 */

require('../../css/components/popup.css');

var Backdrop = require('./backdrop.js');
var backdrop = new Backdrop();

// 默认配置
var configs = {
    target: null, // 目标 popup
    backdrop: true, // 蒙层
    extraClass: null, // 节点附加 class，方便自行控制不同场景的样式
    box: '<div class="popup"><div class="popup-container"></div></div>', // popup box
    html: null, // 要插入的 html
    transitionOpen: 'slide-in',
    transitionClose: 'slide-out'
};

function Popup(params) {
    configs = $.extend({}, configs, params);
}

Popup.prototype = {
    constructor: Popup,

    render: function() {
        configs.extraClass && configs.target.addClass(configs.extraClass);

        if (configs.html) {
            configs.target.find('.popup-container').html(configs.html);
        }
    },

    // target 为空时会创建一个popup，这种类型的在 close 时会被移除
    // obj 是一个 jquery 对象
    open: function(obj) {
        if (this.isShown) return;

        // 传入页面上不存在的 jqeury 对象，直接返回
        if (obj && obj.length === 0) return false;

        $target = obj;

        // obj 为类型是 string 或为 undefine 时，新建一个 popup
        // obj: String，则默认认为这是要插入到 popup 的 html 内容
        // obj: undefined
        if (typeof obj === 'string' || obj === undefined) {
            popup = $(configs.box);

            $('body').append(popup);

            configs.html = obj || configs.html;
            configs.destory = true; // destory 为 true，该 popup 关闭时会被移除出 dom

            $target = popup;
        }

        if (configs.backdrop) {
            backdrop.open();
        }

        $target.show();
        configs.target = $target;
        this.$box = $target; // this.$box 是当前 popup

        this.render();
        this.bind();

        // 触发 relayout，少了这玩意 slide-in 动画不执行
        var clientLeft = $target[0].clientLeft;

        // 触发 open 事件
        $target.trigger('open');

        $target.removeClass(configs.transitionClose).addClass(configs.transitionOpen)
            .transitionEnd(function(e) {
                if ($target.hasClass(configs.transitionClose)) {
                    // 触发 closed 事件
                    $target.trigger('closed');
                } else {
                    $target.trigger('opened');
                }
        });

        this.isShown = true;
    },

    close: function(obj) {
        var self = this;

        $target = obj || configs.target;

        if (!$target) return;

        $target.trigger('close');

        backdrop.close();

        $target.removeClass(configs.transitionOpen).addClass(configs.transitionClose)
            .transitionEnd(function(e) {
                if ($target.hasClass(configs.transitionClose)) {
                    $target.trigger('closed');
                    $target.removeClass(configs.transitionClose).hide();

                    configs.destory && $target.remove();
                } else {
                    $target.trigger('opened');
                }
        });

        this.isShown = false;
    },

    bind: function() {
        var self = this;

        configs.target.on('click', '[data-toggle="popup"]', function(e) {
            var $target = $(e.currentTarget);

            if ($target[0].nodeName.toLowerCase() === 'a') {
                e.preventDefault();
            }

            self.close();
        });
    }
};

module.exports = Popup;
