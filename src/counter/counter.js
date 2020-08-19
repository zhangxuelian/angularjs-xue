angular.module('xue.counter', ['xue.util.lang'])
    .directive('xueCounter', ['xueUtilLang', function (xueUtilLang) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                counterConfig: '=',
                ngNumber: '=',
                params: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || "xue/template/counter/counter.html";
            },
            link: function (scope) {
                var gxCounterCtrl = scope.gxCounterCtrl = {
                    number: "", //组件内部展示数据
                    lastNumber: "", //记录上一次的更改数据
                    stepDecimals: 0,
                    defaultConfig: {
                        type: 1, //支持两种模式：1：纯文本,2:input输入框
                        max: 100, //最大值
                        min: 0, //最小值
                        step: 1, //数据每次加/减多少
                        precision: 0, // 精度 默认为步进精度 不能小于步进精度 
                        disabled: false, //是否是可操作状态
                        required: true, //数据是否必填
                        size: "", //计数器大小,默认为空,另有可选值large, small
                        suffix: "", //数据后缀,如单位等
                        trigger: "change", //触发changeCallback的时机,可选值blur,change,type为2时生效
                        change: function () {}, //自定义change事件
                        blur: function () {}, //自定义blur事件
                        focus: function () {}, //自定义focus事件
                        changeCallback: function () {} //数据改变回调
                    },
                    init: function () {
                        var self = this;
                        gxCounterCtrl.number = scope.ngNumber;
                        gxCounterCtrl.lastNumber = scope.ngNumber;
                        scope.counterConfig = angular.extend(self.defaultConfig, scope.counterConfig || {});
                        gxCounterCtrl.countDecimals();
                    },
                    // 获取步进小数位数
                    countDecimals: function () {
                        if (Math.floor(scope.counterConfig.step) !== scope.counterConfig.step) {
                            gxCounterCtrl.stepDecimals = scope.counterConfig.step.toString().split(".")[1].length || 0;
                            if (scope.counterConfig.precision == 0) {
                                scope.counterConfig.precision = gxCounterCtrl.stepDecimals;
                            }
                        }
                    },
                    changeByBtn: function (code) {
                        if (scope.counterConfig.disabled || (gxCounterCtrl.stepDecimals > scope.counterConfig.precision)) {
                            return;
                        }
                        gxCounterCtrl.number = Number(gxCounterCtrl.number);
                        if (code == "add") {
                            if (gxCounterCtrl.number == scope.counterConfig.max) {
                                return;
                            }
                            gxCounterCtrl.number += scope.counterConfig.step;
                            //若运算之后值大于最大值,则重置
                            if (gxCounterCtrl.number > scope.counterConfig.max) {
                                gxCounterCtrl.number = scope.counterConfig.max;
                            }
                            gxCounterCtrl.number = gxCounterCtrl.number.toFixed(scope.counterConfig.precision);
                        } else {
                            if (gxCounterCtrl.number == scope.counterConfig.min) {
                                return;
                            }
                            gxCounterCtrl.number -= scope.counterConfig.step;
                            //若运算之后值小于最小值,则重置
                            if (gxCounterCtrl.number < scope.counterConfig.min) {
                                gxCounterCtrl.number = scope.counterConfig.min;
                            }
                            gxCounterCtrl.number = gxCounterCtrl.number.toFixed(scope.counterConfig.precision);
                        }
                        //保留最后一次更改
                        gxCounterCtrl.lastNumber = gxCounterCtrl.number;
                        if (xueUtilLang.isFunction(scope.counterConfig.changeCallback)) {
                            scope.counterConfig.changeCallback(gxCounterCtrl.number, scope.params);
                        }
                    },
                    inputChange: function () {
                        if (xueUtilLang.isFunction(scope.counterConfig.change)) {
                            scope.counterConfig.change(gxCounterCtrl.number, scope.params);
                        }
                        if (scope.counterConfig.trigger == "change" && xueUtilLang.isFunction(scope.counterConfig.changeCallback)) {
                            scope.counterConfig.changeCallback(gxCounterCtrl.number, scope.params);
                        }
                    },
                    inputBlur: function () {
                        //支持负值、空值、0及非0开头数字
                        var reg = /^-?(0|[1-9][0-9]*)*$/;
                        if (reg.test(gxCounterCtrl.number)) {
                            if (scope.counterConfig.required && !gxCounterCtrl.number) {
                                gxCounterCtrl.number = gxCounterCtrl.lastNumber == "-" ? scope.counterConfig.min : gxCounterCtrl.lastNumber;
                            } else if (gxCounterCtrl.number > scope.counterConfig.max) {
                                gxCounterCtrl.number = scope.counterConfig.max;
                            } else if (gxCounterCtrl.number < scope.counterConfig.min) {
                                gxCounterCtrl.number = scope.counterConfig.min;
                            }
                        } else {
                            //不符合规则的值重置为上一次更改的值
                            gxCounterCtrl.number = gxCounterCtrl.lastNumber;
                        }
                        gxCounterCtrl.lastNumber = gxCounterCtrl.number;
                        if (xueUtilLang.isFunction(scope.counterConfig.blur)) {
                            scope.counterConfig.blur(gxCounterCtrl.number, scope.params);
                        }
                        if (scope.counterConfig.trigger == "blur" && xueUtilLang.isFunction(scope.counterConfig.changeCallback)) {
                            scope.counterConfig.changeCallback(gxCounterCtrl.number, scope.params);
                        }
                    },
                    inputFocus: function () {
                        if (xueUtilLang.isFunction(scope.counterConfig.focus)) {
                            scope.counterConfig.focus(gxCounterCtrl.number, scope.params);
                        }
                    }
                }
                gxCounterCtrl.init();
                //监听外部传入的值
                scope.ngNumberWatcher = scope.$watch("ngNumber", function (newVal) {
                    if (typeof (newVal) != 'undefined') {
                        gxCounterCtrl.number = Number(newVal).toFixed(scope.counterConfig.precision);
                        gxCounterCtrl.lastNumber = Number(newVal).toFixed(scope.counterConfig.precision);
                    }
                });
                scope.$on('$destroy', function () {
                    scope.ngNumberWatcher();
                });
            }
        }
    }])