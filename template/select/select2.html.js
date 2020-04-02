angular.module("xue/template/select/select2.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/select/select2.html",
    "<div class=\"xui-select-wrap2\">\n" +
    "    <div >\n" +
    "        <input ng-click=\"selectCtrl.openPanel($event)\" ng-readonly=\"!selectConfig.filter || selectConfig.separate\" type=\"text\" class=\"xui-input select-show\" title=\"{{selectConfig.inputLabel}}\"\n" +
    "            ng-model=\"selectConfig.inputLabel\" ng-class=\"selectClass\" ng-style=\"selectCtrl.iptStyle\"\n" +
    "            ng-change=\"selectCtrl.ev.changeIpt()\" ng-disabled=\"ngDisabled\" />\n" +
    "        <i class=\"dropdown-icon xui-icon xui-icon-md-arrow-dropdown\"></i>\n" +
    "        <!-- <i class=\"dropdown-icon xui-icon xui-icon-md-arrow-dropup\"></i> -->\n" +
    "    </div>\n" +
    "    <div class=\"select-content\" id=\"{{selectConfig.id}}\" ng-style=\"selectCtrl.contentStyle\"\n" +
    "        ng-class=\"{'select-separate':selectConfig.separate}\">\n" +
    "        <div class=\"separate-wrap\" ng-if=\"selectConfig.separate\" ng-class=\"{'hidden-filter':!selectConfig.enableEmpty}\">\n" +
    "            <div class=\"select-filter-wrap\">\n" +
    "                <input type=\"text\" ng-model=\"selectConfig.myLabel\" class=\"xui-input select-filter\" />\n" +
    "            </div>\n" +
    "            <i ng-click=\"selectCtrl.ev.clear()\" ng-if=\"selectConfig.enableEmpty\" title=\"清空\"\n" +
    "                class=\"xui-icon xui-icon-ios-trash\"></i>\n" +
    "        </div>\n" +
    "        <ul class=\"select-list\">\n" +
    "            <!-- 可过滤 -->\n" +
    "            <li ng-if=\"selectConfig.filter\"\n" +
    "                ng-click=\"selectCtrl.ev.onBeforeSelect(item,$event)\"\n" +
    "                ng-class=\"{true:'active'}[!!selectConfig.checkRowsMap[item[selectConfig.valueField]]]\"\n" +
    "                ng-repeat=\"item in selectConfig.data | filter:selectConfig.separate ? selectConfig.myLabel:selectConfig.inputLabel | limitTo:selectConfig.showLimit\">\n" +
    "                <xue-checkbox ng-if=\"selectConfig.checkbox\" ng-checked=\"selectConfig.checkRowsMap[item[selectConfig.valueField]]\"></xue-checkbox>\n" +
    "                <span ng-bind=\"item[selectConfig.textField] || textFieldFormat(item)\"></span>\n" +
    "            </li>\n" +
    "            <!-- 不可过滤 -->\n" +
    "            <li ng-if=\"!selectConfig.filter\"\n" +
    "                ng-click=\"selectCtrl.ev.onBeforeSelect(item,$event)\"\n" +
    "                ng-class=\"{true:'active'}[!!selectConfig.checkRowsMap[item[selectConfig.valueField]]]\"\n" +
    "                ng-repeat=\"item in selectConfig.data | limitTo:selectConfig.showLimit\">\n" +
    "                <xue-checkbox  ng-if=\"selectConfig.checkbox\" ng-checked=\"selectConfig.checkRowsMap[item[selectConfig.valueField]]\"></xue-checkbox>\n" +
    "                <span ng-bind=\"item[selectConfig.textField] || textFieldFormat(item)\"></span>\n" +
    "            </li>\n" +
    "            <li ng-if=\"!!!selectConfig.data || !selectConfig.data.length\" class=\"empty-data\">\n" +
    "                <span>暂无数据</span>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>");
}]);
