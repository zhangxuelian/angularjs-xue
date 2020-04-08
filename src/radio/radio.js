angular.module('xue.radio', ['xue.util.lang'])
    // radio base on angularjs
    .directive('xueRadio', function () {
        return {
            restrict: "E",
            replace: true,
            scope: {
                ngChecked: "="
            },
            template: '<div class="xui-radio-wrap" ng-class="{true:\'gx-checked\'}[!!ngChecked]"></div>'
        }
    })
    // 单选指令组
    .directive('xueRadioGroup', ['xueUtilLang', function (xueUtilLang) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                value: '=', // Radio 的 value
                ngModel: '=',
                ngDisabled: '=',
                radioClick: "&", // 绑定父元素事件
                label: '=' // 选项值
            },
            template: '<label class="xui-radio-group-wrap">' +
                '<span ng-class="{\'active\':value==ngModel,\'disabled\':ngDisabled}" class="radio-item">' +
                '<input  class="checkbox-input" type="radio"  ng-disabled="ngDisabled"  ng-click="onChecked(value)" value="{{value}}" ng-model="ngModel"/>' +
                '</span>' +
                '<span class="radio-name" ng-class={\'disabled\':ngDisabled}>{{label}}</span>' +
                '</label>',
            link: function (scope, elem, attr) {
                scope.onChecked = function (value) {
                    if (scope.ngModel != value && !scope.ngDisabled) {
                        scope.ngModel = value;
                    }
                    if (xueUtilLang.isFunction(scope.radioClick)) {
                        scope.radioClick({ngModel:value});
                    }
                }
            }
        }
    }])