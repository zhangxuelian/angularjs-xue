angular.module("xue/template/menu/menu.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/menu/menu.html",
    "<div class=\"xui-menu-wrap\" ng-class=\"{true:'support-search'}[menuConfig.search]\">\n" +
    "    <div class=\"menu-search\" ng-if=\"menuConfig.search\">\n" +
    "        <i class=\"menu-search-icon xui-icon xui-icon-md-search\"></i>\n" +
    "        <input type=\"text\" class=\"menu-ipt\" ng-model=\"vm.searchValue\" ng-blur=\"vm.hideSearchBox()\">\n" +
    "        <div class=\"menu-list\" ng-show=\"!!vm.searchValue\"\n" +
    "            ng-mouseover=\"vm.onSearchListDiv = true\"\n" +
    "            ng-mouseleave=\"vm.onSearchListDiv = false\">\n" +
    "            <ul>\n" +
    "                <!-- <li ng-click=\"vm.select(item)\" ng-repeat=\"item in vm.menuList | filter : {menuName:vm.searchValue}\">{{item[menuConfig.oneDimenName]}}</li> -->\n" +
    "                <li ng-click=\"vm.select(item)\" ng-repeat=\"item in vm.menuList | filterList : menuConfig.searchProp : vm.searchValue\">{{item[menuConfig.oneDimenName]}}</li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"menu-item-wrap\">\n" +
    "        <div class=\"menu-item\" ng-repeat=\"item in menuConfig.data\">\n" +
    "            <div class=\"item-title\" ng-click=\"clickRouter(item)\" ng-class=\"{true:'active'}[item[menuConfig.routerId] == menuConfig.selectId]\">\n" +
    "                <div class=\"title-icon\" ng-if=\"menuConfig.showOneDimenIcon\">\n" +
    "                    <img alt=\"\" ng-if=\"!!item[menuConfig.oneDimenIcon]\" \n" +
    "                        ng-src=\"{{menuConfig.imagePrefix+item[menuConfig.oneDimenIcon]+menuConfig.imageSuffix}}\">\n" +
    "                    <i ng-if=\"!item[menuConfig.oneDimenIcon]\" class=\"fa fa-star\"></i>\n" +
    "                </div>\n" +
    "                <div class=\"title-content\" title=\"{{item[menuConfig.oneDimenName]}}\">\n" +
    "                    {{item[menuConfig.oneDimenName]}}\n" +
    "                </div>\n" +
    "                <div class=\"title-arrow\" ng-if=\"!!item[menuConfig.childrenName]\">\n" +
    "                    <i ng-if=\"!item.open\" class=\"xui-icon xui-icon-ios-arrow-forward\"></i>\n" +
    "                    <i ng-if=\"!!item.open\" class=\"xui-icon xui-icon-ios-arrow-down\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"item-content\" ng-show=\"!!item.open && !!item[menuConfig.childrenName]\">\n" +
    "                <ul>\n" +
    "                    <li ng-repeat=\"children in item[menuConfig.childrenName]\" title=\"{{children[menuConfig.twoDimenName]}}\" \n" +
    "                    ng-click=\"clickRouter(children)\" ng-class=\"{true:'active'}[children[menuConfig.routerId] == menuConfig.selectId]\">\n" +
    "                        <span>{{children[menuConfig.twoDimenName]}}</span>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
