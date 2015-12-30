/*
* @Author: shunjinchan
* @Date:   2015-12-25 11:23:14
* @Last Modified by:   pigsy.chen
* @Last Modified time: 2015-12-31 03:39:09
*/

var Zepto = require('./js/lib/zepto.js');

var Router = require('./js/components/router.js');
var popup = require('./js/components/popup.js')();

var win = window;
var doc = win.document;

function init() {
    $(document).on('click', '.open-popup', function(e) {
        e.preventDefault();

        popup.conf({
            extraClass: 'nimabi',
            title: '你麻痹你麻痹你麻痹你麻痹你麻痹你麻痹你麻痹你麻痹你麻痹你麻痹你麻痹'
        }).open($('.popup-about'));
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
