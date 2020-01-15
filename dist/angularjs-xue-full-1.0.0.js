/**
 * angularjs-xue
 * Homepage: https://github.com/zhangxuelian/angularjs-xue
 * 
 * Version: 1.0.0 - 2020-01-15
 * Require angularjs version: 1.2.21
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

    }]);
angular.module('xue.util.function', [])
    .service('xueUtilFunc', [function () {
        this.before = function (n, func) {
            // TODO
        };
    }]);
angular.module('xue.uitl.lang', [])
    .service('xueUtilLang', [function () {

        var self = this;
        /**
         * 判断是否为对象object
         * 
         * @param {any} obj
         * @returns
         */
        this.isObject = function (obj) {
            var type = typeof obj;
            return obj != null && (type == 'object' || type == 'function');
        };
        /**
         * 判断是否为函数
         *
         * @param {any} fn
         * @returns
         */
        this.isFunction = function (fn) {
            return Object.prototype.toString.call(fn) === '[object Function]';
        };

    }]);
angular.module('xue.util.math', [])
    .service('xueUtilMath', [function () {

    }]);
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