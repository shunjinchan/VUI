/*
 * @Author: shunjinchan
 * @Date:   2015-10-28 18:14:08
 * @Last Modified by:   pigsy.chen
 * @Last Modified time: 2016-01-21 03:00:34
 */

var defaults = {
    interval: 1000,
    year: false,
    day: true,
    hour: true,
    min: true,
    sec: true,
    millisec: false,
    tita: false,
    separator: null,
    onEnd: null,
    onChange: null
};

/**
 * 倒计时
 * @param  {Object} configs 配置信息
 */
function Countdown(configs) {
    if (configs) {
        this.conf(configs);
    }
}

Countdown.prototype = {
    constructor: Countdown,

    /**
     * 配置，如果不想直接在 new 实例的时候传配置信息，可使用该方法
     * @param  {Object} configs 配置信息
     * @return {[Object]}         当前实例
     */
    conf: function(configs) {
        this.options = $.extend({}, defaults, configs);

        return this;
    },

    /**
     * 开始倒计时，默认每隔一秒执行一次
     * @return {[Object]}         当前实例
     */
    start: function() {
        var self = this;

        if (this.interval) {
            return;
        }

        this._update();

        if (this.options.interval) {
            this.interval = setInterval(function() {
                self._update();
            }, this.options.interval);
        }

        return this;
    },

    /**
     * 计算时间差
     * @return {Object} 时间差
     */
    getDiffDate: function() {
        var diff;

        if (this.options.diff) {
            if (!this.startTime) {
                this.startTime = Date.now();
            }
            if (!this.endTime) {
                this.endTime = this.options.diff * 1000 + this.startTime;
            }

            diff = (this.endTime - Date.now()) / 1000;
        } else if (this.options.date) {
            diff = (this.options.date.getTime() - Date.now()) / 1000;
        } else {
            return false;
        }

        var dateData = {
            years: 0,
            days: 0,
            hours: 0,
            mins: 0,
            sec: 0,
            millisec: 0,
            tita: 0
        };

        // 结束时间在当前时间之前
        if (diff <= 0) {
            if (this.interval) {
                this.stop();
                this.options.onEnd();
            }

            this.dateData = dateData;

            return dateData;
        }

        // 年
        if (diff >= (365.25 * 86400)) {
            dateData.years = Math.floor(diff / (365.25 * 86400));
            diff -= dateData.years * 365.25 * 86400;
        }

        // 天
        if (diff >= 86400) {
            dateData.days = Math.floor(diff / 86400);
            diff -= dateData.days * 86400;
        }

        // 小时
        if (diff >= 3600) {
            dateData.hours = Math.floor(diff / 3600);
            diff -= dateData.hours * 3600;
        }

        // 分钟
        if (diff >= 60) {
            dateData.mins = Math.floor(diff / 60);
            diff -= dateData.mins * 60;
        }

        // 秒
        dateData.sec = Math.round(diff);

        // 毫秒
        dateData.millisec = diff % 1 * 1000;

        // tita
        dateData.tita = Math.round(dateData.millisec / 100);

        this.dateData = dateData;

        return dateData;
    },

    /**
     * 停止倒计时
     * @return {Object} 该实例对象
     */
    stop: function() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = false;
        }
        return this;
    },

    /**
     * 渲染，只有当存在 container 的时候才执行
     * @return {[type]} [description]
     */
    _render: function() {
        if (this.options.container && this.options.container.length !== 0) {
            this.$box = this.options.container;
        } else {
            return false;
        }

        var countdownYear = '';
        var countdownDay = '';
        var countdownHour = '';
        var countdownMin = '';
        var countdownSec = '';
        var countdownMillisec = '';
        var countdownTita = '';
        var separator = '';

        if (this.options.year) {
            separator = this.options.separator ? this.options.separator : '年';

            countdownYear = '<span class="countdown-year">' +
                this._addleadingZero(this.dateData.years) + '</span>' +
                '<span class="countdown-text">' + separator +'</span>';
        }

        if (this.options.day) {
            separator = this.options.separator ? this.options.separator : '天';

            countdownDay = '<span class="countdown-day">' +
                this._addleadingZero(this.dateData.days) + '</span>' +
                '<span class="countdown-text">' + separator + '</span>';
        }

        if (this.options.hour) {
            separator = this.options.separator ? this.options.separator : '时';

            countdownHour = '<span class="countdown-hour">' +
                this._addleadingZero(this.dateData.hours) + '</span>' +
                '<span class="countdown-text">' + separator + '</span>';
        }

        if (this.options.min) {
            separator = this.options.separator ? this.options.separator : '分';

            countdownMin = '<span class="countdown-hour">' +
                this._addleadingZero(this.dateData.mins) + '</span>' +
                '<span class="countdown-text">' + separator + '</span>';
        }

        if (this.options.sec) {
            separator = this.options.separator ? this.options.separator : '秒';

            countdownSec = '<span class="countdown-sec">' +
                this._addleadingZero(this.dateData.sec) + '</span>' +
                '<span class="countdown-text">' + separator + '</span>';
        }

        if (this.options.millisec) {
            countdownMillisec = '<span class="countdown-millisec">' +
                this.dateData.millisec + '</span>';
        }

        if (this.options.tita) {
            countdownTita = '<span class="countdown-tita">' +
                this.dateData.tita + '</span>';
        }

        this.$box.html(countdownYear + countdownDay + countdownHour + countdownMin + countdownSec + countdownTita);
    },

    /**
     * 更新
     */
    _update: function() {
        this.getDiffDate() && this._render();
        this.options.onchange && this.options.onchange();
    },

    _addleadingZero: function(num) {
        if (num >= 10) return num;

        return '0' + String(num);
    }
};

module.exports = Countdown;
