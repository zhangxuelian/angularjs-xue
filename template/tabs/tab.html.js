angular.module("xue/template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/tabs/tab.html",
    "<li ng-class=\"{'active':active,'disabled':disabled}\" class=\"nav-item\">\n" +
    "    <a class=\"nav-link\" ng-click=\"select($event)\" xue-tab-head>{{label}}</a>\n" +
    "</li>");
}]);
