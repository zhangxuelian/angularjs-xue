angular.module("xue/template/scroller/scroller.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/scroller/scroller.html",
    "<div class=\"xui-scroller-container\" ng-style=\"scrollConfig.backgroundStyle\">\n" +
    "    <div class=\"scroller-content\">\n" +
    "        <div class=\"dynamic-container\" ng-style=\"{'top':-scrollConfig.goIndex*scrollConfig.itemHeight+'px' || 0}\">\n" +
    "            <ul ng-repeat=\"item in scrollConfig.data track by $index\" ng-style=\"scrollConfig.goIndex == $index ? scrollConfig.highlightStyle : {}\">\n" +
    "                <li ng-if=\"scrollConfig.dataType == 1\" ng-style=\"scrollConfig.itemStyle\">\n" +
    "                    {{item}}\n" +
    "                </li>\n" +
    "                <li ng-if=\"scrollConfig.dataType == 2\" ng-repeat=\"list in item\" ng-style=\"scrollConfig.itemStyle[$index]\">\n" +
    "                    {{list}}\n" +
    "                </li>\n" +
    "                <li ng-if=\"scrollConfig.dataType == 3\" ng-style=\"scrollConfig.itemStyle\" ng-class=\"item.class\">\n" +
    "                    {{item.text}}\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
