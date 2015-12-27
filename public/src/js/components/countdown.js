/*
 * @Author: shunjinchan
 * @Date:   2015-10-28 18:14:08
 * @Last Modified by:   shunjinchan
 * @Last Modified time: 2015-10-28 18:19:00
 */

!(function() {

    (function(factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(['zepto'], factory);
        } else {
            // Browser globals
            factory(Zepto);
        }
    }(function($) {

        function Countdown(options) {
            this.options = $.extend({}, Countdown.options, options);

            this.render();
        }

        Countdown.options = {

        };

        if (typeof define === 'function' && define.amd) {
            return Countdown;
        } else {
            window.Countdown = Countdown;
        }

    }));

})();
