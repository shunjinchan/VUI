/*
 * @Author: shunjinchan
 * @Date:   2016-01-13 23:54:47
 * @Last Modified by:   pigsy.chen
 * @Last Modified time: 2016-01-27 00:28:13
 */

var subscribeList = {}; // 订阅列表

/**
 * 发布－订阅
 * @usage:
 * emitter.on('事件名字'); // 订阅
 * emitter.emit('事件名字'); // 发布
 */
function EventEmitter() {}

EventEmitter.prototype = {
    constructor: EventEmitter,

    /**
     * 事件订阅
     * @param  {String}   key 事件类型
     * @param  {Function} fn  事件触发后的回调函数
     * @return {[Boolean]}       [添加事件是否成功]
     */
    on: function (key, fn) {
        // 首次添加事件创建一个数组，以用来缓存事件列表
        if (!subscribeList[key]) {
            subscribeList[key] = [];
        }

        // 将订阅的事件添加进对应的事件缓存列表
        subscribeList[key].push(fn);

        return true;
    },

    /**
     * 事件发布
     * @return {[Boolean]} [事件发布成功与否]
     * @usage: emitter.emit('事件名字', 参数)
     */
    emit: function () {
        var key = Array.prototype.shift.call(arguments); // 事件类型
        var fns = subscribeList[key]; // 事件回调函数
        var fn;

        // 如果没有订阅对应的事件
        if (!fns || fns.length === 0) {
            return false;
        }

        for (var i = 0; i < fns.length; i++) {
            fn = fns[i];
            fn.apply(this, arguments);
        }
    },

    /**
     * 删除事件订阅
     * @param  {String}   key 事件类型
     * @param  {Function} fn  回调函数
     * @return {[Boolean]}       [是否移除成功]
     */
    remove: function (key, fn) {
        var fns = subscribeList[key];

        // 没有被订阅
        if (!fns) {
            return false;
        }

        if (!fn) {
            // 如果没有传入具体的回调函数，表示需要取消 key 对应事件的所有订阅
            fns && (fns.length = 0);

            return true;
        } else {
            // 反向遍历订阅的回调函数列表
            for (var j = fns.length - 1; j >= 0; j--) {
                var _fn = fns[j];

                // 删除订阅的回调函数
                if (_fn === fn) {
                    fn.splice(1, 1);

                    return true;
                }
            }
        }
    },

    /**
     * 当前事件只允许被订阅一次，如果多次使用，以最后一次订阅的为准
     * @param  {String}   key 事件类型
     * @param  {Function} fn  回调函数
     * @return {[Function]}       [订阅方法]
     */
    once: function (key, fn) {
        this.remove(key);

        return this.on(key, fn);
    }
};

module.exports = EventEmitter;
