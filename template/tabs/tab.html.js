angular.module("xue/template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/tabs/tab.html",
    "<li ng-class=\"[{active: active, disabled: disabled}, classes]\" class=\"nav-item\">\n" +
    "    <a class=\"nav-link\" xue-test>{{label}}</a>\n" +
    "</li>");
}]);
