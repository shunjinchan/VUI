/*
* @Author: pigsy.chen
* @Date:   2016-05-17 00:19:33
* @Last Modified by:   pigsy.chen
* @Last Modified time: 2016-05-17 00:20:17
* 
* usage: 
* hash.add({ a: "abc", b: "bcd", c: "cba"});                // url: http://url.com#a=abc&b="bcd"&c="cba"
* hash.get('a');                        // 返回 abc
* hash.get();                           // 返回一个 hash 对象，名值对  a: "abc", b: "bcd", c: "cba"}
* hash.remove('a');                     // url: http://url.com#b="bcd"&c="cba"
* hash.clear();                         // url: http://url.com#
*/

var doc = document;

var fromHash = function () {
    var params = doc.location.hash ? doc.location.hash.substr(1).split('&') : [];
    var paramsObject = {};

    for (var i = 0; i < params.length; i++) {
        var a = params[i].split('=');
        paramsObject[a[0]] = decodeURIComponent(a[1]);
    }

    return paramsObject;
};

var toHash = function (params) {
    var str = [];

    for (var p in params) {
        str.push(p + '=' + encodeURIComponent(params[p]));
    }

    doc.location.hash = str.join('&');
};

var hash = {
    get: function (param) {
        var params = fromHash();

        if (param) {
            return params[param];
        } else {
            return params;
        }
    },

    add: function (newParams) {
        var params = fromHash();

        for (var p in newParams) {
            params[p] = newParams[p];
        }

        toHash(params);
    },

    set: function (newParams) {
        console.log(newParams);
    },

    remove: function (removeParams) {
        removeParams = (typeof(removeParams) == 'string') ? [removeParams] : removeParams;

        var params = fromHash();

        for (var i = 0; i < removeParams.length; i++) {
            delete params[removeParams[i]];
        }

        toHash(params);
    },

    clear: function () {
        toHash({});
    }
};

module.exports = hash;
