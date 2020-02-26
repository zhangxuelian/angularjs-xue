angular.module('xue.steps', [])
    .directive('xueSteps', ['xueUtilLang', "xueUtilArray", function (xueUtilLang, xueUtilArray) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                stepsConfig: '=',
                params: '=',
                ngValue: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/steps/steps.html';
            },
            link: function (scope) {
                var stepsCtrl = scope.stepsCtrl = {
                    defaultConfig: {
                        theme: "blue-theme", //可选值blue-theme,green-theme,可继续拓展
                        size: "", //small,large,在iconStyle为point时无效
                        direction: "horizontal", //horizontal:水平布局,vertical：垂直布局
                        alignCenter: false, //是否居中展示,在direction为horizontal时有效
                        iconStyle: "num", //icon的展示形式,num：默认,statusNum：带状态的数字,strokeStatus：镂空状态,fillStatus：填充状态,point：小点式,img：图片,iconfont：字体图标
                        idField: "code", //键值字段名
                        nameField: "title", //步骤展示文字字段名
                        descField: "description", //描述文字字段名
                        options: [{
                            code: "",
                            title: "",
                            active: "", //标记是否是当前步骤
                            passed: "", //标记步骤是否已通过
                            imgUrl: "", //iconStyle为img时，传入图片路径
                            iconfont: "", //iconStyle为iconfont时，传入图标class值
                            description: ""
                        }],
                        changeCallback: function () {}
                    },
                    //设置步骤条状态
                    setStepStatus: function () {},
                    init: function () {
                        var self = this;
                        scope.stepsConfig = angular.extend(self.defaultConfig, scope.stepsConfig || {});
                        if (xueUtilLang.isFunction(scope.stepsConfig.setStepStatus)) {
                            self.setStepStatus = scope.stepsConfig.setStepStatus;
                        } else {
                            self.setStepStatus = self._setStepStatus;
                        }
                        scope.stepsConfig.options = self.setStepStatus(scope.stepsConfig.options, scope.params);
                    },
                    _setStepStatus: function (options) {
                        var index = xueUtilArray.findObjIndex(options, [scope.stepsConfig.idField], scope.ngValue);
                        angular.forEach(options, function (item, i) {
                            if (i < index) {
                                item.passed = true;
                            } else {
                                item.passed = false;
                            }
                        });
                        return options;
                    },
                    //步骤条点击事件
                    stepClick: function (option) {
                        if (scope.ngValue === option[scope.stepsConfig.idField]) {
                            return;
                        }
                        if (xueUtilLang.isFunction(scope.stepsConfig.beforeChange) &&
                            !scope.stepsConfig.beforeChange(option, scope.params)) {
                            return;
                        }
                        scope.ngValue = option[scope.stepsConfig.idField];
                        scope.stepsConfig.options = this.setStepStatus(scope.stepsConfig.options, scope.params);
                        if (xueUtilLang.isFunction(scope.stepsConfig.changeCallback)) {
                            scope.stepsConfig.changeCallback(option, scope.params);
                        }
                    }
                };
                //监听options
                scope.stepsConfigWatcher = scope.$watch("stepsConfig.options", function (newVal) {
                    scope.stepsConfig.options = stepsCtrl.setStepStatus(newVal, scope.params);
                });
                scope.$on('$destroy', function () {
                    scope.stepsConfigWatcher();
                });
                stepsCtrl.init();
            }
        };
    }]);