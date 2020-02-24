/**
 * angularjs-xue
 * Homepage: https://github.com/zhangxuelian/angularjs-xue
 * 
 * Version: 1.0.0 - 2020-02-24
 * Require angularjs version: 1.2.32
 * License: ISC
 */
angular.module("ui.xue", ["ui.xue.tpls", "xue.pagination","xue.util.lang","xue.table","xue.tabs","xue.util.array","xue.util.collection","xue.util.date","xue.util.math","xue.util.methods","xue.util.number","xue.util.object","xue.util.properties","xue.util.seq","xue.util.string","xue.util.function","xue.util"]);
angular.module("ui.xue.tpls", ["xue/template/pagination/pager.html","xue/template/pagination/pagination.html","xue/template/table/table.html","xue/template/tabs/tab.html","xue/template/tabs/tabs_wrap.html"]);
angular.module('xue.pagination', [])

  .controller('xuePaginationController', ['$scope', '$attrs', '$parse', function ($scope, $attrs, $parse) {
    var self = this,
      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
      setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;

    this.init = function (ngModelCtrl_, config) {
      ngModelCtrl = ngModelCtrl_;
      this.config = config;

      ngModelCtrl.$render = function () {
        self.render();
      };

      if ($attrs.itemsPerPage) {
        $scope.$parent.$watch($parse($attrs.itemsPerPage), function (value) {
          self.itemsPerPage = parseInt(value, 10);
          $scope.totalPages = self.calculateTotalPages();
        });
      } else {
        this.itemsPerPage = config.itemsPerPage;
      }
    };

    this.calculateTotalPages = function () {
      var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
      return Math.max(totalPages || 0, 1);
    };

    this.render = function () {
      $scope.page = parseInt(ngModelCtrl.$viewValue, 10) || 1;
    };

    $scope.selectPage = function (page) {
      if ($scope.page !== page && page > 0 && page <= $scope.totalPages) {
        ngModelCtrl.$setViewValue(page);
        ngModelCtrl.$render();
      }
    };

    $scope.getText = function (key) {
      return $scope[key + 'Text'] || self.config[key + 'Text'];
    };
    $scope.noPrevious = function () {
      return $scope.page === 1;
    };
    $scope.noNext = function () {
      return $scope.page === $scope.totalPages;
    };

    $scope.$watch('totalItems', function () {
      $scope.totalPages = self.calculateTotalPages();
    });

    $scope.$watch('totalPages', function (value) {
      setNumPages($scope.$parent, value); // Readonly variable

      if ($scope.page > value) {
        $scope.selectPage(value);
      } else {
        ngModelCtrl.$render();
      }
    });
  }])

  .constant('xuePaginationConfig', {
    itemsPerPage: 10,
    boundaryLinks: false,
    directionLinks: true,
    firstText: '首页',
    previousText: '上页',
    nextText: '下页',
    lastText: '尾页',
    rotate: true
  })

  .directive('xuePagination', ['$parse', 'xuePaginationConfig', function ($parse, paginationConfig) {
    return {
      restrict: 'EA',
      scope: {
        totalItems: '=',
        firstText: '@',
        previousText: '@',
        nextText: '@',
        lastText: '@'
      },
      require: ['xuePagination', '?ngModel'],
      controller: 'xuePaginationController',
      templateUrl: function (element, attrs) {
        return attrs.templateUrl || 'xue/template/pagination/pagination.html';
      },
      replace: true,
      link: function (scope, element, attrs, ctrls) {
        var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

        if (!ngModelCtrl) {
          return; // do nothing if no ng-model
        }

        // Setup configuration parameters
        var maxSize = angular.isDefined(attrs.maxSize) ? scope.$parent.$eval(attrs.maxSize) : paginationConfig.maxSize,
          rotate = angular.isDefined(attrs.rotate) ? scope.$parent.$eval(attrs.rotate) : paginationConfig.rotate;
        scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : paginationConfig.boundaryLinks;
        scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : paginationConfig.directionLinks;

        paginationCtrl.init(ngModelCtrl, paginationConfig);

        if (attrs.maxSize) {
          scope.$parent.$watch($parse(attrs.maxSize), function (value) {
            maxSize = parseInt(value, 10);
            paginationCtrl.render();
          });
        }

        // Create page object used in template
        function makePage(number, text, isActive) {
          return {
            number: number,
            text: text,
            active: isActive
          };
        }

        function getPages(currentPage, totalPages) {
          var pages = [];

          // Default page limits
          var startPage = 1, endPage = totalPages;
          var isMaxSized = (angular.isDefined(maxSize) && maxSize < totalPages);

          // recompute if maxSize
          if (isMaxSized) {
            if (rotate) {
              // Current page is displayed in the middle of the visible ones
              startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
              endPage = startPage + maxSize - 1;

              // Adjust if limit is exceeded
              if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - maxSize + 1;
              }
            } else {
              // Visible pages are paginated with maxSize
              startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;

              // Adjust last page if limit is exceeded
              endPage = Math.min(startPage + maxSize - 1, totalPages);
            }
          }

          // Add page number links
          for (var number = startPage; number <= endPage; number++) {
            var page = makePage(number, number, number === currentPage);
            pages.push(page);
          }

          // Add links to move between page sets
          if (isMaxSized && !rotate) {
            if (startPage > 1) {
              var previousPageSet = makePage(startPage - 1, '...', false);
              pages.unshift(previousPageSet);
            }

            if (endPage < totalPages) {
              var nextPageSet = makePage(endPage + 1, '...', false);
              pages.push(nextPageSet);
            }
          }

          return pages;
        }

        var originalRender = paginationCtrl.render;
        paginationCtrl.render = function () {
          originalRender();
          if (scope.page > 0 && scope.page <= scope.totalPages) {
            scope.pages = getPages(scope.page, scope.totalPages);
          }
        };
      }
    };
  }])

  .constant('xuePagerConfig', {
    itemsPerPage: 10,
    previousText: '« 上页',
    nextText: '下页 »',
    align: true
  })

  .directive('xuePager', ['xuePagerConfig', function (pagerConfig) {
    return {
      restrict: 'EA',
      scope: {
        totalItems: '=',
        previousText: '@',
        nextText: '@'
      },
      require: ['xuePager', '?ngModel'],
      controller: 'xuePaginationController',
      templateUrl: function (element, attrs) {
        return attrs.templateUrl || 'xue/template/pagination/pager.html';
      },
      replace: true,
      link: function (scope, element, attrs, ctrls) {
        var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

        if (!ngModelCtrl) {
          return; // do nothing if no ng-model
        }

        scope.align = angular.isDefined(attrs.align) ? scope.$parent.$eval(attrs.align) : pagerConfig.align;
        paginationCtrl.init(ngModelCtrl, pagerConfig);
      }
    };
  }]);
