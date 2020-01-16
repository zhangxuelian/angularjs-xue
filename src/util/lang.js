angular.module("xue.util.lang", []).service("xueUtilLang", [
    function() {
        var self = this;
        /** 对象类型 */
        var objType = ["Null", "Undefined", "Number", "Boolean", "String", "Object", "Function", "Array", "RegExp", "Date"];

        /**
         * 判断是否为对象
         *
         * @param {any} obj
         * @returns
         */
        this.isObject = function(obj) {
            var type = typeof obj;
            return obj != null && (type == "object" || type == "function");
        };
        /**
         * 判断是否为函数
         *
         * @param {any} fn
         * @returns
         */
        this.isFunction = function(fn) {
            return Object.prototype.toString.call(fn) === "[object Function]";
        };
        /**
         * 判断是否为Json
         * @param {any} json
         * @returns
         */
        this.isJson = function (json) {
            return Object.prototype.toString.call(json) === "[object Object]";
        };
        /**
         * 检查是否是原始Number数值型或者Number对象。
         *
         * @param {any} number
         * @returns
         */
        this.isNumber = function(number) {
            return typeof number == 'number' || Object.prototype.toString.call(number) === "[object Number]";
        };
        /**
         * 判断是否为Date对象
         * @param {any} date
         * @returns
         */
        this.isDate = function(date) {
            return Object.prototype.toString.call(date) === "[object Date]";
        }
        /**
         * 判断是否为图片
         * @param path
         * @returns bool
         */
        this.isPicture = function (path) {
            var fileReg = /(.*).(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/i;
            try {
                return fileReg.test(path);
            } catch (e) {
                return false;
            }
        }
        /**
         * 判断是否为空对象（空数组）
         *
         * @param {any} obj
         * @returns
         */
        this.isEmpty = function(obj) {
            if (!self.isObject()) {
                return true;
            }
            if (this.isType(obj, "array")) {
                return !value.length;
            }
            for (var key in obj) {
                if (hasOwnProperty.call(obj, key)) {
                    return false;
                }
            }
            return true;
        };
        /**
         * 判断对象类型
         *
         * @param {any} obj 对象object
         * @param {any} type 对象类型
         * @returns
         */
        this.isType = function(obj, type) {
            return this.getType(obj) === type;
        };
        /**
         * 获取对象类型
         *
         * @param {any} obj 对象object
         * @returns
         */
        this.getType = function(obj) {
            var map = {};
            angular.forEach(objType, function(item) {
                map["[object " + item + "]"] = item.toLowerCase();
            });
            return map[Object.prototype.toString.call(obj)] || "object";
        };
        /**
         * 复制对象
         *
         * @param {any} obj
         * @param {any} deep 是否深度复制
         * @returns
         */
        this.copyObj = function(obj, deep) {
            if (!self.isObject(obj)) {
                return obj;
            }
            var i, target = this.isType(obj, "array") ? [] : {}, value, valueType;
            for (i in obj) {
                value = obj[i];
                valueType = this.getType(value);
                if (deep && (valueType === "array" || valueType === "object")) {
                    target[i] = this.copyObj(value, deep);
                } else {
                    target[i] = value;
                }
            }
            return target;
        };
        /**
         * 判断是否为IE
         */
        this.isIE = function () {
            return (!!window.ActiveXObject || "ActiveXObject" in window);
        };
        /**
         * 判断是否为IE8
         */
        this.isIE8 = function () {
            var a = navigator.appVersion.split(";");
            //系统是32位时谷歌浏览器版本号没有';',长度为1,a[1]为undefined,replace方法报错
            if (a.length > 1) {
                var b = a[1].replace(/[ ]/g, "");
            } else {
                return false;
            }
            return (navigator.appName == "Microsoft Internet Explorer" && b == "MSIE8.0");
        };
    }
]);
