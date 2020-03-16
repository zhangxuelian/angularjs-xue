angular.module("xue/template/steps/steps.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/steps/steps.html",
    "<div class=\"xui-steps-wrap {{stepsConfig.direction}} {{stepsConfig.theme}} {{stepsConfig.alignCenter?'is-center':''}} {{stepsConfig.size}}\">\n" +
    "    <div class=\"step-item\" ng-repeat=\"option in stepsConfig.options\"\n" +
    "        ng-class=\"{'active':option[stepsConfig.idField]==ngValue,'passed':option.passed,'future':option[stepsConfig.idField]!=ngValue && !option.passed,'last':$last}\">\n" +
    "        <div class=\"step-bar\">\n" +
    "            <div class=\"bar-icon {{stepsConfig.iconStyle}}\" ng-click=\"stepsCtrl.stepClick(option)\">\n" +
    "                <img class=\"bar-icon-inner\" ng-if=\"stepsConfig.iconStyle=='img'\" ng-src=\"{{option.imgUrl}}\" alt=\"\">\n" +
    "                <i class=\"bar-icon-inner {{option.iconfont}}\" ng-if=\"stepsConfig.iconStyle=='iconfont'\"></i>\n" +
    "                <span class=\"bar-icon-inner\" ng-if=\"stepsConfig.iconStyle=='num'\">{{$index+1}}</span>\n" +
    "                <span class=\"bar-icon-inner\"\n" +
    "                    ng-if=\"stepsConfig.iconStyle=='statusNum' && !option.passed\">{{$index+1}}</span>\n" +
    "                <i class=\"bar-icon-inner xui-icon xui-icon-md-checkmark\"\n" +
    "                    ng-if=\"(stepsConfig.iconStyle=='statusNum'||stepsConfig.iconStyle=='strokeStatus'||stepsConfig.iconStyle=='fillStatus') && option.passed && option[stepsConfig.idField]!=ngValue\"></i>\n" +
    "            </div>\n" +
    "            <div class=\"bar-line\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"step-main\">\n" +
    "            <div class=\"step-title\" ng-click=\"stepsCtrl.stepClick(option)\">{{option[stepsConfig.nameField]}}</div>\n" +
    "            <div class=\"step-description\">{{option[stepsConfig.descField]}}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