angular.module('xue.table', ['xue.util.lang', 'xue.pagination'])
    .directive('xueTable', ['xueUtilLang', function (xueUtilLang) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                tableConfig: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/table/table.html';
            },
            link: function (scope, ele, attrs) {

            }
        };
    }])
angular.module('xue.tabs', [])
    .directive('xueTabsWrap', [function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {},
            controller: 'tabsWrapCtrl',
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/tabs/tabs_wrap.html';
            },
            link: function () {
                console.log('link')
            }
        }
    }])
    .controller('tabsWrapCtrl', [function () {
        console.log('ctrl');
    }])
    .directive('xueTab', [function () {
        return {
            restrict: 'E',
            require: '^xueTabsWrap',
            replace: true,
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/tabs/tab.html';
            },
            link: function () {

            }
        }
    }])
    .directive('xueTabContent', [function () {
        return {

        }
    }]);
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
                    type = isNaN(parseInt(arr[0][field], 0)) ? 1 : 0;
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
angular.module('xue.util.function', ['xue.util.lang'])
    .service('xueUtilFunc', ["xueUtilLang", function (xueUtilLang) {
        var self = this;
        var FUNC_ERROR_TEXT = 'Expected a function';
        var nativeMax = Math.max,
            nativeMin = Math.min;
        /**
         * 创建一个调用func的函数，通过this绑定和创建函数的参数调用func，
         * 调用次数不超过 n 次。 之后再调用这个函数，将返回一次最后调用func的结果。
         *
         * @param {number} n 超过多少次不再调用func（限制调用func 的次数）
         * @param {Function} func 限制执行的函数.
         * @returns {Function} 返回新的限定函数.
         */
        this.before = function (n, func) {
            var result;
            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            n = parseInt(n, 0);
            return function () {
                if (--n >= 0) {
                    result = func.apply(this, arguments);
                }
                if (n < 1) {
                    func = undefined;
                }
                return result;
            };
        };
        /**
         * before的反向函数;此方法创建一个函数，当他被调用n或更多次之后将马上触发func
         * 
         * @param {number} n 方法应该在调用多少次后才执行.
         * @param {Function} func 用来限定的函数.
         * @returns {Function} 返回新的限定函数.
         */
        this.after = function (n, func) {
            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            n = parseInt(n, 0);
            return function () {
                if (--n < 1) {
                    return func.apply(this, arguments);
                }
            };
        };
        /**
         * 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。
         *  debounced（防抖动）函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。
         *  可以提供一个 options（选项） 对象决定如何调用 func 方法，options.leading 与|或 options.trailing 
         * 决定延迟前后如何触发（是 先调用后等待 还是 先等待后调用）。 
         * func 调用时会传入最后一次提供给 debounced（防抖动）函数 的参数。 
         * 后续调用的 debounced（防抖动）函数返回是最后一次 func 调用的结果
         *
         * 注意: 如果 leading 和 trailing 选项为 true, 则 func 允许 trailing 方式调用的条件为: 
         * 在 wait 期间多次调用防抖方法。如果 wait 为 0 并且 leading 为 false, func调用将被推迟到下一个点，
         * 类似setTimeout为0的超时。
         *
         * @param {Function} func 要防抖动的函数.
         * @param {number} [wait=0] 需要延迟的毫秒数.
         * @param {Object} [options={}] 选项对象.
         * @param {boolean} [options.leading=false] 指定在延迟开始前调用
         * @param {number} [options.maxWait] 设置 func 允许被延迟的最大值
         * @param {boolean} [options.trailing=true] 指定在延迟结束后调用
         * @returns {Function} 返回新的 debounced（防抖动）函数.
         */
        /*eslint complexity: ["error", 7]*/
        this.debounce = function (func, wait, options) {
            var lastArgs,
                lastThis,
                maxWait,
                result,
                timerId,
                lastCallTime,
                lastInvokeTime = 0,
                leading = false,
                maxing = false,
                trailing = true;

            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            wait = Number(wait) || 0;
            if (xueUtilLang.isObject(options)) {
                leading = !!options.leading;
                maxing = 'maxWait' in options;
                maxWait = maxing ? nativeMax(Number(options.maxWait) || 0, wait) : maxWait;
                trailing = 'trailing' in options ? !!options.trailing : trailing;
            }

            function invokeFunc(time) {
                var args = lastArgs,
                    thisArg = lastThis;

                lastArgs = lastThis = undefined;
                lastInvokeTime = time;
                result = func.apply(thisArg, args);
                return result;
            }

            function leadingEdge(time) {
                // Reset any `maxWait` timer.
                lastInvokeTime = time;
                // Start the timer for the trailing edge.
                timerId = setTimeout(timerExpired, wait);
                // Invoke the leading edge.
                return leading ? invokeFunc(time) : result;
            }

            function remainingWait(time) {
                var timeSinceLastCall = time - lastCallTime,
                    timeSinceLastInvoke = time - lastInvokeTime,
                    timeWaiting = wait - timeSinceLastCall;

                return maxing ?
                    nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) :
                    timeWaiting;
            }

            function shouldInvoke(time) {
                var timeSinceLastCall = time - lastCallTime,
                    timeSinceLastInvoke = time - lastInvokeTime;

                // Either this is the first call, activity has stopped and we're at the
                // trailing edge, the system time has gone backwards and we're treating
                // it as the trailing edge, or we've hit the `maxWait` limit.
                return lastCallTime === undefined || timeSinceLastCall >= wait ||
                    timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }

            function timerExpired() {
                var time = Date.now();
                if (shouldInvoke(time)) {
                    return trailingEdge(time);
                }
                // Restart the timer.
                timerId = setTimeout(timerExpired, remainingWait(time));
            }

            function trailingEdge(time) {
                timerId = undefined;

                // Only invoke if we have `lastArgs` which means `func` has been
                // debounced at least once.
                if (trailing && lastArgs) {
                    return invokeFunc(time);
                }
                lastArgs = lastThis = undefined;
                return result;
            }

            function cancel() {
                if (timerId !== undefined) {
                    clearTimeout(timerId);
                }
                lastInvokeTime = 0;
                lastArgs = lastCallTime = lastThis = timerId = undefined;
            }

            function flush() {
                return timerId === undefined ? result : trailingEdge(Date.now());
            }

            function debounced() {
                var time = Date.now(),
                    isInvoking = shouldInvoke(time);

                lastArgs = arguments;
                lastThis = this;
                lastCallTime = time;

                if (isInvoking) {
                    if (timerId === undefined) {
                        return leadingEdge(lastCallTime);
                    }
                    if (maxing) {
                        // Handle invocations in a tight loop.
                        clearTimeout(timerId);
                        timerId = setTimeout(timerExpired, wait);
                        return invokeFunc(lastCallTime);
                    }
                }
                if (timerId === undefined) {
                    timerId = setTimeout(timerExpired, wait);
                }
                return result;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
        };

        /**
         * “delay”和“defer”的基本实现，接受“args”
         *
         * @private
         * @param {Function} func 延迟加载的函数.
         * @param {number} wait 延迟秒数.
         * @param {Array} args 提供给func的参数.
         * @returns {number|Object} 返回计时器id或timeout对象 
         */
        this._baseDelay = function (func, wait, args) {
            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            return setTimeout(function () {
                func.apply(undefined, args);
            }, wait);
        };
        /**
         * 推迟调用func，直到当前堆栈清理完毕。 调用时，任何附加
         * 
         * @param {Function} func 要延迟的函数.
         * @param {...*} [args] 会在调用时传给 func 的参数.
         * @returns {number} 返回计时器 id.
         */
        this.defer = function (func, args) {
            return self._baseDelay(func, 1, args);
        };
        /**
         * 延迟 wait 毫秒后调用 func。 调用时，任何附加的参数会传给func
         *
         * @param {Function} func 要延迟的函数.
         * @param {number} wait 要延迟的毫秒数.
         * @param {...*} [args] 会在调用时传入到func的参数.
         * @returns {number} 返回计时器id.
         */
        this.delay = function (func, wait, args) {
            return self._baseDelay(func, Number(wait) || 0, args);
        };
        /**
         * 创建一个只能调用 func 一次的函数。 重复调用返回第一次调用的结果。 
         * func 调用时， this 绑定到创建的函数，并传入对应参数。
         *
         * @param {Function} func 指定的触发的函数.
         * @returns {Function} 返回新的受限函数.
         */
        this.once = function (func) {
            return self.before(1, func);
        };
        /**
         * 创建一个函数，调用func时，this绑定到创建的新函数，把参数作为数组传入，类似于 Function#apply
         *
         * @param {Function} func 要应用传播参数的函数.
         * @param {number} [start=0] spread 参数的开始位置.
         * @returns {Function} 返回新的函数.
         */
        this.spread = function (func, start) {
            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            start = !start ? 0 : nativeMax(parseInt(start, 0), 0);
            return function () {
                var args = Array.prototype.slice.call(arguments);
                var array = args[start],
                    otherArgs = args.slice(0, start);

                if (array) {
                    otherArgs = otherArgs.concat(array);
                }
                return func.apply(this, otherArgs);
            };
        };
        /**
         * 创建一个调用func的函数，thisArg绑定func函数中的 this (this的上下文为thisArg) ，
         * 并且func函数会接收partials附加参数。
         * 
         * @param {Function} func 绑定的函数.
         * @param {*} thisArg 绑定的this对象.
         * @param {...*} [partials] 附加的部分参数.
         * @returns {Function} 返回新的绑定函数.
         */
        this.bind = function (func, thisArg) {
            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            var outerArgs = Array.prototype.slice.call(arguments, 2);
            //此处的arguments为调用此函数时传进来的参数；2代表只需要保存第二个参数之后的其他的参数
            return function () { //返回值应该是一个函数
                var innerArgs = Array.prototype.slice.call(arguments);
                //此处的arguments为内部函数的参数
                var finalArgs = outerArgs.concat(innerArgs);
                return func.apply(thisArg, finalArgs); //使用apply方法来改变this的指向
            };
        };
    }]);
