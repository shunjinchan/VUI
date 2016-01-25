/* 
* @Author: shunjinchan
* @Date:   2016-01-24 00:58:20
* @Last Modified by:   shunjinchan
* @Last Modified time: 2016-01-26 00:15:09
*/

var express = require('express');
var router = express.Router();

router.get('/popup.html', function(req, res, next) {
    res.render('demos/popup',  { title: 'VUI:popup' });
});

router.get('/dialog.html', function(req, res, next) {
    res.render('demos/dialog',  { title: 'VUI:dialog' });
});

router.get('/loader.html', function(req, res, next) {
    res.render('demos/loader',  { title: 'VUI:loader' });
});

router.get('/toast.html', function(req, res, next) {
    res.render('demos/toast',  { title: 'VUI:toast' });
});

router.get('/tab.html', function(req, res, next) {
    res.render('demos/tab',  { title: 'VUI:tab' });
});

router.get('/swiper.html', function(req, res, next) {
    res.render('demos/swiper',  { title: 'VUI:swiper' });
});

router.get('/list.html', function(req, res, next) {
    res.render('demos/list',  { title: 'VUI:list' });
});

router.get('/icon.html', function(req, res, next) {
    res.render('demos/icon',  { title: 'VUI:icon' });
});

router.get('/form.html', function(req, res, next) {
    res.render('demos/form',  { title: 'VUI:form' });
});

router.get('/button.html', function(req, res, next) {
    res.render('demos/button',  { title: 'VUI:button' });
});

module.exports = router;
