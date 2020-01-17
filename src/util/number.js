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
    }]);