angular.module("xue.util.lang", []).service("xueUtilLang", [
    function() {
        var self = this;
        /** 对象类型 */
        var objType = ["Null", "Undefined", "Number", "Boolean", "String", "Object", "Function", "Array", "RegExp", "Date"];

        /**
         * 判断是否为对象
         *
         * @param {any} obj
         * @returns {boolean}
         */
        this.isObject = function(obj) {
            var type = typeof obj;
            return obj !== null && (type === "object" || type === "function");
        };
        /**
         * 判断是否为函数
         *
         * @param {any} fn
         * @returns {boolean}
         */
        this.isFunction = function(fn) {
            return Object.prototype.toString.call(fn) === "[object Function]";
        };
        /**
         * 判断是否为Json
         * @param {any} json
         * @returns {boolean}
         */
        this.isJson = function (json) {
            return Object.prototype.toString.call(json) === "[object Object]";
        };
        /**
         * 检查是否是原始Number数值型或者Number对象。
         *
         * @param {any} number
         * @returns {boolean}
         */
        this.isNumber = function(number) {
            return typeof number === 'number' || Object.prototype.toString.call(number) === "[object Number]";
        };
        /**
         * 判断是否为Date对象
         * @param {any} date
         * @returns {boolean}
         */
        this.isDate = function(date) {
            return date instanceof Date || Object.prototype.toString.call(date) === "[object Date]";
        };
        /**
         * 判断是否为图片
         * 
         * @param {any} path
         * @returns {boolean}
         */
        this.isPicture = function (path) {
            var fileReg = /(.*).(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/i;
            try {
                return fileReg.test(path);
            } catch (e) {
                return false;
            }
        };
        /**
         * 判断是否为空对象
         *
         * @param {any} obj
         * @returns {boolean}
         */
        this.isObjectEmpty = function(obj) {
            if (Object.getOwnPropertyNames) {
                return (Object.getOwnPropertyNames(obj).length === 0);
            } else {
                var k;
                for (k in obj) {
                    if (Object.prototype.hasOwnProperty.call(k, obj)) {
                        return false;
                    }
                }
                return true;
            }
        };
        /**
         * 判断对象类型
         *
         * @param {any} obj 对象object
         * @param {any} type 对象类型
         * @returns {boolean}
         */
        this.isType = function(obj, type) {
            return this.getType(obj) === type;
        };
        /**
         * 获取对象类型
         *
         * @param {any} obj 对象object
         * @returns {string}
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
         * @returns {object}
         */
        this.copyObj = function(obj, deep) {
            if (!self.isObject(obj)) {
                return obj;
            }
            var i, target = self.isType(obj, "array") ? [] : {}, value, valueType;
            for (i in obj) {
                if (hasOwnProperty.call(obj, i)) {
                    value = obj[i];
                    valueType = self.getType(value);
                    if (deep && (valueType === "array" || valueType === "object")) {
                        target[i] = self.copyObj(value, deep);
                    } else {
                        target[i] = value;
                    }
                }
            }
            return target;
        };
        /**
         * 匹配对象
         * 检查对象是否包含要匹配的对象
         *
         * @param {any} obj 要检查的对象
         * @param {any} source 要匹配的对象
         * @returns {boolean}
         */
        this.isMatch = function(obj, source) {
            if (!self.isObject(obj) || !self.isObject(source)) {
                return false;
            }
            if (obj === source) {
                return true;
            }
            var matchKeyArr = [], matchLen;
            for (var k in Object(source)) {
                if (hasOwnProperty.call(source, k)) {
                    matchKeyArr.push(k);
                }
            }
            matchLen = matchKeyArr.length;

            while (matchLen--) {
                var key = matchKeyArr[matchLen],
                    value = source[key],
                    childObj = self.isObject(value);
                if (!obj[key]) {
                    return false;
                } 
                if (!childObj) {
                    if (value !== obj[key]) {
                        return false;
                    }
                } else {
                    if (!self.isMatch(obj[key], value)) {
                        return false;
                    }
                }
            }
            return true;
        };
        /**
         * 判断是否为IE
         */
        this.isIE = function () {
            return !!window.ActiveXObject || "ActiveXObject" in window;
        };
        /**
         * 判断是否为IE8
         */
        this.isIE8 = function () {
            var a = navigator.appVersion.split(";"), b;
            //系统是32位时谷歌浏览器版本号没有';',长度为1,a[1]为undefined,replace方法报错
            if (a.length > 1) {
                b = a[1].replace(/[ ]/g, "");
            } else {
                return false;
            }
            return navigator.appName === "Microsoft Internet Explorer" && b === "MSIE8.0";
        };
    }
]);

angular.module("xue.util.math", ['xue.util.lang'])
    .service("xueUtilMath", ["xueUtilLang", function(xueUtilLang) {
        var self = this;
        /**
         * 加法（解决浮点精度问题）
         * @param {number} number1 数值1
         * @param {number} number2 数值2
         */
        this.addition = function(number1, number2) {
            var decimalLen1, decimalLen2, maxLenPower;
            try {
                decimalLen1 = number1.toString().split(".")[1].length;
            } catch (e) {
                decimalLen1 = 0;
            }
            try {
                decimalLen2 = number2.toString().split(".")[1].length;
            } catch (e) {
                decimalLen2 = 0;
            }
            maxLenPower = Math.pow(10, Math.max(decimalLen1, decimalLen2));
            return (number1 * maxLenPower + number2 * maxLenPower) / maxLenPower;
        };
        /**
         * 减法（解决浮点精度问题）
         * @param {number} subtrahend 减数
         * @param {number} minuend 被减数
         */
        this.subtraction = function(subtrahend, minuend) {
            var decimalLen1, decimalLen2, maxLenPower, maxLen;
            try {
                decimalLen1 = subtrahend.toString().split(".")[1].length;
            } catch (e) {
                decimalLen1 = 0;
            }
            try {
                decimalLen2 = minuend.toString().split(".")[1].length;
            } catch (e) {
                decimalLen2 = 0;
            }
            maxLen = Math.max(decimalLen1, decimalLen2);
            maxLenPower = Math.pow(10, maxLen);
            return Number(
                ((subtrahend * maxLenPower - minuend * maxLenPower) / maxLenPower).toFixed(maxLen)
            );
        };
        /**
         * 乘法（解决浮点精度问题）
         * @param {number} multiplier1 乘数1
         * @param {number} multiplier2 乘数2
         */
        this.multiplication = function(multiplier1, multiplier2) {
            var decimalLen = 0;
            multiplier1 = multiplier1.toString();
            multiplier2 = multiplier2.toString();
            try {
                decimalLen += multiplier1.split(".")[1].length;
            } catch (e) {
                decimalLen += 0;
            }
            try {
                decimalLen += multiplier2.split(".")[1].length;
            } catch (e) {
                decimalLen += 0;
            }
            return Number(multiplier1.replace(".", "")) * Number(multiplier2.replace(".", "") /
                Math.pow(10, decimalLen)
            );
        };
        /**
         * 除法（解决浮点精度问题）
         * @param {number} divisor 除数
         * @param {number} dividend 被除数
         */
        this.division = function(divisor, dividend) {
            var decimalLen1, decimalLen2, nDivisor, nDividend;
            try {
                decimalLen1 = divisor.toString().split(".")[1].length;
            } catch (e) {
                decimalLen1 = 0;
            }
            try {
                decimalLen2 = dividend.toString().split(".")[1].length;
            } catch (e) {
                decimalLen2 = 0;
            }
            nDivisor = Number(divisor.toString().replace(".", ""));
            nDividend = Number(dividend.toString().replace(".", ""));
            return this.multiplication(
                nDivisor / nDividend,
                Math.pow(10, decimalLen2 - decimalLen1)
            );
        };
        /**
         * 平均值（解决浮点精度问题）
         * @param {arr} arr 要迭代的数组
         */
        this.mean = function(arr) {
            if (!Array.isArray(arr) || !arr.length) {
                return NaN;
            }
            var result, index = -1, length = arr.length;
            while (++index < length) {
                var current = arr[index];
                if (current !== undefined) {
                    result = result === undefined ? current : self.addition(result, current);
                }
            }
            return result / length;
        };
        /**
         * 获取数组最大值（解决浮点精度问题）
         * @param {arr} arr 要迭代的数组
         */
        this.max = function(arr) {
            if (!Array.isArray(arr) || !arr.length) {
                return undefined;
            }
            var max = arr.reduce(function(a, b) {
                if (!xueUtilLang.isNumber(a)) {
                    return b;
                } else if (!xueUtilLang.isNumber(b)) {
                    return a;
                }
                if (self.subtraction(a, b) > 0) {
                    return a;
                } else {
                    return b;
                }
            })
            if (!xueUtilLang.isNumber(max)) {
                return undefined;
            }
            return max;
        };
         /**
         * 获取数组最小值（解决浮点精度问题）
         * @param {arr} arr 要迭代的数组
         */
        this.min = function(arr) {
            if (!Array.isArray(arr) || !arr.length) {
                return undefined;
            }
            var min = arr.reduce(function(a, b) {
                if (!xueUtilLang.isNumber(a)) {
                    return b;
                } else if (!xueUtilLang.isNumber(b)) {
                    return a;
                }
                if (self.subtraction(a, b) < 0) {
                    return a;
                } else {
                    return b;
                }
            })
            if (!xueUtilLang.isNumber(min)) {
                return undefined;
            }
            return min;
        };
         /**
         * 数字根据精度四舍五入
         * @param {number} number 要四舍五入的数字(包含科学计数法)
         * @param {arr} precision 四舍五入的精度(负数表示整数位四舍五入取整)
         */
        this.round = function(number, precision) {
            if (!xueUtilLang.isNumber(number)) {
                return NaN;
            } else if (!precision) {
                return Math.round(number)
            } else {
                var pair = (number.toString() + 'e').split('e'),
                value = Math.round(pair[0] + 'e' + (+pair[1] + precision));
                pair = (value.toString() + 'e').split('e');
                return +(pair[0] + 'e' + (+pair[1] - precision));
            }
        };
    }
]);

angular.module('xue.util.methods', [])
    .service('xueUtilMethod', [function () {

    }]);
angular.module('xue.util.number', [])
    .service('xueUtilNumber', [function () {
        /**
         * 检查 n 是否在 start 与 end 之间，但不包括 end。
         * 如果 end 没有指定，那么 start 设置为0。 
         * 如果 start 大于 end，那么参数会交换以便支持负范围。
         *
         * @param {number} number  要检查的值
         * @param {number} start   开始范围
         * @param {number} end     结束范围
         * @returns
         */
        this.inRange = function (number, start, end) {
            if (end === undefined) {
                end = start;
                start = 0;
            }
            return number >= Math.min(start, end) && number < Math.max(start, end);
        };
        /**
         * 产生一个包括 lower 与 upper 之间的数。
         * 如果只提供一个参数返回一个0到提供数之间的数。 
         * 如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数。
         *
         * @param {number}  lower     要检查的值
         * @param {number}  upper     开始范围
         * @param {boolean} floating  结束范围
         * @returns
         */
        /*eslint complexity: ["error", { "max": 12 }]*/
        this.random = function (lower, upper, floating) {
            var INFINITY = 1 / 0,
                MAX_INTEGER = Number.MAX_VALUE || 1.7976931348623157e308;

            if (floating === undefined) {
                if (typeof upper === "boolean") {
                    floating = upper;
                    upper = undefined;
                } else if (typeof lower === "boolean") {
                    floating = lower;
                    lower = undefined;
                }
            }
            if (lower === undefined && upper === undefined) {
                lower = 0;
                upper = 1;
            } else {
                lower = toFinite(lower);
                if (upper === undefined) {
                    upper = lower;
                    lower = 0;
                } else {
                    upper = toFinite(upper);
                }
            }
            if (lower > upper) {
                var temp = lower;
                lower = upper;
                upper = temp;
            }
            if (floating || lower % 1 || upper % 1) {
                return Math.min(
                    lower +
                    Math.random() *
                    (upper -
                        lower +
                        Number.parseFloat("1e-" + ((Math.random() + "").length - 1))),
                    upper
                );
            }
            return lower + Math.floor(Math.random() * (upper - lower + 1));

            function toFinite(value) {
                if (!value) {
                    return value === 0 ? value : 0;
                }
                value = toNumber(value);
                if (value === INFINITY || value === -INFINITY) {
                    var sign = value < 0 ? -1 : 1;
                    return sign * MAX_INTEGER;
                }
                return isNaN(value) ? 0 : value;
            }

            function isNaN(value) {
                return isNumber(value) && value !== +value;
            }

            function isNumber(value) {
                return typeof value === 'number' ||
                    isObjectLike(value) && Object.prototype.toString.call(value) === '[object Number]';
            }
        };
        /**
         * 确认所给值只在min,max之间
         * 如果所给值是在min,max之间，那么就直接返回该值
         * 否则返回与所给值最接近的min值或max值
         *
         * @param {number}  number  被限制的值
         * @param {number}  lower   下限
         * @param {number}  upper   上限
         * @returns
         */
        this.clamp = function (number, lower, upper) {
            if (upper === undefined) {
                upper = lower;
                lower = undefined;
            }
            if (upper !== undefined) {
                upper = toNumber(upper);
                upper = isNaN(upper) ? 0 : upper;
            }
            if (lower !== undefined) {
                lower = toNumber(lower);
                lower = isNaN(lower) ? 0 : lower;
            }
            return baseClamp(toNumber(number), lower, upper);

            function baseClamp(number, lower, upper) {
                if (!isNaN(number)) {
                    if (upper !== undefined) {
                        number = number <= upper ? number : upper;
                    }
                    if (lower !== undefined) {
                        number = number >= lower ? number : lower;
                    }
                }
                return number;
            }
        };

        function toNumber(value) {
            if (typeof value === "number") {
                return value;
            }
            if (isSymbol(value)) {
                return 0 / 0;
            }
            return Number(value);
        }

        function isSymbol(value) {
            return typeof value === "symbol" || isObjectLike(value) && Object.prototype.toString.call(value) === "[object Symbol]";
        }

        function isObjectLike(value) {
            return typeof value === "object" && value !== null;
        }

    }]);
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
angular.module('xue.util.properties', [])
    .service('xueUtilProperty', [function () {

    }]);
angular.module('xue.util.seq', [])
    .service('xueUtilSeq', [function () {

    }]);
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
         * @param {any} target //目标字符串
         * @param {any} position //检查的位置
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
         * @param {any} length //填充的长度
         * @param {any} type   // 填充类型
         * @param {any} chars  // 填充的字符串
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
        * @param {string} len
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
        * @param {string} char
        * @param {string} len
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
        * @param {string} chars
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
        * @param {string} chars
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
        * @param {string} chars
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
angular.module('xue.util',[
    'xue.util.array','xue.util.collection','xue.util.date','xue.util.lang',
    'xue.util.math','xue.util.methods','xue.util.number','xue.util.object',
    'xue.util.properties','xue.util.seq','xue.util.string','xue.util.function']);
angular.module("xue/template/pagination/pager.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/pagination/pager.html",
    "<ul class=\"pager\">\n" +
    "    <li ng-class=\"{disabled: noPrevious(), previous: align}\"><a href ng-click=\"selectPage(page - 1)\">{{getText('previous')}}</a></li>\n" +
    "    <li ng-class=\"{disabled: noNext(), next: align}\"><a href ng-click=\"selectPage(page + 1)\">{{getText('next')}}</a></li>\n" +
    "</ul>");
}]);

