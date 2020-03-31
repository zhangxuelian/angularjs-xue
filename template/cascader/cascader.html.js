angular.module("xue/template/cascader/cascader.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/cascader/cascader.html",
    "<div class=\"xui-cascader-container\">\n" +
    "    <div class=\"cascader-input-wrapper\" \n" +
    "        ng-click=\"cascaderCtrl.toggleSelect($event)\" \n" +
    "        ng-mouseover=\"cascaderCtrl.showDelete = true\" \n" +
    "        ng-mouseleave=\"cascaderCtrl.showDelete = false\">\n" +
    "            <input ng-model=\"ngVal\" type=\"text\" class=\"cascader-input\" \n" +
    "                ng-style=\"cascaderConfig.css.inputStyle\" \n" +
    "                ng-class=\"cascaderConfig.css.inputClassName\"\n" +
    "                placeholder=\"请选择\" title=\"{{ ngVal }}\" readonly>\n" +
    "            <i class=\"cascader-icon xui-icon xui-icon-ios-close-circle-outline\" ng-if=\"cascaderCtrl.showDelete && !!ngVal\" title=\"清空\" ng-click=\"cascaderCtrl.clear($event)\"></i>\n" +
    "            <!-- <i class=\"cascader-icon xui-icon xui-icon-md-arrow-dropdown\" ng-if=\"!(cascaderCtrl.showDelete && !!ngVal)\" ng-class=\"{'expanded': cascaderCtrl.showSelect}\"></i> -->\n" +
    "    </div>\n" +
    "    <div class=\"cascader-select-wrapper\" \n" +
    "        ng-show=\"cascaderCtrl.showSelect\"\n" +
    "        ng-mouseover=\"cascaderCtrl.onSelectDiv = true\" \n" +
    "        ng-mouseleave=\"cascaderCtrl.onSelectDiv = false\">\n" +
    "            <ul class=\"select-list\" ng-class=\"cascaderConfig.css.panelClassName\"\n" +
    "                ng-style=\"cascaderConfig.css.panelStyle\" ng-if=\"list.length\" \n" +
    "                ng-repeat=\"list in cascaderCtrl.selectList\">\n" +
    "                    <li class=\"select-item\" \n" +
    "                        title=\"{{ item[cascaderConfig.textField] }}\"\n" +
    "                        ng-class=\"{'active': item[cascaderConfig.valueField] == cascaderCtrl.selectValue[item.depth]}\"\n" +
    "                        ng-repeat=\"item in list\" ng-click=\"cascaderCtrl.clickItem(item)\">\n" +
    "                            {{ item[cascaderConfig.textField] }}\n" +
    "                            <i class=\"cascader-icon xui-icon xui-icon-md-arrow-dropright\" ng-if=\"!item.isLeaf\"></i>\n" +
    "                    </li>\n" +
    "            </ul>\n" +
    "    </div>\n" +
    "</div>");
}]);
