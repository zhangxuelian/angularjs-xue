angular.module("xue/template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/popover/popover.html",
    "<div class=\"xui-popover-container\" id=\"{{popoverId}}\" ng-class=\"className\">\n" +
    "    <div ng-if=\"header\" class=\"popover-title\">{{header}}</div>\n" +
    "    <div ng-if=\"content\" class=\"popover-content\">{{content}}</div>\n" +
    "    <div class=\"triangle\" ng-if=\"!notriangle\"></div>\n" +
    "    <div ng-transclude class=\"popover-content\"></div>\n" +
    "</div>");
}]);