angular.module("xue/template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/pagination/pagination.html",
    "<ul class=\"xui-pagination-wrap\">\n" +
    "    <li ng-if=\"boundaryLinks\" class=\"page-item\" ng-class=\"{disabled: noPrevious()}\">\n" +
    "        <a href class=\"page-link\" ng-click=\"selectPage(1)\">{{getText('first')}}</a>\n" +
    "    </li>\n" +
    "    <li ng-if=\"directionLinks\" class=\"page-item\" ng-class=\"{disabled: noPrevious()}\">\n" +
    "        <a href class=\"page-link\" ng-click=\"selectPage(page - 1)\">{{getText('previous')}}</a>\n" +
    "    </li>\n" +
    "    <li ng-repeat=\"page in pages track by $index\" class=\"page-item\" ng-class=\"{active: page.active}\">\n" +
    "        <a href class=\"page-link\" ng-click=\"selectPage(page.number)\">{{page.text}}</a>\n" +
    "    </li>\n" +
    "    <li ng-if=\"directionLinks\" class=\"page-item\" ng-class=\"{disabled: noNext()}\">\n" +
    "        <a href class=\"page-link\" ng-click=\"selectPage(page + 1)\">{{getText('next')}}</a>\n" +
    "    </li>\n" +
    "    <li ng-if=\"boundaryLinks\" class=\"page-item\" ng-class=\"{disabled: noNext()}\">\n" +
    "        <a href class=\"page-link\" ng-click=\"selectPage(totalPages)\">{{getText('last')}}</a>\n" +
    "    </li>\n" +
    "</ul>");
}]);

