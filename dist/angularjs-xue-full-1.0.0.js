/**
 * angularjs-xue
 * Homepage: https://github.com/zhangxuelian/angularjs-xue
 * 
 * Version: 1.0.0 - 2020-01-17
 * Require angularjs version: 1.2.32
 * License: ISC
 */
angular.module("ui.xue", ["ui.xue.tpls", "xue.pagination","xue.uitl.lang","xue.pagination","xue.table","xue.ui","xue.util.array","xue.util.collection","xue.util.date","xue.util.lang","xue.util.math","xue.util.methods","xue.util.number","xue.util.object","xue.util.properties","xue.util.seq","xue.util.string","xue.uitl.function","xue.util"]);
angular.module("ui.xue.tpls", ["xue/template/pagination/pager.html","xue/template/pagination/pagination.html","xue/template/pagination/pager.html","xue/template/pagination/pagination.html","xue/template/table/table.html"]);
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
angular.module('xue.table', ['xue.uitl.lang', 'xue.pagination'])
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
angular.module('xue.util.array', [])
    .service('xueUtilArray', [function () {

    }]);
angular.module('xue.util.collection', [])
    .service('xueUtilCollect', [function () {

    }]);
angular.module('xue.util.date', [])
    .service('xueUtilDate', [function () {
        this.test = function(){
            return 'test';
        }
    }]);
angular.module('xue.util.function', [])
    .service('xueUtilFunc', [function () {
        this.before = function (n, func) {
            // TODO
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
                return !obj.length;
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

angular.module("xue.util.math", []).service("xueUtilMath", [
    function() {
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
            } catch (e) {}
            try {
                decimalLen += multiplier2.split(".")[1].length;
            } catch (e) {}
            return (
                (Number(multiplier1.replace(".", "")) * Number(multiplier2.replace(".", ""))) /
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
    }
]);

angular.module('xue.util.methods', [])
    .service('xueUtilMethod', [function () {

    }]);
angular.module('xue.util.number', [])
    .service('xueUtilNumber', [function () {

    }]);
angular.module('xue.util.object', [])
    .service('xueUtilObject', [function () {

    }]);
angular.module('xue.util.properties', [])
    .service('xueUtilProperty', [function () {

    }]);
angular.module('xue.util.seq', [])
    .service('xueUtilSeq', [function () {

    }]);
angular.module('xue.util.string', [])
    .service('xueUtilString', [function () {

    }]);
angular.module('xue.util',[
    'xue.util.array','xue.util.collection','xue.util.date','xue.util.lang',
    'xue.util.math','xue.util.methods','xue.util.number','xue.util.object',
    'xue.util.properties','xue.util.seq','xue.util.string','xue.uitl.function']);
angular.module("xue/template/pagination/pager.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/pagination/pager.html",
    "<ul class=\"pager\">\n" +
    "    <li ng-class=\"{disabled: noPrevious(), previous: align}\"><a href ng-click=\"selectPage(page - 1)\">{{getText('previous')}}</a></li>\n" +
    "    <li ng-class=\"{disabled: noNext(), next: align}\"><a href ng-click=\"selectPage(page + 1)\">{{getText('next')}}</a></li>\n" +
    "</ul>");
}]);

angular.module("xue/template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/pagination/pagination.html",
    "<ul class=\"pagination\">\n" +
    "    <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noPrevious()}\">\n" +
    "        <a href ng-click=\"selectPage(1)\">{{getText('first')}}</a>\n" +
    "    </li>\n" +
    "    <li ng-if=\"directionLinks\" ng-class=\"{disabled: noPrevious()}\">\n" +
    "        <a href ng-click=\"selectPage(page - 1)\">{{getText('previous')}}</a>\n" +
    "    </li>\n" +
    "    <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active}\">\n" +
    "        <a href ng-click=\"selectPage(page.number)\">{{page.text}}</a>\n" +
    "    </li>\n" +
    "    <li ng-if=\"directionLinks\" ng-class=\"{disabled: noNext()}\">\n" +
    "        <a href ng-click=\"selectPage(page + 1)\">{{getText('next')}}</a>\n" +
    "    </li>\n" +
    "    <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noNext()}\">\n" +
    "        <a href ng-click=\"selectPage(totalPages)\">{{getText('last')}}</a>\n" +
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
angular.module('ui.xue.table').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTableCss && angular.element(document).find('head').prepend('<style type="text/css">.xe-table-container{width:100%;height:100%;position:relative;}.xe-table-container .xe-table-header{height:40px;width:100%;position:absolute;top:0;background:blue;}.xe-table-container .xe-table-content{width:100%;height:100%;background:red;}.xe-table-container .xe-table-footer{height:40px;width:100%;position:absolute;bottom:0;background:pink;}</style>'); angular.$$uibTableCss = true; });