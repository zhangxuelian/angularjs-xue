angular.module("xue/template/menu/menu1.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/menu/menu1.html",
    "<ul class=\"xui-menu-wrap1 clearfix\" ng-class=\"{'vertical':'xui-menu-vertical','horizontal':'xui-menu-horizontal'}[mode]\"\n" +
    "    ng-transclude></ul>");
}]);
