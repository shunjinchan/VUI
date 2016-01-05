/*
 * @Author: shunjinchan
 * @Date:   2015-12-25 11:23:14
 * @Last Modified by:   pigsy.chen
 * @Last Modified time: 2016-01-06 00:30:19
 */

var Zepto = require('./js/lib/zepto.js');

var Router = require('./js/components/router.js');
var Popup = require('./js/components/popup.js');
var Dialog = require('./js/components/dialog.js');
var Loader = require('./js/components/loader.js');

var win = window;
var doc = win.document;

var popup = new Popup();
var dialog = new Dialog();
var loader = new Loader();

function init() {
    $(document).on('click', '.open-popup-about', function(e) {
        e.preventDefault();

        popup.open({
            target: $('.popup-about')
        });

        popup.$box.on('closed', function() {
            console.log('nimabi');
        });
    });

    $(document).on('click', '.open-popup', function(e) {
        e.preventDefault();

        popup.open({
            extraClass: 'nimabi',
            title: 'title',
            body: 'body',
            footer: 'footer'
        });

        popup.$box.on('closed', function() {
            console.log('nimabi');
        });
    });

    $(document).on('click', '.open-popup-html', function(e) {
        e.preventDefault();

        popup.open({
            html: 0
        });

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
        }, function(val) {
            console.log('取消' + val);
        });
    });

    function callbackA() {
        dialog.alert('worinimei');
    }

    $(document).on('click', '.open-password', function(e) {
        e.preventDefault();

        dialog.password('请填写收到的邀请码', function(val) {
            if (val !== '') {
                console.log('密码是' + val);
            } else {
                dialog.close(callbackA);
            }
        }, function(val) {
            console.log('密码是' + val);
        });
    });

    $(document).on('click', '.open-dialog-vertical', function(e) {
        e.preventDefault();

        dialog.open({
            title: 'title',
            content: 'content',
            afterContent: 'afterContent',
            verticalButton: true,
            buttons: [{
                text: '按钮1',
                onClick: function() {
                    console.log('按钮1');
                }
            }, {
                text: '按钮2',
                onClick: function() {
                    console.log('按钮2');
                }
            }, {
                text: '按钮3',
                onClick: function() {
                    console.log('按钮3');
                }
            }]
        });
    });

    $(document).on('click', '.open-loader', function(e) {
        e.preventDefault();

        loader.open();

        setTimeout(function() {
            loader.close();
        }, 2000);
    });
}

doc.addEventListener('DOMContentLoaded', init);
