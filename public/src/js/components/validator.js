/*
 * @Author: shunjinchan
 * @Date:   2016-01-12 00:13:05
 * @Last Modified by:   pigsy.chen
 * @Last Modified time: 2016-04-20 15:53:13
 */

'use strict';

/**
 * 表单验证
 * @usage:
 * var validator = new Validator();
 * validator.add(iptUsername, [{ strategy: 'isNotEmpty', errorMsg: '用户名不能为空'}, {strategy: 'minLength:6', errorMsg: '用户名长度不能小于6位', re: /abcdef/ }])
 * validator.start();
 */
function Validator() {
    this.cache = [];
}

/**
 * 表单验证组件校验规则
 */
var strategies = {
    isNotEmpty: function (value, errorMsg) {
        if (value === '') {
            return errorMsg;
        }
    },

    minLength: function (value, length, errorMsg) {
        if (value.length < length) {
            return errorMsg;
        }
    },

    maxLength: function (value, length, errorMsg) {
        if (value.length > length) {
            return errorMsg;
        }
    },

    /**
     * 手机号码验证
     * 验证规则：
     * @param  {String}  value    待验证的值
     * @param  {String}  errorMsg 错误信息
     * @return {String}           错误信息
     */
    isMobile: function (value, errorMsg) {
        errorMsg = errorMsg ? errorMsg : '手机号码格式错误';

        // 此正则未必囊括所有的手机号码格式
        if (!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[3|7|6|8|1|0])\d{8}$/.test(value)) {
            return errorMsg;
        }
    },

    isEmail: function (value, errorMsg) {
        errorMsg = errorMsg ? errorMsg : '邮箱地址格式错误';

        if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
            return errorMsg;
        }
    },

    isChinese: function (value, errorMsg) {},

    /**
     * 身份证号码验证
     * 验证规则：15位或者8位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
     * @param  {String}  value    待验证的值
     * @param  {String}  errorMsg 错误信息
     * @return {String}          错误信息
     */
    isIdCard: function (value, errorMsg) {
        errorMsg = errorMsg ? errorMsg : '身份证格式错误';

        if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
            return errorMsg;
        }
    },

    isQq: function (value, errorMsg) {
        errorMsg = errorMsg ? errorMsg : 'qq号码格式错误';

        if (!/^[1-9]\d{4,9}$/.test(value)) {
            return errorMsg;
        }
    },

    isPostcode: function (value, errorMsg) {
        errorMsg = errorMsg ? errorMsg : '邮政编码格式错误';

        if (!/^[1-9]\d{5}$/) {
            return errorMsg;
        }
    },

    /**
     * 用户名验证
     * @param  {String} value    值
     * @param  {String} errorMsg 错误信息
     * @param  {RegExp} re       用户名验证正则表达式，规则：下划线数字字母,6-20位
     * @return {String}          错误信息
     */
    username: function (value, errorMsg, re) {
        errorMsg = errorMsg ? errorMsg : '用户名格式错误';
        re = re ? re : /^[a-zA-Z0-9_]{6,20}$/;

        if (!re.test(value)) {
            return errorMsg;
        }
    },

    password: function (value, errorMsg, re) {
        errorMsg = errorMsg ? errorMsg : '密码必须是由数字/大写字母/小写字母/标点符号组成，四种都必有，8位以上';
        re = re ? re : /(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?=.*[A-Z])(?=.*[a-z])(?!.*\n).*$/;

        if (!re.test(value)) {
            return errorMsg;
        }
    },

    // 六位数字组合
    authCode: function (value, errorMsg, re) {
        errorMsg = errorMsg ? errorMsg : '';
        re = re ? re : /^\d{6}$/;

        if (!re.test(value)) {
            return errorMsg;
        }
    },

    // 图形验证码
    captcha: function (value, errorMsg, re) {
        errorMsg = errorMsg ? errorMsg : '';
        re = re ? re : /^[a-zA-Z]{4}$/;

        if (!re.test(value)) {
            return errorMsg;
        }
    },
};

// usage:
// var validator = new Validator();
// validator.init([{
//     dom: username,
//     rules: [{
//         strategy: 'isNotEmpty',
//         errorMsg: '用户名不能为空'
//     }, {
//         strategy: 'username',
//         errorMsg: '用户名格式错误'
//     }]
// }, {
//     dom: password,
//     rules: [{
//         strategy: 'isNotEmpty',
//         errorMsg: '密码不能为空'
//     }]
// }]);
// 单独添加规则使用 add 方法
Validator.prototype = {
    constructor: Validator,

    /**
     * 验证规则初始化，内部调用 add 方法
     * @param {Array} opts     验证规则数组
     */
    init: function (opts) {
        if (!opts) return false;

        opts.forEach(function (obj) {
            this.add(obj.dom, obj.rules);
        }, this);
    },

    /**
     * 添加验证
     * @param {dom 对象} dom      需要验证的表单控件
     * @param {Array} rules    验证的规则
     */
    add: function (dom, rules) {
        var self = this;
        var len = rules.length;
        var i;
        var rule;

        // 循环遍历需要验证的规则
        for (i = 0; i < len; i++) {
            rule = rules[i];

            (function (rule) {
                self.cache.push(function () { // 把检验的步骤用空函数包装起来，并且放入 cache
                    var strategyAry = rule.strategy.split(':'); // 把 strategy 和参数分开
                    var errorMsg = rule.errorMsg; // 错误信息
                    var re = rule.re ? rule.re : null;
                    var strategy = strategyAry.shift();

                    strategyAry.unshift(dom.value); // 需要验证的表单控件的值
                    strategyAry.push(errorMsg); // 添加错误信息

                    if (re) {
                        strategyAry.push(re); // 添加自定义正则表达式
                    }

                    return strategies[strategy].apply(dom, strategyAry);
                });
            })(rule);
        }
    },

    /**
     * 开始验证
     * @return {String} 错误信息，当返回为 undefined 时说明验证通过
     */
    start: function () {
        var i;
        var validatorFunc;
        var len = this.cache.length;
        var errorMsg;

        for (i = 0; i < len; i++) {
            validatorFunc = this.cache[i];
            errorMsg = validatorFunc();

            if (errorMsg) {
                return errorMsg;
            }
        }
    }
};

module.exports = Validator;
