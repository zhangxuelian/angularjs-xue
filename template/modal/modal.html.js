angular.module("xue/template/modal/modal.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/modal/modal.html",
    "<div class=\"xui-modal-dialog {{size ? 'modal-' + size : ''}}\" xue-modal-transclude>\n" +
    "</div>");
}]);
