angular.module("xue.util.math", []).service("xueUtilMath", [
    function() {
        var self = this;
        /**
         * 加法（解决浮点精度问题）
         * @param {number} number1 数值1
         * @param {number} number2 数值2
         */
        this.addition = function(number1, number2) {
            var decimalLen1, decimalLen2, maxLenPower;
            try {
                decimalLen1 = number1.toString().split(".")[1].length;
            } catch (e) {
                decimalLen1 = 0;
            }
            try {
                decimalLen2 = number2.toString().split(".")[1].length;
            } catch (e) {
                decimalLen2 = 0;
            }
            maxLenPower = Math.pow(10, Math.max(decimalLen1, decimalLen2));
            return (number1 * maxLenPower + number2 * maxLenPower) / maxLenPower;
        };
        /**
         * 减法（解决浮点精度问题）
         * @param {number} subtrahend 减数
         * @param {number} minuend 被减数
         */
        this.subtraction = function(subtrahend, minuend) {
            var decimalLen1, decimalLen2, maxLenPower, maxLen;
            try {
                decimalLen1 = subtrahend.toString().split(".")[1].length;
            } catch (e) {
                decimalLen1 = 0;
            }
            try {
                decimalLen2 = minuend.toString().split(".")[1].length;
            } catch (e) {
                decimalLen2 = 0;
            }
            maxLen = Math.max(decimalLen1, decimalLen2);
            maxLenPower = Math.pow(10, maxLen);
            return Number(
                ((subtrahend * maxLenPower - minuend * maxLenPower) / maxLenPower).toFixed(maxLen)
            );
        };
        /**
         * 乘法（解决浮点精度问题）
         * @param {number} multiplier1 乘数1
         * @param {number} multiplier2 乘数2
         */
        this.multiplication = function(multiplier1, multiplier2) {
            var decimalLen = 0;
            multiplier1 = multiplier1.toString();
            multiplier2 = multiplier2.toString();
            try {
                decimalLen += multiplier1.split(".")[1].length;
            } catch (e) {
                decimalLen += 0;
            }
            try {
                decimalLen += multiplier2.split(".")[1].length;
            } catch (e) {
                decimalLen += 0;
            }
            return Number(multiplier1.replace(".", "")) * Number(multiplier2.replace(".", "") /
                Math.pow(10, decimalLen)
            );
        };
        /**
         * 除法（解决浮点精度问题）
         * @param {number} divisor 除数
         * @param {number} dividend 被除数
         */
        this.division = function(divisor, dividend) {
            var decimalLen1, decimalLen2, nDivisor, nDividend;
            try {
                decimalLen1 = divisor.toString().split(".")[1].length;
            } catch (e) {
                decimalLen1 = 0;
            }
            try {
                decimalLen2 = dividend.toString().split(".")[1].length;
            } catch (e) {
                decimalLen2 = 0;
            }
            nDivisor = Number(divisor.toString().replace(".", ""));
            nDividend = Number(dividend.toString().replace(".", ""));
            return this.multiplication(
                nDivisor / nDividend,
                Math.pow(10, decimalLen2 - decimalLen1)
            );
        };
        /**
         * 平均值（解决浮点精度问题）
         * @param {arr} arr 要迭代的数组
         */
        this.mean = function(arr) {
            if (!Array.isArray(arr) || !arr.length) {
                return NaN;
            }
            var result, index = -1, length = arr.length;
            while (++index < length) {
                var current = arr[index];
                if (current !== undefined) {
                    result = result === undefined ? current : self.addition(result, current);
                }
            }
            return result / length;
        };
    }
]);
