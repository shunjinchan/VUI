/*
 * @Author: shunjinchan
 * @Date:   2015-10-29 17:22:40
 * @Last Modified by:   shunjinchan
 * @Last Modified time: 2015-12-28 17:28:10
 */

require('../../css/components/popup.css');

function Popup(configs) {
    this.configs = $.extend({}, Popup.configs, configs);
}

Popup.configs = {
    target: null, // 目标 popup
    backdrop: true, // 蒙层
    extraClass: null, // 节点附加 class，方便自行控制不同场景的样式
    html: null
};

Popup.prototype = {
    constructor: Popup,

    render: function() {
        this.configs.extraClass && this.configs.target.addClass(this.configs.extraClass);

        if (this.configs.html) {
            this.configs.target.find('.popup-container').html(this.configs.html);
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
            popup = $('<div class="popup"><div class="popup-container"></div></div>');

            $('body').append(popup);

            this.configs.html = obj || this.configs.html;
            this.configs.destory = true;

            $target = popup;
        }

        if (this.configs.backdrop) {
            var Backdrop = require('../../js/components/backdrop.js');

            this.backdrop = new Backdrop();

            this.backdrop.open();
        }

        $target.show();
        this.configs.target = $target;

        this.render();
        this.bind();

        // 触发 relayout，少了这玩意 slide-in 动画不执行
        var clientLeft = $target[0].clientLeft;

        // 触发 open 事件
        $target.trigger('open');

        $target.removeClass('slide-out').addClass('slide-in').transitionEnd(function(e) {
            if ($target.hasClass('slide-out')) {
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

        $target = obj || this.configs.target;

        if (!$target) return;

        $target.trigger('close');

        this.backdrop.close();

        $target.removeClass('slide-in').addClass('slide-out').transitionEnd(function(e) {
            if ($target.hasClass('slide-out')) {
                $target.trigger('closed');
                $target.removeClass('slide-out').hide();

                self.configs.destory && $target.remove();
            } else {
                $target.trigger('opened');
            }
        });

        this.isShown = false;
    },

    bind: function() {
        var self = this;

        this.configs.target.on('click', '[data-toggle="popup"]', function(e) {
            var $target = $(e.currentTarget);

            if ($target[0].nodeName.toLowerCase() === 'a') {
                e.preventDefault();
            }

            self.close();
        });
    }
};

module.exports = Popup;
