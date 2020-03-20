angular.module("xue/template/menu/menu1.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/menu/menu1.html",
    "<div>\n" +
    "    <ul class=\"xui-menu-wrap1 clearfix\"\n" +
    "        ng-class=\"{'vertical':'xui-menu-vertical','horizontal':'xui-menu-horizontal'}[menuConfig.mode]\">\n" +
    "        <li class=\"menu-item\" ng-if=\"menuConfig.mode=='vertical'\" ng-repeat=\"item in menuConfig.data\"\n" +
    "            ng-include=\"'menuTempVertical'\">\n" +
    "        </li>\n" +
    "        <li class=\"menu-item xui-menu-popup-content\" ng-include=\"'popupTemp'\" ng-if=\"menuConfig.mode=='horizontal'\"\n" +
    "            ng-repeat=\"item in menuConfig.data\">\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <script id=\"menuTempVertical\" type=\"text/ng-template\">\n" +
    "        <div  class=\"menu-title\" ng-click=\"clickMenu(item)\" ng-class=\"{true:'active'}[item[menuConfig.menuId] == menuConfig.selectId]\">\n" +
    "            <div class=\"title-icon\" ng-if=\"item.iconName\">\n" +
    "                <i class=\"xui-icon xui-icon-ios-arrow-forward\"></i>\n" +
    "            </div>\n" +
    "             <span>{{item.menuName}}</span>  \n" +
    "             <div class=\"title-arrow-right\" ng-if=\"!!item.subMenus\">\n" +
    "                <i ng-if=\"!item.open\" class=\"xui-icon xui-icon-ios-arrow-forward\"></i>\n" +
    "                <i ng-if=\"!!item.open\" class=\"xui-icon xui-icon-ios-arrow-down\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "         <ul class=\"menu-sub-item xui-menu-inline\"  ng-if=\"item.open\">\n" +
    "             <li ng-repeat=\"item in item.subMenus\"\n" +
    "             ng-include=\"'menuTempVertical'\"></li> \n" +
    "         </ul>\n" +
    "    </script>\n" +
    "    <script id=\"popupTemp\" type=\"text/ng-template\">\n" +
    "        <div  class=\"menu-title\" ng-click=\"clickMenu(item)\">\n" +
    "                <span>{{item.menuName}}</span> \n" +
    "                <div class=\"title-arrow-right\" ng-if=\"!!item.subMenus\">\n" +
    "                    <i ng-if=\"!item.open\" class=\"xui-icon xui-icon-ios-arrow-forward\"></i>\n" +
    "                    <i ng-if=\"!!item.open\" class=\"xui-icon xui-icon-ios-arrow-down\"></i>\n" +
    "                </div>\n" +
    "             </div>\n" +
    "            <ul class=\"xui-menu-popup\" ng-if=\"item.subMenus && item.open\">\n" +
    "                <li  ng-include=\"'menuTempVertical'\"  ng-repeat=\"item in item.subMenus\"></li>\n" +
    "            </ul>\n" +
    "    </script>\n" +
    "</div>");
}]);
