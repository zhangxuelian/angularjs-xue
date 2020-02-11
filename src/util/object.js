angular.module('xue.util.object', [])
    .service('xueUtilObject', [function () {
        var self = this;
        /**
         * json中把空对象移除
         *
         * @param {any} json
         * @returns
         */
        this.removeEmptyField = function (json) {
            var newJson = {};
            for (var key in json) {
                if (json[key]) {
                    newJson[key] = json[key];
                }
            }
            return newJson;
        };
        /**
         * json中把数组的对象中的空属性移除
         *
         * @param {any} json
         * @returns
         */
        this.removeEmptyParams = function (array) {
            var newArray = [];
            for (var i = 0, len = array.length; i < len; i++) {
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
         * 判断两个对象值是否相等(仅用于参数是对象的情况)
         *
         * @param {object} objA   
         * @param {object} objB
         * @returns 成功true，失败false
         */
        /*eslint complexity: ["error", { "max": 8 }]*/
        this.isObjectValueEqual = function (objA, objB) {
            if (typeof objA !== "object" || typeof objB !== "object") {
                return false;
            }
            var aProps = Object.getOwnPropertyNames(objA);
            var bProps = Object.getOwnPropertyNames(objB);
            if (aProps.length !== bProps.length) {
                return false;
            }
            for (var i = 0, len = aProps.length; i < len; i++) {
                var propName = aProps[i];
                var propA = objA[propName];
                var propB = objB[propName];
                if (typeof propA === 'object') {
                    if (self.isObjectValueEqual(propA, propB)) {
                        return true;
                    }
                    return false;
                } else if (propA !== propB) {
                    return false;
                }
            }
            return true;
        };
        /**
         * 根据value找到对象的key路径值
         *
         * @param {object} obj   
         * @param {any}    value
         * @returns 成功返回的是路径数组，失败则是undefined
         */
        this.searchKeys = function (obj, value) {
            for (var key in obj) {
                if (obj[key]) {
                    if (obj[key] === value || self.isObjectValueEqual(obj[key], value)) {
                        return key.split(",");
                    }
                    if (typeof obj[key] === 'object') {
                        var temp = self.searchKeys(obj[key], value);
                        if (temp) {
                            return (key + "," + temp).split(",");
                        }
                    }
                }
            }
        };
        /**
         * 根据key路径找到对象的value值
         *
         * @param {object} obj  
         * @param {array}  pathArr 
         * @param {number} index   一般不用传（默认为0）
         * @returns 成功返回的是value，失败则是undefined
         */
        this.findValByPath = function (obj, pathArr, index) {
            if (typeof obj !== "object" || Object.prototype.toString.call(pathArr) !== '[object Array]') {
                throw new Error("参数有误");
            }
            if (!pathArr.length) {
                return obj;
            }
            index = index || 0;
            if (index >= pathArr.length - 1) {
                return obj[pathArr[index]];
            }
            return self.findValByPath(obj[pathArr[index]], pathArr, ++index);
        };
        /**
         * object键值对换(如果 object 有重复的值，后面的值会覆盖前面的值)
         *
         * @param {object} obj
         * @returns newObj 返回新的键值对换后的对象
         */
        this.reverseObject = function (obj) {
            var newObj = {};
            for (var key in obj) {
                newObj[obj[key]] = key;
            }
            return newObj;
        }
    }]);