/*
* @Author: shunjinchan
* @Date:   2015-12-25 11:23:14
* @Last Modified by:   shunjinchan
* @Last Modified time: 2015-12-28 17:32:53
*/

var Zepto = require('./js/lib/zepto.js');

var Router = require('./js/components/router.js');
var Popup = require('./js/components/popup.js');

var win = window;
var doc = win.document;

function init() {
    var popup = new Popup({
        html: 'nimabi'
    });

    $(document).on('click', '.open-popup', function(e) {
        e.preventDefault();

        popup.open();
    });

    // var backdrop = new Backdrop();

    // backdrop.open();


    // $(document).on('click', '.open-popup-b', function(e) {
    //     e.preventDefault();

    //     popup.open('.popup-b');
    // });

    // var popupC = new Popup({
    //     template: '<a href="" class="close-popup" data-toggle="popup" data-action="close">close popup</a>'
    // });

    // $(document).on('click', '.open-popup-c', function(e) {
    //     e.preventDefault();

    //     popupC.open();
    // });
}

doc.addEventListener('DOMContentLoaded', init);
