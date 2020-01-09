angular.module("uib/template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/pagination/pagination.html",
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
