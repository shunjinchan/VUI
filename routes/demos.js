/* 
* @Author: shunjinchan
* @Date:   2016-01-24 00:58:20
* @Last Modified by:   shunjinchan
* @Last Modified time: 2016-01-24 03:30:56
*/

var express = require('express');
var router = express.Router();

router.get('/popup', function(req, res, next) {
    res.render('demos/popup',  { title: 'W-MUI:popup' });
});

module.exports = router;
