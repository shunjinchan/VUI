/* 
 * @Author: shunjinchan
 * @Date:   2016-01-12 00:13:05
 * @Last Modified by:   shunjinchan
 * @Last Modified time: 2016-01-16 16:50:47
 */

/**
 * 校验规则
 */
var strategies = {
    isNotEmpty: function(value, errorMsg) {
        if (value === '') {
            return errorMsg;
        }
    },
    isChinese: function(value, errorMsg) {

    },
    /**
     * 身份证号码验证
     * 验证规则：15位或者8位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
     * @param  {String}  value    待验证的值
     * @param  {String}  errorMsg 错误信息
     * @return {String}          错误信息
     */
    isIdCard: function(value, errorMsg) {
        if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
            return errorMsg;
        }
    },
    isMobile: function(value, errorMsg) {
        if (!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(value)) {
            return errorMsg;
        }
    },
    isEmail: function(value, errorMsg) {
        if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
            return errorMsg;
        }
    },
    isPostcode: function(value, errorMsg) {

    },
    minLength: function(value, length, errorMsg) {
        if (value.length < length) {
            return errorMsg;
        }
    },
    maxLength: function(value, length, errorMsg) {
        if (value.length > length) {
            return errorMsg;
        }
    },
};

/**
 * 表单验证
 * @usage:
 * validator.add(iptUsername, [{strategy: 'isNotEmpty', errorMsg: '用户名不能为空'}, {strategy: 'minLength:6', errorMsg: '用户名长度不能小于6位'}])
 */
function Validator() {
    this.cache = [];
}

Validator.prototype = {
    constructor: Validator,

    /**
     * 添加验证
     * @param {dom 对象} dom      需要验证的表单控件
     * @param {Array} rules    验证的规则
     */
    add: function(dom, rules) {
        var self = this;

        // 循环遍历需要验证的规则
        for (var i = 0, rule; rule = rules[i++];) {
            (function(rule) {
                var strategyAry = rule.strategy.split(':'); // 把 strategy 和参数分开
                var errorMsg = rule.errorMsg; // 错误信息

                self.cache.push(function() { // 把检验的步骤用空函数包装起来，并且放入 cache
                    var strategy = strategyAry.shift();

                    strategyAry.unshift(dom.value); // 需要验证的表单控件的值
                    strategyAry.push(errorMsg);

                    return strategies[strategy].apply(dom, strategyAry);
                });
            })(rule);
        }
    },

    /**
     * 开始验证
     * @return {String} 错误信息
     */
    start: function() {
        for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
            var errorMsg = validatorFunc();

            if (errorMsg) {
                return errorMsg;
            }
        }
    }
};

module.exports = Validator;
