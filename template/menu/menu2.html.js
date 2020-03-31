angular.module("xue/template/menu/menu2.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/menu/menu2.html",
    "<div class=\"xui-menu-wrap2\"\n" +
    "     ng-class=\"{'support-search':menuConfig.search,'xui-menu-horizontal':menuConfig.mode=='horizontal'}\">\n" +
    "     <div class=\"menu-search\" ng-if=\"menuConfig.search && menuConfig.mode=='vertical'\">\n" +
    "         <i class=\"menu-search-icon xui-icon xui-icon-md-search\"></i>\n" +
    "         <input type=\"text\" class=\"menu-ipt\" ng-model=\"vm.searchValue\" ng-blur=\"vm.hideSearchBox()\">\n" +
    "         <div class=\"menu-list\" ng-show=\"!!vm.searchValue\" ng-mouseover=\"vm.onSearchListDiv = true\"\n" +
    "             ng-mouseleave=\"vm.onSearchListDiv = false\">\n" +
    "             <ul>\n" +
    "                 <li ng-click=\"vm.select(item)\" ng-repeat=\"item in vm.menuList | filter : {menuName:vm.searchValue}\">\n" +
    "                     {{item[menuConfig.menuName]}}</li>\n" +
    "             </ul>\n" +
    "         </div>\n" +
    "     </div>\n" +
    "     <ul class=\"menu-item-wrap clearfix\">\n" +
    "         <li class=\"menu-item\" ng-repeat=\"item in menuConfig.data\" ng-if=\"menuConfig.mode=='vertical'\"\n" +
    "             ng-include=\"'menuTempVertical'\">\n" +
    "         </li>\n" +
    "         <li class=\"menu-item\" ng-repeat=\"item in menuConfig.data\" ng-if=\"menuConfig.mode=='horizontal'\"\n" +
    "             ng-mouseenter=\"mouseEvt(item,true)\" ng-mouseleave=\"mouseEvt(item,false)\" ng-include=\"'menuTempVertical'\">\n" +
    "         </li>\n" +
    "     </ul>\n" +
    "     <script id=\"menuTempVertical\" type=\"text/ng-template\">\n" +
    "         <div  class=\"menu-title\" ng-click=\"clickRouter(item)\" \n" +
    "        ng-class=\"{'active':item[menuConfig.menuId] == menuConfig.selectId,'horizontal-active':item.active}\">\n" +
    "            <div class=\"title-icon\" ng-if=\"item.iconName\">\n" +
    "                <i class=\"xui-icon {{item.iconName}}\"></i>\n" +
    "            </div>\n" +
    "            <i class=\"icon-dot\" ng-if=\"!item.subMenus && menuConfig.mode=='vertical'\"></i>\n" +
    "             <span>{{item[menuConfig.menuName]}}</span>  \n" +
    "             <div class=\"title-arrow-right\" ng-if=\"!!item.subMenus\">\n" +
    "                <i ng-show=\"!item.open\" class=\"xui-icon xui-icon-ios-arrow-forward\"></i>\n" +
    "                <i ng-show=\"!!item.open\" class=\"xui-icon xui-icon-ios-arrow-down\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "         <ul class=\"menu-sub-item\"  ng-if=\"menuConfig.mode=='vertical'\" ng-show=\"item.open\">\n" +
    "             <li class=\"menu-item\" ng-repeat=\"item in item.subMenus\"\n" +
    "             ng-include=\"'menuTempVertical'\" ></li> \n" +
    "         </ul>\n" +
    "         <div class=\"xui-menu-popup\" ng-show=\"item.open\" ng-if=\"menuConfig.mode=='horizontal' && item.subMenus\">\n" +
    "            <ul class=\"menu-popup-ul\">\n" +
    "                <li class=\"menu-item\" ng-repeat=\"item in item.subMenus\"\n" +
    "                ng-mouseenter=\"mouseEvt(item,true)\"\n" +
    "                ng-mouseleave=\"mouseEvt(item,false)\"\n" +
    "                ng-include=\"'menuTempVertical'\" ></li> \n" +
    "            </ul>\n" +
    "         </div>\n" +
    "    </script>\n" +
    " </div>");
}]);
