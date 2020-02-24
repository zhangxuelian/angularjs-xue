angular.module('xue.util.number', [])
    .service('xueUtilNumber', [function () {
        /**
         * 检查 n 是否在 start 与 end 之间，但不包括 end。
         * 如果 end 没有指定，那么 start 设置为0。 
         * 如果 start 大于 end，那么参数会交换以便支持负范围。
         *
         * @param {number} number  要检查的值
         * @param {number} start   开始范围
         * @param {number} end     结束范围
         * @returns
         */
        this.inRange = function (number, start, end) {
            if (end === undefined) {
                end = start;
                start = 0;
            }
            return number >= Math.min(start, end) && number < Math.max(start, end);
        };
        /**
         * 产生一个包括 lower 与 upper 之间的数。
         * 如果只提供一个参数返回一个0到提供数之间的数。 
         * 如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数。
         *
         * @param {number}  lower     要检查的值
         * @param {number}  upper     开始范围
         * @param {boolean} floating  结束范围
         * @returns
         */
        /*eslint complexity: ["error", { "max": 12 }]*/
        this.random = function (lower, upper, floating) {
            var INFINITY = 1 / 0,
                MAX_INTEGER = Number.MAX_VALUE || 1.7976931348623157e308;

            if (floating === undefined) {
                if (typeof upper === "boolean") {
                    floating = upper;
                    upper = undefined;
                } else if (typeof lower === "boolean") {
                    floating = lower;
                    lower = undefined;
                }
            }
            if (lower === undefined && upper === undefined) {
                lower = 0;
                upper = 1;
            } else {
                lower = toFinite(lower);
                if (upper === undefined) {
                    upper = lower;
                    lower = 0;
                } else {
                    upper = toFinite(upper);
                }
            }
            if (lower > upper) {
                var temp = lower;
                lower = upper;
                upper = temp;
            }
            if (floating || lower % 1 || upper % 1) {
                return Math.min(
                    lower +
                    Math.random() *
                    (upper -
                        lower +
                        parseFloat("1e-" + ((Math.random() + "").length - 1))),
                    upper
                );
            }
            return lower + Math.floor(Math.random() * (upper - lower + 1));

            function toFinite(value) {
                if (!value) {
                    return value === 0 ? value : 0;
                }
                value = toNumber(value);
                if (value === INFINITY || value === -INFINITY) {
                    var sign = value < 0 ? -1 : 1;
                    return sign * MAX_INTEGER;
                }
                return isNaN(value) ? 0 : value;
            }

            function isNaN(value) {
                return isNumber(value) && value !== +value;
            }

            function isNumber(value) {
                return typeof value === 'number' ||
                    isObjectLike(value) && Object.prototype.toString.call(value) === '[object Number]';
            }
        };
        /**
         * 确认所给值只在min,max之间
         * 如果所给值是在min,max之间，那么就直接返回该值
         * 否则返回与所给值最接近的min值或max值
         *
         * @param {number}  number  被限制的值
         * @param {number}  lower   下限
         * @param {number}  upper   上限
         * @returns
         */
        this.clamp = function (number, lower, upper) {
            if (upper === undefined) {
                upper = lower;
                lower = undefined;
            }
            if (upper !== undefined) {
                upper = toNumber(upper);
                upper = isNaN(upper) ? 0 : upper;
            }
            if (lower !== undefined) {
                lower = toNumber(lower);
                lower = isNaN(lower) ? 0 : lower;
            }
            return baseClamp(toNumber(number), lower, upper);

            function baseClamp(number, lower, upper) {
                if (!isNaN(number)) {
                    if (upper !== undefined) {
                        number = number <= upper ? number : upper;
                    }
                    if (lower !== undefined) {
                        number = number >= lower ? number : lower;
                    }
                }
                return number;
            }
        };

        function toNumber(value) {
            if (typeof value === "number") {
                return value;
            }
            if (isSymbol(value)) {
                return 0 / 0;
            }
            return Number(value);
        }

        function isSymbol(value) {
            return typeof value === "symbol" || isObjectLike(value) && Object.prototype.toString.call(value) === "[object Symbol]";
        }

        function isObjectLike(value) {
            return typeof value === "object" && value !== null;
        }

    }]);