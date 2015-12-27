/* 
 * @Author: shunjinchan
 * @Date:   2015-10-19 12:58:07
 * @Last Modified by:   shunjinchan
 * @Last Modified time: 2015-12-24 17:40:50
 */

!(function() {

    (function(factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(['zepto', 'velocity', 'dialog'], factory);
        } else {
            // Browser globals
            factory(Zepto, Velocity, Dialog);
        }
    }(function($, Velocity, Dialog) {

        var html = {
            backdrop: '<div class="modal-backdrop"></div>',
            box: '<div class="modal border-t">' +
                '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                '<div class="modal-header"><strong class="modal-title"></strong></div>' +
                '<div class="modal-body"></div>' +
                '<div class="modal-footer border-t"></div>' +
                '</div>' +
                '</div>' +
                '</div>',
        };

        function ActionSheet() {
            this.render();
        }

        ActionSheet.prototype = new Dialog({
            backdrop: true,
            style: 'action-sheet'
        });

        ActionSheet.prototype.render = function() {

        };

        if (typeof define === 'function' && define.amd) {
            return ActionSheet;
        } else {
            window.ActionSheet = ActionSheet;
        }

    }));

})();
