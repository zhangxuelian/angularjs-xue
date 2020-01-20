angular.module('xue.util.array', []).service('xueUtilArray', [
    function () {
        /**
         * 数组去重,数组元素为string
         *
         * @param {any} arr
         * @returns
         */
        this.uniq = function (arr) {
            var res = [];
            var json = {};
            for (var i = 0; i < arr.length; i++) {
                if (!json[arr[i]]) {
                    res.push(arr[i]);
                    json[arr[i]] = 1;
                }
            }
            return res;
        };
        /**
         * 数组去重,数组元素为json
         *
         * @param {any} arr
         * @param {any} key
         * @returns
         */
        this.uniqJson = function (arr, key) {
            var res = [];
            var json = {};
            angular.forEach(arr, function (item) {
                if (!json[item[key]]) {
                    res.push(item);
                    json[item[key]] = 1;
                }
            });
            return res;
        };
        /**
         * 数组快速排序（数组对象为int型）
         *
         * @param {any} array
         * @returns
         */
        /*eslint complexity: ["error", 7]*/
        this.quickSort = function (array) {
            function sort(prev, numsize) {
                var nonius = prev;
                var j = numsize - 1;
                var flag = array[prev];
                // eslint-disable-next-line no-extra-parens
                if ((numsize - prev) > 1) {
                    while (nonius < j) {
                        for (; nonius < j; j--) {
                            if (array[j] < flag) {
                                //a[i] = a[j]; i += 1;
                                array[nonius++] = array[j];
                                break;
                            }
                        }
                        for (; nonius < j; nonius++) {
                            if (array[nonius] > flag) {
                                array[j--] = array[nonius];
                                break;
                            }
                        }
                    }
                    array[nonius] = flag;
                    sort(0, nonius);
                    sort(nonius + 1, numsize);
                }
            }
            sort(0, array.length);
            return array;
        };
        /**
         * 从数组中查找对象属性值，返回下标（同用于判断数组中是否存在某对象）
         * ps：数组对象为json
         * @param {any} arr
         * @param {any} key
         * @param {any} value
         * @returns
         */
        this.findObjIndex = function (arr, key, value) {
            try {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i][key] === value) {
                        return i;
                    }
                }
                return -1;
            } catch (e) {
                return -1;
            }
        };
        /**
         * 从数组中查找值，返回下标（同用于判断数组中是否存在某对象）
         * ps:数组对象为string
         * @param {any} arr
         * @param {any} value
         * @returns
         */
        this.findStrIndex = function (arr, value) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === value) {
                    return i;
                }
            }
            return -1;
        };
        
    }
]);