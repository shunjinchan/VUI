/*
* @Author: shunjinchan
* @Date:   2015-12-28 15:21:49
* @Last Modified by:   pigsy.chen
* @Last Modified time: 2015-12-30 23:25:22
*/

require('../../css/components/backdrop.css');

// 默认配置
configs = {
    html: '<div id="backdrop" class="backdrop"></div>'
};

/**
 * 蒙层
 * @param {Object} params 自定义配置
 */
function Backdrop(params) {
    configs = $.extend({}, configs, params);
}

Backdrop.prototype = {
    render: function() {
        if ($('#backdrop').length > 0) {
            this.$backdrop = $('#backdrop');
        } else {
            this.$backdrop = $(configs.html).appendTo($('body'));
        }
    },

    open: function() {
        if (this.isOpen ===  true) return false;

        this.render();
        this.$backdrop.addClass('visible');

        this.$backdrop.on('touchmove', onTouchmove);

        this.isOpen = true;
    },

    close: function() {
        this.$backdrop.removeClass('visible');

        this.isOpen = false;
    }
};

function onTouchmove(e) {
    e.preventDefault();
}

module.exports = Backdrop;
