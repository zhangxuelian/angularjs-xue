angular.module("xue/template/modal/dialog.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/modal/dialog.html",
    "<div class=\"xui-modal-dialog xui-dialog-wrap {{size ? 'modal-' + size : ''}}\" >\n" +
    "    <div class=\"xui-dialog-header\" ng-if=\"!!dialogParam.header\">\n" +
    "        <span>{{dialogParam.title}}</span>\n" +
    "        <span ng-if=\"!!dialogParam.close\">X</span>\n" +
    "    </div>\n" +
    "    <div class=\"xui-dialog-body\" xue-modal-transclude>\n" +
    "        \n" +
    "    </div>\n" +
    "    <div class=\"xui-dialog-footer\" ng-if=\"!!dialogParam.footer\">\n" +
    "        <button ng-if=\"!!dialogParam.cancel\" class=\"xui-btn\">{{dialogParam.cancelValue}}</button>\n" +
    "        <button ng-if=\"!!dialogParam.confirm\" class=\"xui-btn xui-btn-primary\">{{dialogParam.confirmValue}}</button>\n" +
    "    </div>\n" +
    "</div>");
}]);
