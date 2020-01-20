angular.module('xue.util.collection', ['xue.util.lang'])
    .service('xueUtilCollect', ["xueUtilLang", function (xueUtilLang) {
        /**
         * 从数组中查找对象值，返回数组
         * ps：数组元素为json，匹配对象为数组
         * @param {any} arr
         * @param {any} key
         * @param {any} valueArr
         * @returns
         */
        this.findWithArray = function (arr, key, valueArr) {
            var ret = [];
            for (var i = 0; i < arr.length; i++) {
                for (var j in valueArr) {
                    if (arr[i][key] === valueArr[j]) {
                        ret.push(arr[i]);
                        valueArr.splice(j, 1);
                    }
                }
                if (valueArr.length === 0) {
                    return ret;
                }
            }
            return ret;
        };
        /**
         * 从数组中查找对象值，返回对象
         * ps：数组元素为json
         * @param {any} arr
         * @param {any} key
         * @param {any} value
         * @returns
         */
        this.findWithVal = function (arr, key, value) {
            try {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i][key] === value) {
                        return arr[i];
                    }
                }
                return '';
            } catch (e) {
                return '';
            }
        };
        /**
         * 移除对象中值为空的项
         *
         * @param {obj} obj
         * @returns
         */
        this.removeEmptyField = function (json) {
            var newJson = {};
            angular.forEach(json, function (item, i) {
                if (item) {
                    newJson[i] = item;
                }
            });
            return newJson;
        };
        /**
         * 移除数组中对象某属性值为空的项
         *
         * @param {array} array
         * @returns
         */
        this.removeEmptyItem = function (array) {
            var newArray = [];
            for (var i = 0; i < array.length; i++) {
                var newObj = {};
                for (var j in array[i]) {
                    if (array[i][j]) {
                        newObj[j] = array[i][j];
                    }
                }
                newArray.push(newObj);
            }
            return newArray;
        };
        /**
         * 根据数组中对象的某个属性进行排序
         * @param {Array} arr 数组
         * @param {String} field 字段名
         * @param {Boolean} order 排序方式 默认正序 true 倒序 false
         * @param {String} type 排序类型 默认为0 数值类型 0 字符类型 1
         */
        /*eslint complexity: ["error", 8]*/
        this.sortByfield = function (arr, field, order, type) {
            var res = [];
            if (arr.length && field) {
                if (typeof order === 'undefined') {
                    order = true;
                } else {
                    order = !!order;
                }
                if (typeof type === 'undefined') {
                    type = isNaN(parseInt(arr[0][field],0)) ? 1 : 0;
                } else {
                    type = type === 1 ? 1 : 0;
                }
                if (type === 0) {
                    var compare = function () {
                        return function (a, b) {
                            var res;
                            if (order) {
                                res = a[field] - b[field];
                            } else {
                                res = b[field] - a[field];
                            }
                            return res;
                        };
                    };
                    arr.sort(compare(field, order));
                } else {
                    var compareStr = function () {
                        var e = order ? 1 : -1;
                        return function (a, b) {
                            var res;
                            if (a[field] < b[field]) {
                                res = -1 * e;
                            } else if (a[field] > b[field]) {
                                res = 1 * e;
                            } else {
                                res = 0;
                            }
                            return res;
                        };
                    };
                    arr.sort(compareStr(field, order));
                }
                res = arr;
            } 
            return res;
        };
        /**
         * 判断是几维数组(返回数组中最大的维度)
         */
        this.arrDimension = function (arr, dimension) {
            if (!dimension) {
                dimension = 0;
            }
            var res;
            if (arr instanceof Array) {
                dimension++;
                var maxDimension = 0,
                    tempDimension = dimension,
                    temp = 0;
                for (var i = 0; i < arr.length; i++) {
                    temp = this.arrDimension(arr[i], tempDimension);
                    if (temp > maxDimension) {
                        maxDimension = temp;
                    }
                }
                res = maxDimension;
            } else {
                res = dimension;
            }
            return res;
        };
        /**
         * 获取字节长度（英文数字占1个字符，中文汉字占2个字符）
         * @param {string} str 
         */
        this.getByteLen = function (str) {
            var len = 0;
            for (var i = 0; i < str.length; i++) {
                var c = str.charCodeAt(i);
                //单字节加1
                if (c >= 0x0001 && c <= 0x007e || c >= 0xff60 && c <= 0xff9f) {
                    len++;
                } else {
                    len += 2;
                }
            }
            return len;
        };
        /**
         * 按长度切割数组/字符串
         * @param {array/string} param 
         * @param {int} len 中文字符长度，通过字节长度来切割的，则字节长度为len的两倍
         * @param {bool} isByteLen 是否是字节长度 (目前仅字符串支持通过字节长度切割)
         */
        /*eslint complexity: ["error", 10]*/
        this.sliceByLen = function (param, len, isByteLen) {
            try {
                var newArr = [],
                    i;
                if (isByteLen && xueUtilLang.isType(param || '', 'string')) {
                    var byteLen = len * 2,
                        tempStr = '',
                        tempCount = 0;
                    for (i = 0; i < param.length; i++) {
                        tempCount += this.getByteLen(param.charAt(i));
                        tempStr += param.charAt(i);
                        if (tempCount >= byteLen) {
                            newArr.push(tempStr);
                            tempStr = '';
                            tempCount = 0;
                        }
                    }
                    if (tempCount) {
                        newArr.push(tempStr);
                    }
                } else {
                    var sliceTime = Math.ceil(param.length / len);
                    for (i = 0; i < sliceTime; i++) {
                        newArr.push(param.slice(i * len, i * len + len));
                    }
                }
                return newArr;
            } catch (e) {
                return param || [];
            }
        };
    }]);