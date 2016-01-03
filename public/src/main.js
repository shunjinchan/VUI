/*
* @Author: shunjinchan
* @Date:   2015-12-25 11:23:14
* @Last Modified by:   shunjinchan
* @Last Modified time: 2016-01-03 18:45:31
*/

var Zepto = require('./js/lib/zepto.js');

var Router = require('./js/components/router.js');
var Popup = require('./js/components/popup.js');
var Dialog = require('./js/components/dialog.js');

var win = window;
var doc = win.document;

var popup = new Popup();
var dialog = new Dialog();

function init() {
    $(document).on('click', '.open-popup', function(e) {
        e.preventDefault();

        popup.conf({
            extraClass: 'nimabi',
            title: '你麻痹你麻痹你麻痹你麻痹你麻痹你麻痹你麻痹你麻痹你麻痹你麻痹你麻痹',
            direction: 'from-top',
            body: '<a href="" data-toggle="popup" data-action="close">close</a>'
        }).open();

        popup.$box.on('closed', function() {
            console.log('nimabi');
        });
    });

    $(document).on('click', '.open-alert', function(e) {
        e.preventDefault();

        dialog.alert('wokaoa', 'dasdaada', function() {
            console.log('nimabi');
        });
    }); 

    $(document).on('click', '.open-confirm', function(e) {
        e.preventDefault();

        dialog.confirm('wokaoa', 'wodasdsaadssasda', function() {
            console.log('ok');
        }, function() {
            console.log('cancel');
        });
    }); 

    $(document).on('click', '.open-prompt', function(e) {
        e.preventDefault();

        dialog.prompt('请填写收到的邀请码', function(val) {
            console.log('确定' + val);
            dialog.close();
        }, function(val) {
            console.log('取消' + val);
        });
    });  

    $(document).on('click', '.open-password', function(e) {
        e.preventDefault();

        dialog.password('请填写收到的邀请码', function(val) {
            console.log('密码是' + val);
        }, function(val) {
            console.log('密码是' + val);
        });
    });  

    $(document).on('click', '.open-preloader', function(e) {
        e.preventDefault();

        dialog.preloader();
    });    
}

doc.addEventListener('DOMContentLoaded', init);
