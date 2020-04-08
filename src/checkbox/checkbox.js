angular.module('xue.checkbox', ['xue.util.lang', 'xue.util.array'])
    // checkbox base on angularjs
    .directive('xueCheckbox', function () {
        return {
            restrict: "E",
            replace: true,
            scope: {
                ngChecked: "="
            },
            template: '<div class="xui-checkbox-wrap" ng-class="{true:\'gx-checked\'}[!!ngChecked]"><i class="xui-icon xui-icon-md-checkmark"></i></div>'
        }
    })
    .directive('xueCheckboxGroup', [function () {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            controller: 'xueCheckboxGroupCtrl',
            scope: {
                ngModel: '=',
                ngChange: '&'
            },
            template: '<div ng-transclude class="xui-checkbox-group"></div>'
        }
    }])
    .controller('xueCheckboxGroupCtrl', ['$scope', 'xueUtilLang',function ($scope,xueUtilLang) {
        var ctrl = this;
        ctrl.checkList = $scope.ngModel;
        ctrl.change = function(checkList){
            if (xueUtilLang.isFunction($scope.ngChange)) {
                $scope.ngChange({ngModel:checkList});
            }
        }
    }])
    .directive('checkboxItem', ['xueUtilLang', 'xueUtilArray', function (xueUtilLang, xueUtilArray) {
        return {
            restrict: "E",
            replace: true,
            require: '^?xueCheckboxGroup',
            scope: {
                value: '=', // checkbox 的 value 复选组时必填
                ngDisabled: '=',
                checkboxClick: "&", // 绑定父元素事件
                label: '=', // 选项文本
                ngChecked: '=' // 选中状态
            },
            template: '<label class="xui-checkbox-item-wrap">' +
                '<span ng-class="{\'disabled\':ngDisabled,\'active\':checked}" class="checkbox-item">' +
                '<i class="xui-icon xui-icon-md-checkmark"></i>' +
                '<input  name="xueCheckbox" class="checkbox-input"  ng-model="checked" ng-disabled="ngDisabled" value="{{value}}" type="checkbox" ng-click="change($event,value)"/>' +
                '</span>' +
                '<span class="checkbox-name" ng-class={\'disabled\':ngDisabled} ng-if="label">{{label}}</span>' +
                '</label>',
            link: function (scope, ele, attrs, ctrl) {
                scope.checked = scope.ngChecked || false;
                scope.checkList = ctrl && ctrl.checkList;
                if (scope.checkList) {
                    var index = xueUtilArray.findStrIndex(scope.checkList, scope.value);
                    if (index > -1) {
                        scope.checked = true;
                    }
                }
                scope.change = function (e, value) {
                    scope.checked = e.target.checked;
                    if (typeof (scope.ngChecked) != 'undefined') {
                        scope.ngChecked = e.target.checked;
                    }
                    if (typeof (scope.checkList) != 'undefined') {
                        var index = xueUtilArray.findStrIndex(scope.checkList, value);
                        if (index > -1) {
                            scope.checkList.splice(index, 1);
                        } else {
                            scope.checkList.push(value);
                        }
                        ctrl.change(scope.checkList);
                    }
                    if (xueUtilLang.isFunction(scope.checkboxClick)) {
                        scope.checkboxClick({
                            checked: e.target.checked
                        });
                    }
                }
            }
        }

    }])