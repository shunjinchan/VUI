/*
* @Author: shunjinchan
* @Date:   2016-01-10 14:11:21
* @Last Modified by:   shunjinchan
* @Last Modified time: 2016-01-10 14:14:31
*/

require('../../css/components/swiper.css');

var defaults = {
    activeClass: 'active',
    interval: 5000
};

function Swiper() {}

Swiper.prototype = {
    constructor: Swiper,

    init: function (configs) {
        var self = this;

        this.control = configs.control;

    },

    _bind: function (configs) {

    }
};

module.exports = Swiper;
