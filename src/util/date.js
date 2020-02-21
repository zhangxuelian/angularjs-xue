angular.module('xue.util.date', ['xue.util.lang'])
    .service('xueUtilDate', ['xueUtilLang', function (xueUtilLang) {
        var self = this;
        /**
         * 格式化时间
         * 根据给定格式格式化时间 时间可以是标准时间或者符合时间格式的字符串
         * @param {any} date /Mon Nov 20 2017 14:28:48 GMT+0800 (中国标准时间)/ 2020-2-20
         * @param {string} fmt 可选 时间格式 默认YYYY-MM-DD hh:mm:ss
         * @returns {String} /2016-01-01 23:59:59/
         */
        this.formatDate = function (date, fmt) {
            date = new Date(date);
            if (!xueUtilLang.isDate(date)) {
                return "Invalid Date";
            }
            fmt = fmt ? fmt : "YYYY-MM-DD hh:mm:ss";
            var opt = {
                "Y+": date.getFullYear().toString(), // 年
                "M+": (date.getMonth() + 1).toString(), // 月
                "D+": date.getDate().toString(), // 日
                "h+": date.getHours().toString(), // 时
                "m+": date.getMinutes().toString(), // 分
                "s+": date.getSeconds().toString() // 秒
                // 有其他格式化字符需求可以继续添加，必须转化成字符串
            };
            for (var k in opt) {
                var ret = new RegExp("(" + k + ")").exec(fmt);
                if (ret) {
                    fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
                }
            }
            return fmt;
        }
        /**
         * 获取当前时间
         * @param {string} fmt 可选 时间格式 默认YYYY-MM-DD hh:mm:ss
         * 获取当前年月日 YYYY-MM-DD
         * 获取当前时分秒 hh:mm:ss
         * @returns {String} /2016-01-01 23:59:59/
         */
        this.getCurrentFmtDate = function (fmt) {
            var date = new Date();
            return self.formatDate(date, fmt);
        }
        /**
         * 获取指日期增加(减少)年/月/日/时/分/秒 之后的时间
         * @param {string} dateStr 指定时间
         * @param {number} number 需要增加或减少的数值 正数指定时间增加 负数初始时间减少 
         * @param {string} type 需要增加(减少)的时间类型 years/months/days/hours/minutes/seconds
         * @param {string} fmt 可选 时间格式 默认YYYY-MM-DD hh:mm:ss
         * @returns {string}
         */
        this.dateAddNum = function (dateStr, type, number, fmt) {
            var tempDate = new Date(dateStr); // 把日期字符串转换成日期格式
            if (!xueUtilLang.isDate(tempDate)) {
                return "Invalid Date";
            }
            switch (type) {
                case "years":
                    tempDate.setFullYear(tempDate.getFullYear() + number);
                    break;
                case "months":
                    tempDate.setMonth(tempDate.getMonth() + number);
                    break;
                case "days":
                    tempDate.setDate(tempDate.getDate() + number);
                    break;
                case "hours":
                    tempDate.setHours(tempDate.getHours() + number);
                    break;
                case "minutes":
                    tempDate.setMinutes(tempDate.getMinutes() + number);
                    break;
                case "seconds":
                    tempDate.setSeconds(tempDate.getSeconds() + number);
                    break;
            }
            return self.formatDate(tempDate, fmt);
        }
        /**
         * 获取日期最大值
         * 根据距 1970年1月1日 的毫秒数来比较获取日期的最大值
         * 
         * @param {arr} dateArr 需要比较的日期数组 数组项可以是标准时间或者符合时间格式的字符串
         * @returns {string}
         */
        this.maxDate = function (dateArr) {
            if (!Array.isArray(dateArr) || !dateArr.length) {
                return undefined;
            }
            if (dateArr.length === 1) {
                return dateArr[0];
            }
            var max = dateArr.reduce(function (date1, date2) {
                var d1 = new Date(date1),
                    d2 = new Date(date2);
                if (!xueUtilLang.isDate(d1)) {
                    return date2;
                } else if (!xueUtilLang.isDate(d2)) {
                    return date1;
                }
                if (Date.parse(d1) - Date.parse(d2) > 0) {
                    return date1;
                } else {
                    return date2;
                }
            })
            if (!xueUtilLang.isDate(new Date(max))) {
                return undefined;
            }
            return max;
        }
        /**
         * 获取日期最小值
         * 根据距 1970年1月1日 的毫秒数来比较获取日期的最小值
         * 
         * @param {arr} dateArr 需要比较的日期数组 数组项可以是标准时间或者符合时间格式的字符串
         * @returns {string}
         */
        this.minDate = function (dateArr) {
            if (!Array.isArray(dateArr) || !dateArr.length) {
                return undefined;
            }
            if (dateArr.length === 1) {
                return dateArr[0];
            }
            var min = dateArr.reduce(function (date1, date2) {
                var d1 = new Date(date1),
                    d2 = new Date(date2);
                if (!xueUtilLang.isDate(d1)) {
                    return date2;
                } else if (!xueUtilLang.isDate(d2)) {
                    return date1;
                }
                if (Date.parse(d1) - Date.parse(d2) > 0) {
                    return date2;
                } else {
                    return date1;
                }
            })
            if (!xueUtilLang.isDate(new Date(min))) {
                return undefined;
            }
            return min;
        }
        /**
         * 获取两个日期的间隔对象
         * 返回一个包含两个日期的天、小时、分钟、秒、毫秒及大小的对象
         * 
         * @param {date} start 比较初始时间
         * @param {date} end 比较结束时间
         * @returns {obj} 
         */
        this.timeInterval = function (start, end) {
            var startTime = Date.parse(start.replace(/-/g, '/')); //开始时间
            var endTime = Date.parse(end.replace(/-/g, '/')); //结束时间
            var usedTime = Math.abs(parseFloat(startTime) - parseFloat(endTime)); //两个时间戳相差的毫秒数
            var flag = ((startTime - endTime) > 0) ? '-' : '+';
            var days = Math.floor(usedTime / (24 * 3600 * 1000));
            //计算出小时数
            var leave1 = usedTime % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
            var hours = Math.floor(leave1 / (3600 * 1000));
            //计算相差分钟数
            var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
            var minutes = Math.floor(leave2 / (60 * 1000));
            var seconds = Math.floor((usedTime - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000 - minutes * 60 * 1000) / 1000); //取得算出分后剩余的秒数

            var timeIntervalObj = {
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                usedTime: usedTime,
                flag: flag
            };
            return timeIntervalObj;
        };
    }]);