angular.module("xue/template/table/table.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/table/table.html",
    "<div class=\"xe-table-container\">\n" +
    "    <div class=\"xe-table-header\">\n" +
    "        \n" +
    "    </div>\n" +
    "    <div class=\"xe-table-content\">\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"xe-table-footer\">\n" +
    "\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("xue/template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/tabs/tab.html",
    "<li ng-class=\"[{active: active, disabled: disabled}, classes]\" class=\"nav-item\">\n" +
    "    <a class=\"nav-link\"></a>\n" +
    "</li>");
}]);

angular.module("xue/template/tabs/tabs_wrap.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/tabs/tabs_wrap.html",
    "<div class=\"xui-tabs-wrap\">\n" +
    "    <ul class=\"xui-nav-wrap\" ng-transclude></ul>\n" +
    "    <div class=\"xui-tabs-content\">\n" +
    "        <div class=\"tab-pane\" ng-repeat=\"tab in tabset.tabs\" \n" +
    "            ng-class=\"{active: tabset.active === tab.index}\"\n" +
    "            xue-tab-content=\"tab\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
angular.module('xue.table').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTableCss && angular.element(document).find('head').prepend('<style type="text/css">.xe-table-container{width:100%;height:100%;position:relative;}.xe-table-container .xe-table-header{height:40px;width:100%;position:absolute;top:0;background:blue;}.xe-table-container .xe-table-content{width:100%;height:100%;background:red;}.xe-table-container .xe-table-footer{height:40px;width:100%;position:absolute;bottom:0;background:pink;}</style>'); angular.$$uibTableCss = true; });