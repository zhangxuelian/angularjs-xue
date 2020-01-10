angular.module('xue.uitl.lang', [])
    .service('xueUtilLang', [function () {

        var self = this;
        /**
         * 判断是否为对象object
         * 
         * @param {any} obj
         * @returns
         */
        this.isObject = function (obj) {
            var type = typeof obj;
            return obj != null && (type == 'object' || type == 'function');
        };
        /**
         * 判断是否为函数
         *
         * @param {any} fn
         * @returns
         */
        this.isFunction = function (fn) {
            return Object.prototype.toString.call(fn) === '[object Function]';
        };

    }]);