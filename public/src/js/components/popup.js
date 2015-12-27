/*
 * @Author: shunjinchan
 * @Date:   2015-10-29 17:22:40
 * @Last Modified by:   shunjinchan
 * @Last Modified time: 2015-12-27 14:05:49
 */

require('../../css/components/popup.css');

function Popup(configs) {
    this.configs = $.extend({}, Popup.configs, configs);
}

Popup.configs = {
    target: null,
    backdrop: true, // 蒙层
    isShown: false,
    extraClass: null, // 节点附加 class，方便自行控制不同场景的样式
    id: null, // 节点附加 id
    template: null
};

Popup.prototype = {
    render: function() {
        if (this.isShown) return;
    },

    open: function(target) {
        var popup = $(target);

        if (popup) {
            popup.show();

            popup.removeClass('modal-out').addClass('modal-in').transitionEnd(function (e) {
                if (popup.hasClass('modal-out')) {
                    popup.trigger('closed');
                } else {
                    popup.trigger('opened');
                }
            });
        }
    }
};



module.exports = Popup;