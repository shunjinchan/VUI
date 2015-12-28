/*
* @Author: shunjinchan
* @Date:   2015-12-28 15:21:49
* @Last Modified by:   shunjinchan
* @Last Modified time: 2015-12-28 17:12:05
*/

require('../../css/components/backdrop.css');

// 默认配置
configs = {
    html: '<div id="backdrop" class="backdrop"></div>'
};

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
        if (this.isShown ===  true) return false;

        this.render();
        this.$backdrop.addClass('visible');

        this.$backdrop.on('touchmove', onTouchmove);

        this.isShown = true;
    },

    close: function() {
        this.$backdrop.removeClass('visible');

        this.isShown = false;
    }
};

function onTouchmove(e) {
    e.preventDefault();
}

module.exports = Backdrop;
