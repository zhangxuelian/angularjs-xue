angular.module('xue.util.object', [])
    .service('xueUtilObject', [function () {
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
    }]);