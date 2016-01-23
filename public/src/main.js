/*
 * @Author: shunjinchan
 * @Date:   2015-12-25 11:23:14
 * @Last Modified by:   pigsy.chen
 * @Last Modified time: 2016-01-24 00:57:11
 */

var Zepto = require('./js/lib/zepto.js');

var Popup = require('./js/components/popup.js');
var Dialog = require('./js/components/dialog.js');
var Loader = require('./js/components/loader.js');
var Toast = require('./js/components/toast.js');
var Tab = require('./js/components/tab.js');
var Validator = require('./js/components/validator.js');
var EventEmitter = require('./js/components/eventEmitter.js');
var Swiper = require('./js/components/swiper.js');
var device = require('./js/components/device.js');
var broswer = require('./js/utils/broswer.js');
var Countdown = require('./js/components/countdown.js');

var win = window;
var doc = win.document;

var popup = new Popup();
var dialog = new Dialog();
var loader = new Loader();
var toast = new Toast();
var tab = new Tab();
var validator = new Validator();
var emitter = new EventEmitter();
var swiper = new Swiper();
var countdown = new Countdown();




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

    $(document).on('click', '.open-popup-list', function(e) {
        e.preventDefault();

        popup.open({
            target: $('.popup-list'),
            css: {
                top: 'auto'
            }
        });

        popup.$box.on('closed', function() {
            console.log('nimabi');
        });
    });

    $(document).on('click', '.open-popup-top', function(e) {
        e.preventDefault();

        popup.open({
            target: $('.popup-top'),
            animation: 'from-top',
            css: {
                top: '0',
                bottom: 'auto'
            },
            freeze: false
        });

        popup.$box.on('closed', function() {
            console.log('nimabi');
        });
    });

    $(document).on('click', '.open-popup-left', function(e) {
        e.preventDefault();

        popup.open({
            target: $('.popup-left'),
            animation: 'from-left',
            freeze: false
        });

        popup.$box.on('closed', function() {
            console.log('nimabi');
        });
    });

    $(document).on('click', '.open-popup-right', function(e) {
        e.preventDefault();

        popup.open({
            target: $('.popup-right'),
            animation: 'from-right',
            freeze: false,
            css: {
                left: 90,
                width: 'auto'
            }
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
            html: 'popup html'
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

        dialog.prompt('请填写收到的1024邀请码', function(val) {
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

        dialog.password('输入密码', function(val) {
            if (val !== '') {
                console.log('密码是' + val);
            } else {
                dialog.close(callbackA);
            }
        }, function(val) {
            console.log('密码是' + val);
        });
    });

    $(document).on('click', '.open-login', function(e) {
        e.preventDefault();

        dialog.login('登录你妹啊', function(username, password) {
            console.log('密码是' + username);
            console.log('密码是' + password);
        }, function(username, password) {
            console.log('密码是' + username);
            console.log('密码是' + password);
        });
    });

    $(document).on('click', '.open-register', function(e) {
        e.preventDefault();

        dialog.register('妈勒个蛋你倒是注册啊', function(username, password, authCode) {
            console.log('用户名是' + username);
            console.log('密码是' + password);
            console.log('验证码是' + authCode);
        }, function(username, password, authCode) {
            console.log('用户名是' + username);
            console.log('密码是' + password);
            console.log('验证码是' + authCode);
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

    $(document).on('click', '.open-actionSheet', function(e) {
        e.preventDefault();

        dialog.actionSheet({
            animation: 'from-bottom',
            title: '确定要删除？',
            type: 'actionSheet',
            buttons: [{
                text: '删除',
                onClick: function() {
                    console.log('删除');
                },
                close: false
            }, {
                text: '删除2',
                onClick: function() {
                    console.log('删除2');
                },
                close: false,
                danger: true
            }]
        });
    });

    $(document).on('click', '.open-loader', function(e) {
        e.preventDefault();

        loader.open('nimabi');
    });

    $(document).on('click', '.open-loader2', function(e) {
        e.preventDefault();

        loader.open({
            title: 'hhjhjjj',
            extraClass: 'nimabi',
            timer: 2000
        });
    });

    $(document).on('click', '.open-toast', function(e) {
        e.preventDefault();

        toast.open('nimabi');
    });

    $(document).on('click', '.open-toast2', function(e) {
        e.preventDefault();

        toast.open({
            title: 'hhjhjjj',
            extraClass: 'toast-white',
            timer: 2000
        });
    });

    console.log(device);
}

doc.addEventListener('DOMContentLoaded', init);
