angular.module("xue/template/menu/submenu.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/menu/submenu.html",
    "<li class=\"menu-item\" \n" +
    "ng-class=\"{'is-opened':opened,'is-active':active}\"\n" +
    "ng-click=\"slectSubMenu($event)\" ng-mouseenter=\"mouseenter()\" \n" +
    "ng-mouseleave=\"mouseleave()\" ng-focus=\"focus()\">\n" +
    "    <div class=\"menu-title\">\n" +
    "        <span>{{label}}</span>\n" +
    "        <div class=\"title-arrow-right\">\n" +
    "            <i ng-if=\"!opened\" class=\"xui-icon xui-icon-ios-arrow-forward\"></i>\n" +
    "            <i ng-if=\"opened\" class=\"xui-icon xui-icon-ios-arrow-down\"></i>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <ul class=\"xui-menu-popup clearfix\"  ng-if=\"mode=='horizontal'\" ng-transclude>\n" +
    "    </ul>\n" +
    "    <ul class=\"menu-sub-item xui-menu-inline\" ng-if=\"mode=='vertical'\" ng-transclude >\n" +
    "    </ul>\n" +
    "</li>");
}]);
