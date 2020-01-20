angular.module('xue.util.string', [])
    .service('xueUtilString', [function () {
        //var self = this;
        var reg = /^[A-Za-z]+$/;
        // 判断字符串是否为英文
        function checkEng(num) {
            return reg.test(num);
        }
        function replaceEndIndex(string) {
            for (var i = string.length - 1; i >= 0; i--) {
                if (/[A-Za-z0-9]+/.test(string[i])) {
                    return i;
                }
            }
            return -1;
        }
        function replaceStratIndex(string) {
            for (var i = 0; i < string.length; i++) {
                if (/[A-Za-z0-9]+/.test(string[i])) {
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
            if (str.length < 2) {
                return str.charAt(0).toUpperCase();
            }
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        };
        /**
         * 检查字符串string是否包含target
         * 
         * @param {any} String
         * string,target, position
         * @returns
         */
        this.endsWith = function (string, target, position) {
            if (!string || !target) {
                return false;
            }
            var str = string.toString();
            var tar = target.toString();
            var pos = position ? parseInt(position, 0) : 0;
            var index = str.indexOf(tar);
            if (index !== -1 && (typeof position === 'undefined' || index === pos)) {
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
            string = string.toString().replace(/[^A-Za-z]/g, ' ');
            var temp = string.split(' ');
            var arr = [];
            for (var i = 0; i < temp.length; i++) {
                if (temp[i]) {
                    if (/[A-Z]+/.test(temp[i].slice(1)) && /[a-z]+/.test(temp[i].slice(1))) {
                        arr = arr.concat(lowerCaseHandle(temp[i]));
                    } else if (temp[i].length === 2 && /[A-Z]+/.test(temp[i].slice(1))) {
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
        this.padChars = function (string, length, type, chars) {
            string = string.toString();
            length = parseInt(length, 0);
            chars = chars ? chars : ' ';
            var newString = '';
            if (type === 'start') {
                newString = string.padStart(length, chars);
            }
            else {
                newString = string.padEnd(length, chars);
            }
            return newString;
        };
        /**
         * 格式化文字
         *
         * @param {any} text
         * @param {any} len
         */
        this.formatterText = function (text, len) {
            var newText = text.trim();
            var string = '';
            if (newText.length) {
                var length = len || 10;
                if (newText.length > length) {
                    string = newText.substring(0, length) + '...';
                } else {
                    string = newText;
                }
            }
            return string;
        };
        /**
         * 格式化长文字（中间省略）
         * 
         * @param {any} text 
         * @param {any} len 
         */
        this.formatLongText = function (text, len) {
            var newText = text.trim();
            var string = '';
            if (newText.length) {
                var length = len || (parseInt(len, 0) > 0 ? parseInt(len, 0) : 5);
                if (newText.length > length * 2) {
                    string = newText.substring(0, length) + '...' + newText.substring(newText.length - length, newText.length);
                } else {
                    string = newText;
                }
            }
            return string;
        };
        /**
         * 获取字节长度（英文数字占1个字符，中文汉字占2个字符）
         * @param {string} str 
         */
        this.getByteLen = function (str) {
            var len = 0;
            try {
                for (var i = 0; i < str.length; i++) {
                    var c = str.charCodeAt(i);
                    //单字节加1
                    if (c >= 0x0001 && c <= 0x007e || c >= 0xff60 && c <= 0xff9f) {
                        len++;
                    } else {
                        len += 2;
                    }
                }
            } catch (e) {
                len = 0;
            }
            return len;
        };
        /**
        * 过滤字符串中html标签（防止ssl攻击）
        * @param {string} str 
        */
        this.filterHtml = function (str) {
            var string = '';
            try {
                string = str.replace(/&nbsp;/ig, '').replace(/<[^<>]+>/g, '');
            } catch (e) {
                string = '';
            }
            return string;
        };
        /**
        * 重复 N 次给定字符串
        * @param {string} string 
        */
        this.repeat = function (string, len) {
            var newString = '';
            len = len ? len : 0;
            for (var i = 0; i < len; i++) {
                newString += string;
            }
            return newString;
        };
        /**
        * 根据cahr 拆分字符串string
        * @param {string} string 
        */
        this.split = function (string, char, len) {
            string = string.toString();
            if (!char) {
                return string;
            }
            var temp = string.split(char);
            if (!len) {
                return temp;
            }
            if (len < temp.length) {
                temp = temp.splice(0, len);
            }
            return temp;
        };
        /**
        * string字符串中移除前面和后面的 空格 或 指定的字符
        * @param {string} string 
        */
        this.replace = function (string, chars) {
            string = string.toString();
            chars = chars ? '[' + chars + ']' : '';
            string = string.replace(new RegExp(chars, 'g'), '');
            return string.trim();
        };
        /**
        * string字符串中移除后面的空格或指定的字符
        * @param {string} string 
        */
        this.replaceEnd = function (string, chars) {
            if (!string) {
                return '';
            }
            chars = chars ? '[' + chars + ']' : '';
            var index = replaceEndIndex(string);
            var newString = '';
            if (index !== -1) {
                var start = string.slice(0, index);
                var end = string.slice(index, string.length).replace(new RegExp(chars, 'g'), '').trim();
                newString = start + end;
            } else {
                newString = string.replace(new RegExp(chars, 'g'), '').trim();
            }
            return newString;
        };
        /**
        * string字符串中移除前面的空格或指定的字符
        * @param {string} string 
        */
        this.replaceStrat = function (string, chars) {
            if (!string) {
                return '';
            }
            chars = chars ? '[' + chars + ']' : '';
            var index = replaceStratIndex(string);
            var newString = '';
            if (index !== -1) {
                var start = string.slice(0, index).replace(new RegExp(chars, 'g'), '').trim();
                var end = string.slice(index, string.length);
                newString = start + end;
            } else {
                newString = string.replace(new RegExp(chars, 'g'), '').trim();
            }
            return newString;
        };
    }]);