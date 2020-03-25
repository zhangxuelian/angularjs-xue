angular.module("xue/template/menu/menu2.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/menu/menu2.html",
    "<div class=\"xui-menu-wrap2\"\n" +
    " ng-class=\"{true:'support-search'}[menuConfig.search]\"\n" +
    " ng-class=\"{'vertical':'xui-menu-vertical','horizontal':'xui-menu-horizontal'}[menuConfig.mode]\">\n" +
    "    <div class=\"menu-search\" ng-if=\"menuConfig.search && menuConfig.mode=='vertical'\">\n" +
    "        <i class=\"menu-search-icon xui-icon xui-icon-md-search\"></i>\n" +
    "        <input type=\"text\" class=\"menu-ipt\" ng-model=\"vm.searchValue\" ng-blur=\"vm.hideSearchBox()\">\n" +
    "        <div class=\"menu-list\" ng-show=\"!!vm.searchValue\"\n" +
    "            ng-mouseover=\"vm.onSearchListDiv = true\"\n" +
    "            ng-mouseleave=\"vm.onSearchListDiv = false\">\n" +
    "            <ul>\n" +
    "                <li ng-click=\"vm.select(item)\" ng-repeat=\"item in vm.menuList | filter : {menuName:vm.searchValue}\">{{item.menuName}}</li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "     <ul class=\"menu-item-wrap clearfix\" >\n" +
    "         <li class=\"menu-item\" ng-repeat=\"item in menuConfig.data\" \n" +
    "         ng-class=\"{'is-opened':item.open}\"\n" +
    "         ng-mouseenter=\"mouseenter(item)\"\n" +
    "         ng-mouseleave=\"mouseleave(item)\"\n" +
    "         ng-include=\"'menuTempVertical'\">\n" +
    "         </li>\n" +
    "     </ul>\n" +
    "     <script id=\"menuTempVertical\" type=\"text/ng-template\">\n" +
    "         <div  class=\"menu-title\" ng-click=\"clickMenu(item)\" \n" +
    "        ng-class=\"{true:'active'}[item[menuConfig.menuId] == menuConfig.selectId]\">\n" +
    "            <div class=\"title-icon\" ng-if=\"item.iconName\">\n" +
    "                <i class=\"xui-icon xui-icon-ios-arrow-forward\"></i>\n" +
    "            </div>\n" +
    "            <i class=\"icon-dot\" ng-if=\"!item.subMenus && menuConfig.mode=='vertical'\"></i>\n" +
    "             <span>{{item.menuName}}</span>  \n" +
    "             <div class=\"title-arrow-right\" ng-if=\"!!item.subMenus\">\n" +
    "                <i ng-if=\"!item.open\" class=\"xui-icon xui-icon-ios-arrow-forward\"></i>\n" +
    "                <i ng-if=\"!!item.open\" class=\"xui-icon xui-icon-ios-arrow-down\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "         <ul class=\"menu-sub-item xui-menu-inline\"  ng-if=\"item.open && menuConfig.mode=='vertical'\">\n" +
    "             <li class=\"menu-item\" ng-repeat=\"item in item.subMenus\"\n" +
    "             ng-class=\"{'is-opened':item.open}\"\n" +
    "             ng-include=\"'menuTempVertical'\" ></li> \n" +
    "         </ul>\n" +
    "         <ul class=\"xui-menu-popup clearfix\"  ng-if=\"menuConfig.mode=='horizontal' && item.subMenus\" >\n" +
    "            <li class=\"menu-item\" ng-repeat=\"item in item.subMenus\"\n" +
    "            ng-class=\"{'is-opened':item.open}\"\n" +
    "            ng-mouseenter=\"item.open = true\"\n" +
    "            ng-mouseleave=\"item.open = false\"\n" +
    "            ng-include=\"'menuTempVertical'\" ></li> \n" +
    "        </ul>\n" +
    "    </script>\n" +
    " </div>");
}]);
