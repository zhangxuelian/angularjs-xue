angular.module("xue/template/counter/counter.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/counter/counter.html",
    "<div class=\"xui-counter-wrap {{counterConfig.size}}\" ng-class=\"{'disabled':counterConfig.disabled}\">\n" +
    "    <span ng-click=\"gxCounterCtrl.changeByBtn('reduce',params)\" class=\"reduce\"\n" +
    "        ng-class=\"{'disabled':counterConfig.disabled||gxCounterCtrl.number==counterConfig.min}\">-</span>\n" +
    "    <span ng-show=\"counterConfig.type==1\" class=\"text\" ng-model=\"gxCounterCtrl.number\">\n" +
    "        {{gxCounterCtrl.number}} {{counterConfig.suffix}}</span>\n" +
    "    <span ng-show=\"counterConfig.type==2\" class=\"input\" ng-class=\"{'hasSuffix':counterConfig.suffix}\">\n" +
    "        <input ng-disabled=\"counterConfig.disabled\" ng-blur=\"gxCounterCtrl.inputBlur()\"\n" +
    "            ng-focus=\"gxCounterCtrl.inputFocus()\" ng-change=\"gxCounterCtrl.inputChange($event)\"\n" +
    "            ng-model=\"gxCounterCtrl.number\" />\n" +
    "        <span ng-if=\"counterConfig.suffix\">{{counterConfig.suffix}}</span></span>\n" +
    "    <span ng-click=\"gxCounterCtrl.changeByBtn('add',params)\" class=\"add\"\n" +
    "        ng-class=\"{'disabled':counterConfig.disabled||gxCounterCtrl.number==counterConfig.max}\">+</span>\n" +
    "</div>");
}]);
