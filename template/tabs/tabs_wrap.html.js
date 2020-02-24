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