angular.module("xue/template/table/table.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/table/table.html",
    "<div>\n" +
    "    table test\n" +
    "    <h1>{{test1.output}}</h1>\n" +
    "</div>");
}]);
