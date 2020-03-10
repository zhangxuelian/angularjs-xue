angular.module('xue.switch', ['xue.util.lang'])
    // toggle switch base on angularjs
    .directive('xueSwitch', ['xueUtilLang', function (xueUtilLang) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                ngChecked: "=",
                switchClick: "=",
                clickParam: "="
            },
            template: '<label class="xui-switch-wrap">' +
                '<input class="swith-checkbox" type="checkbox" ng-model="ngChecked" ng-click="clickEvent()"/>' +
                '<div class="switch-bg"></div><div class="toggle-btn"></div></label>',
            link: function (scope, element, attr) {
                scope.clickEvent = function () {
                    if (xueUtilLang.isFunction(scope.switchClick)) {
                        scope.switchClick(scope.clickParam || "");
                    }
                }
            }
        }
    }])
    //switch开关
    .directive("xueToggle", function () {
        return {
            restrict: "E",
            replace: true,
            scope: {
                ngDisabled: '=',
                toggleConfig: '='
            },
            template: "<div class='xui-toggle-wrap' ng-class=\"{true:'active'}[toggleConfig.disabled]\"><div ng-click='switchToggle()'><div class='toggle-bar'></div><div class='toggle-button'></div></div></div>",
            link: function (scope, ele, attrs) {
                var toggleConfig = {
                    disabled: false,
                    onSelect: function () {}
                };
                scope.toggleConfig = angular.extend(toggleConfig, scope.toggleConfig);
                if (scope.ngDisabled) {
                    scope.toggleConfig.disabled = scope.ngDisabled;
                }
                scope.switchToggle = function () {
                    /* scope.toggleConfig.disabled = !scope.toggleConfig.disabled;
                    scope.ngDisabled = scope.toggleConfig.disabled; */
                    scope.toggleConfig.onSelect(scope.toggleConfig.disabled);
                }
                scope.$watch("ngDisabled", function (newVal, oldVal) {
                    scope.toggleConfig.disabled = newVal;
                });
            }
        }
    })