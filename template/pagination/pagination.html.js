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
