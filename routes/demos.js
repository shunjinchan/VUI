/* 
* @Author: shunjinchan
* @Date:   2016-01-24 00:58:20
* @Last Modified by:   pigsy.chen
* @Last Modified time: 2016-01-24 16:53:19
*/

var express = require('express');
var router = express.Router();

router.get('/popup.html', function(req, res, next) {
    res.render('demos/popup',  { title: 'W-MUI:popup' });
});

router.get('/dialog.html', function(req, res, next) {
    res.render('demos/dialog',  { title: 'W-MUI:dialog' });
});

router.get('/loader.html', function(req, res, next) {
    res.render('demos/loader',  { title: 'W-MUI:loader' });
});

router.get('/toast.html', function(req, res, next) {
    res.render('demos/toast',  { title: 'W-MUI:toast' });
});

router.get('/tab.html', function(req, res, next) {
    res.render('demos/tab',  { title: 'W-MUI:tab' });
});

router.get('/swiper.html', function(req, res, next) {
    res.render('demos/swiper',  { title: 'W-MUI:swiper' });
});

router.get('/list.html', function(req, res, next) {
    res.render('demos/list',  { title: 'W-MUI:list' });
});

router.get('/icon.html', function(req, res, next) {
    res.render('demos/icon',  { title: 'W-MUI:icon' });
});

router.get('/form.html', function(req, res, next) {
    res.render('demos/form',  { title: 'W-MUI:form' });
});

router.get('/button.html', function(req, res, next) {
    res.render('demos/button',  { title: 'W-MUI:button' });
});

module.exports = router;
