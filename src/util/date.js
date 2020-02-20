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
        this.formatDate = function(date, fmt) {
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
         * 返回距 1970 年 1 月 1 日之间的毫秒数(可用于比较时间先后)
         * @param {} Date 格式为：yyyy-mm-dd
         */
        this.formatTimesFromDate = function(Date){
            var arr = Date.split("-");
            var newDate = new Date(arr[0],arr[1],arr[2]);
            var resultDate = newDate.getTime();
            return resultDate;
        }
        /**
         * 返回距 1970 年 1 月 1 日之间的毫秒数(可用于比较时间先后)
         * @param {} Time 格式为：hh:mm:ss
         */
        this.formatTimesFromTime = function(Time){
            var arr = Time.split(":");
            var newTime = new Date('','','',arr[0],arr[1],arr[2]);
            var resultDate = newTime.getTime();
            return resultDate;
        }
        /**
         * 返回距 1970 年 1 月 1 日之间的毫秒数(可用于比较时间先后)
         * @param {} DateTime 格式为：yyyy-mm-dd hh:mm:ss
         */
        this.formatTimesFromDateTime = function(DateTime){
            var date = new Date(Date.parse(DateTime.replace(/-/g, "/")));
            var resultDate = date.getTime();
            return resultDate;
        }
    }
]);