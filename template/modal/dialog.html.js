angular.module("xue/template/modal/dialog.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/modal/dialog.html",
    "<div class=\"xui-modal-dialog xui-dialog-wrap {{size ? 'modal-' + size : ''}}\">\n" +
    "    <div class=\"xui-dialog-header\" ng-if=\"!!dialogParam.header\" xue-drag>\n" +
    "        <span class=\"header-title\">{{dialogParam.title}}</span>\n" +
    "        <span class=\"header-close\" ng-if=\"!!dialogParam.close\" ng-click=\"ext.close()\">\n" +
    "            <i class=\"xui-icon xui-icon-md-close\"></i>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "    <div class=\"xui-dialog-body\" xue-modal-transclude>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"xui-dialog-footer\" ng-if=\"!!dialogParam.footer\">\n" +
    "        <button ng-if=\"!!dialogParam.cancel\" class=\"xui-btn\"\n" +
    "            ng-click=\"ext.cancel()\">{{dialogParam.cancelValue}}</button>\n" +
    "        <button ng-if=\"!!dialogParam.confirm\" class=\"xui-btn xui-btn-primary\"\n" +
    "            ng-click=\"ext.confirm()\">{{dialogParam.confirmValue}}</button>\n" +
    "    </div>\n" +
    "</div>");
}]);
