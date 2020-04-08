angular.module("xue/template/autoselect/autoselect.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/autoselect/autoselect.html",
    "<div class=\"xui-autoselect-wrap\">\n" +
    "    <input ng-focus=\"selectCtrl.watch.focus($event)\" type=\"text\" class=\"xui-input select-show\" ng-model=\"ngVal\"\n" +
    "        title=\"{{ngVal}}\" ng-class=\"selectCtrl.selectClass\" ng-style=\"selectCtrl.iptStyle\" ng-blur=\"selectCtrl.blur()\"\n" +
    "        ng-disabled=\"ngDisabled\" />\n" +
    "    <div class=\"auto-select-content\" ng-style=\"selectCtrl.contentStyle\" id=\"{{selectConfig.id}}\">\n" +
    "        <ul>\n" +
    "            <li ng-repeat=\"item in selectConfig.data | filter:ngVal  | limitTo:selectConfig.showLimit\"\n" +
    "                ng-click=\"selectCtrl.selectItem(item)\">\n" +
    "                <span>{{item}}</span>\n" +
    "            </li>\n" +
    "            <li ng-if=\"!!!selectConfig.data || !selectConfig.data.length\" class=\"empty-data\">\n" +
    "                <span>暂无数据</span>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>");
}]);
