angular.module("xue/template/modal/modal.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/modal/modal.html",
    "<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\">\n" +
    "    <div class=\"modal-content\" xue-modal-transclude></div>\n" +
    "</div>");
}]);
