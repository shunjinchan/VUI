/* 
* @Author: shunjinchan
* @Date:   2015-12-25 11:23:14
* @Last Modified by:   shunjinchan
* @Last Modified time: 2015-12-27 18:07:55
*/

var Zepto = require('./js/lib/zepto.js');

var Router = require('./js/components/router.js');
var Popup = require('./js/components/popup.js');

var win = window;
var doc = win.document;

function init() {
    var popup = new Popup();

    $(document).on('click', '.popup-button', function(e) {
        e.preventDefault();

        popup.open('.popup-about');
    });
}

doc.addEventListener('DOMContentLoaded', init);


