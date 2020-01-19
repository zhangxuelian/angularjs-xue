angular.module('xue.util.string', [])
    .service('xueUtilString', [function () {
        var self = this;
        // 判断字符串是否为英文
        function checkEng(num) {
            var reg = /^[A-Za-z]+$/;
            return reg.test(num)
        }
        //*寻找首字母的位置
        function latterIndex(string) {
            for (var i = 0; i < string.length; i++) {
                var asc = string[i].charCodeAt(0);
                if ((asc >= 65 && asc <= 90 || asc >= 97 && asc <= 122)) {
                    return i;
                }
            }
            return -1;
        }
        function lowerCaseHandle(string) {
            var arr = [];
            var index = 0;
            for (var i = 1; i < string.length; i++) {
                if (/[A-Z]+/.test(string[i]) && /[a-z]+/.test(string[i - 1])) {
                    arr.push(string.slice(index, i));
                    index = i;
                }
            }
            arr.push(string.slice(index, string.length));
            return arr;
        }
        /**
         * 转换字符串string首字母为大写，剩下为小写
         * 
         * @param {any} string
         * @returns
         */
        this.capitalize = function (string) {
            var str = string ? string.toString().toLowerCase() : '';
            if (str.length < 2) return str.charAt(0).toUpperCase();
            return str.charAt(0).toUpperCase() + str.slice(1);
        };
        /**
         * 检查字符串string是否包含target
         * 
         * @param {any} String
         * string,target, position
         * @returns
         */
        this.endsWith = function (string, target, position) {
            if (!string || !target) return false;
            var str = string.toString();
            var tar = target.toString();
            var pos = position ? parseInt(position,0) : 0;
            var index = str.indexOf(tar);
            if (index != -1 && (typeof position == 'undefined' || index == pos)) {
                return true;
            }
            return false;
        };
        /**
         * 转换字符串string以空格分开单词
         * 
         * @param {any} String
         * @returns
         * 返回一个数组
         */
        this.lowerCase = function (string) {
            if (!string) return '';
            string = string.toString().replace(/[^A-Za-z]/g, ' ');
            var temp = string.split(' ');
            var arr = [];
            for (var i = 0; i < temp.length; i++) {
                if (temp[i]) {
                    console.log(temp[i]);
                    if (/[A-Z]+/.test(temp[i].slice(1)) && /[a-z]+/.test(temp[i].slice(1))) {
                        arr = arr.concat(lowerCaseHandle(temp[i]));
                    } else if (temp[i].length == 2 && /[A-Z]+/.test(temp[i].slice(1))) {
                        arr.push(temp[i][0]);
                        arr.push(temp[i][1]);
                    } else {
                        arr.push(temp[i]);
                    }
                }
            }
            return arr;
        };
        /**
         * 字符串头部/尾部补充
         * @param {any} String
         * padStart('ab',4,'x');->xxab
         * @returns
         */
        this.padStart = function (string, length, chars, type) {
            string = string.toString();
            length = parseInt(length,0);
            chars = chars ? chars : ' ';
            if (type == 'start') return string.padStart(length, chars);
            else if (type == 'end') return string.padEnd(length, chars);
        };
        /**
         * 格式化文字
         *
         * @param {any} text
         * @param {any} len
         */
        this.formatterText = function (text, len) {
            var newText = text.trim();
            if (newText.length) {
                var length = len || 10;
                if (newText.length > length) {
                    return newText.substring(0, length) + '...';
                } else {
                    return newText;
                }
            } else {
                return '';
            }
        };
        /**
         * 格式化长文字（中间省略）
         * 
         * @param {any} text 
         * @param {any} len 
         */
        this.formatLongText = function (text, len) {
            var newText = text.trim();
            if (newText.length) {
                var length = len || (parseInt(len,0) > 0 ? parseInt(len,0) : 5);
                if (newText.length > length * 2) {
                    return newText.substring(0, length) + '...' + newText.substring(newText.length - length, newText.length);
                } else {
                    return newText;
                }
            } else {
                return '';
            }
        };
    }]);