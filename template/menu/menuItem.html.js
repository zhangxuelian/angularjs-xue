angular.module("xue/template/menu/menuItem.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/menu/menuItem.html",
    "<li class=\"menu-item\" ng-class=\"{'is-active':active,'is-disabled':disabled}\"\n" +
    "ng-click=\"itemClick($event)\">\n" +
    "    <div  class=\"menu-title\">\n" +
    "         <span>{{label}}</span> \n" +
    "    </div>\n" +
    "</li>");
}]);
