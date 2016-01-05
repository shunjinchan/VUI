/* 
 * @Author: shunjinchan
 * @Date:   2016-01-03 19:19:17
 * @Last Modified by:   pigsy.chen
 * @Last Modified time: 2016-01-03 23:31:15
 */

require('../../css/components/loader.css');

var box = '<div class="loader-container"><div class="loader-body"><div class="activity activity-white"></div></div><div class="loader-title"></div></div>';

var defaults = {
    title: '加载中...'
};

/**
 * Loader，不提供定时关闭功能
 */
function Loader() {}

Loader.prototype = {
    constructor: Loader,

    /**
     * open loader
     * @param  {String} title 标题
     * @return {[type]}         [description]
     */
    open: function(title) {
        if (this.isOpen) return;

        this.$box = $(box).appendTo('body');

        if (arguments.length === 2) {
            console.log('nimabi');
        }

        title = title || defaults.title;
        this.$box.find('.loader-title').html(title);

        this.$backdrop = $('<div id="backdrop" class="backdrop"></div>');
        $('body').append(this.$backdrop);
        this.$backdrop && this.$backdrop.addClass('visible').css('opacity', '0');

        this._setSize();
        this._bindEvents();

        this.$box.show().removeClass('transition-out').addClass('transition-in');
        this.isOpen = true;
    },

    _setSize: function(e) {
        this.$box.css('marginTop', -Math.round(this.$box.outerHeight() / 2 / 1.185) + 'px');
        this.$box.css('marginLeft', -Math.round(this.$box.outerWidth() / 2 / 1.185) + 'px');
    },

    _bindEvents: function() {
        this.$backdrop.on('touchmove', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
    },

    /**
     * close loader
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
    }
};

module.exports = Loader;
