/* 
* @Author: shunjinchan
* @Date:   2015-12-28 15:21:49
* @Last Modified by:   shunjinchan
* @Last Modified time: 2015-12-28 17:12:05
*/

require('../../css/components/backdrop.css');

function Backdrop(configs) {
    this.configs = $.extend({}, Backdrop.configs, configs);
}

Backdrop.configs = {
    html: '<div id="backdrop" class="backdrop"></div>',
    isShown: false
};

Backdrop.prototype = {
    render: function() {
        if ($('#backdrop').length > 0) {
            this.$backdrop = $('#backdrop');
        } else {
            this.$backdrop = $(Backdrop.configs.html).appendTo($('body'));
        }
    },

    open: function() {
        if (this.configs.isShown ===  true) return false;

        this.render();
        this.$backdrop.addClass('visible');

        this.$backdrop.on('touchmove', onTouchmove);

        this.configs.isShown = true;
    },

    close: function() {
        this.$backdrop.removeClass('visible');

        this.configs.isShown = false;
    }
};

function onTouchmove(e) {
    e.preventDefault();
}

module.exports = Backdrop;