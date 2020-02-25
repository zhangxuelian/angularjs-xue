angular.module('xue.select', [])
    .directive('xueSelect', ['xueUtilArray', 'xueUtilLang','$timeout', function (xueUtilArray, xueUtilLang,$timeout) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                selectConfig: '=',
                setVal: '=',
                getVal: '=',
                ngDisabled: '=',
                ngItem: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || "xue/template/select/select.html";
            },
            link: function (scope, ele, attrs) {
                var assistVar = {
                    unbindWatch1: null,
                    unbindWatch2: null,
                    unbindWatch3: null,
                    unbindWatch4: null
                }
                //common select config
                var selectConfig = {
                    filter: true, //过滤器开关 为false时与select标签功能一致
                    enableEmpty: true, //是否可以置空
                    separate: true, //输入与过滤分离 为false时输入与过滤合并为一体
                    checkbox: false, //多选开关
                    position: 'down', //面板显示位置,默认在下
                    data: [], //select数据源（数组）
                    valueField: 'value', //对应选项value值
                    textField: 'label', //显示在输入框中的字段名
                    textFieldFormat: function () {}, //自定义显示在输入框中的内容
                    height: '28px', //输入框高度
                    panelHeight: '250px', //面板高度
                    panelWidth: '180px', //面板以及输入框宽度
                    showLimit: 50, //匹配前n条记录
                    inputLabel: "", //输入框内容
                    myLabel: "",
                    setValue: '', //设置值
                    value: '', //值
                    label: '', //输入框的值
                    checkRows: [], //选中数组Row
                    checkLimit: null, //最多选n条记录
                    checkRowsMap: {}, //选中记录map
                    onBeforeSelect: function () {}, // 选择前回调
                    onSelect: function () {}, //选择回调
                    assign: function () {}, //赋值回调
                    clearAll: function () {}, //清空回调
                    disabled: false, //disabled开关
                    cancelWatch: function () { //取消监听（取消后重新设置data和setValue都不会监听到，慎用）
                        assistVar.unbindWatch2();
                    },
                    reset: function () { //重置
                        scope.selectConfig.value = '';
                        if (typeof (attrs.getVal) != 'undefined') {
                            scope.getVal = '';
                        }
                        scope.selectConfig.label = '';
                        scope.selectConfig.checkRows = [];
                        scope.selectConfig.setValue = '';
                        ele.find(".select-show").val('');
                        ele.find(".select-show").attr('title', '');
                        scope.selectConfig.checkRowsMap = {};
                    }
                };
                //extend
                scope.selectConfig = angular.extend(selectConfig, scope.selectConfig);
                if (scope.ngDisabled) {
                    scope.selectConfig.disabled = true;
                }
                //textFieldFormat
                scope.textFieldFormat = function (item) {
                    if (xueUtilLang.isFunction(scope.selectConfig.textFieldFormat)) {
                        item[scope.selectConfig.textField] = scope.selectConfig.textFieldFormat(item) || item[scope.selectConfig.textField] || "";
                    }
                }
                //element
                ele = angular.element(attrs.$$element);

                //get label and value from checkRows
                scope.getData = function () {
                    var label = "",
                        value = "";
                    if (scope.selectConfig.checkRows.length != 0) {
                        scope.selectConfig.checkRowsMap = {};
                        angular.forEach(scope.selectConfig.checkRows, function (item) {
                            scope.textFieldFormat(item);
                            label += item[scope.selectConfig.textField] + ",";
                            value += item[scope.selectConfig.valueField] + ",";
                            scope.selectConfig.checkRowsMap[item[scope.selectConfig.valueField]] = true;
                        });
                        if (label) {
                            label = label.substring(0, label.length - 1);
                            value = value.substring(0, value.length - 1);
                        }
                    }
                    scope.selectConfig.label = label;
                    scope.selectConfig.value = value;
                    if (typeof (attrs.getVal) != 'undefined') {
                        scope.getVal = value;
                    }
                    // ele.find(".select-show").val(label);
                    // ele.find(".select-show").attr("title", label);

                    angular.element(ele[0].children[0].children[0]).val(label)
                    angular.element(ele[0].children[0].children[0]).attr("title", label)

                    scope.selectConfig.inputLabel = label;
                }

                //assign
                assistVar.unbindWatch1 = scope.$watch("setVal", function (newValue, oldValue) {
                    if (typeof (newValue) != 'undefined') {
                        scope.selectConfig.setValue = newValue;
                    }
                });

                assistVar.unbindWatch2 = scope.$watch("selectConfig.data + selectConfig.setValue", function (newValue, oldValue) {
                    if (scope.selectConfig && typeof (scope.selectConfig.setValue) != 'undefined') {
                        if (scope.selectConfig.checkbox) { //多选
                            var valueArr = scope.selectConfig.setValue.split(",");
                            var rows = xueUtilArray.eleInArrByKeys(scope.selectConfig.data, scope.selectConfig.valueField, valueArr) || [];
                            scope.selectConfig.checkRows = rows;
                            scope.getData();
                        } else { //单选
                            var index = xueUtilArray.findObjIndex(scope.selectConfig.data, scope.selectConfig.valueField, scope.selectConfig.setValue);
                            if (index != -1) {
                                scope.selectConfig.checkRows = [];
                                scope.selectConfig.checkRows.push(scope.selectConfig.data[index]);
                                scope.getData();
                            }
                        }
                    }
                }, true);

                //assign
                assistVar.unbindWatch3 = scope.$watch("selectConfig.value", function (newValue, oldValue) {
                    if (scope.selectConfig && xueUtilLang.isFunction(scope.selectConfig.assign) && scope.selectConfig.checkRows.length) {
                        scope.selectConfig.assign(scope.selectConfig.checkRows);
                    }
                })

                //layout
                scope.selectClass = attrs.selectClass;
                scope.contentStyle = {
                    width: scope.selectConfig.panelWidth,
                    height: scope.selectConfig.panelHeight,
                    top: scope.selectConfig.height
                }
                scope.showStyle = {
                    width: scope.selectConfig.panelWidth,
                    height: scope.selectConfig.height
                }

                //listener
                assistVar.unbindWatch4 = scope.$watch("ngDisabled", function (newValue, oldValue) {
                    if (newValue) {
                        scope.selectConfig.disabled = true;
                    } else if (typeof (newValue) != 'undefined') {
                        scope.selectConfig.disabled = false;
                    }
                });
                scope.focus = function () {
                    // $(".select-content").hide();
                    // if(ele.find(".select-content").is(":hidden")){
                    //     ele.find(".select-content").show();
                    //     //单选可过滤且分离
                    //     if((!scope.selectConfig.checkbox && scope.selectConfig.filter && scope.selectConfig.separate) || scope.selectConfig.checkbox){
                    //         ele.find(".select-content>input[type='text']").focus();
                    //     }
                    // }else{
                    //     //ele.find(".select-content").hide();
                    // }
                    var $select = ele[0].children[0].children[1];
                    angular.element($select).css('display', 'block');
                    //单选可过滤且分离
                    if ((!scope.selectConfig.checkbox && scope.selectConfig.filter && scope.selectConfig.separate) || scope.selectConfig.checkbox) {
                        // ele.find(".select-content>input[type='text']").focus();
                    }

                }

                scope.clear = function () {
                    scope.selectConfig.value = '';
                    if (typeof (attrs.getVal) != 'undefined') {
                        scope.getVal = '';
                    }
                    scope.selectConfig.label = '';
                    scope.selectConfig.checkRows = [];
                    ele.find(".select-show").val('');
                    ele.find(".select-show").attr('title', '');
                    scope.selectConfig.setValue = '';
                    scope.selectConfig.clearAll();
                    scope.selectConfig.checkRowsMap = {};
                }

                angular.element(document).off("click");
                angular.element(document).on("click", function (e) {
                    if ((typeof e.target.className) == 'string' && e.target.className.indexOf("select-content") == -1 &&
                        e.target.className.indexOf("select-show") == -1
                        //    && angular.element(e.target).parents(".common-select-container").length == 0
                    ) {
                        // $(".select-content").hide();
                        angular.element(ele[0].children[0].children[1]).css('display', 'none');
                    }
                });

                scope.changeIpt = function () {
                    if (scope.selectConfig.inputLabel == "") {
                        if (xueUtilLang.isFunction(scope.selectConfig.clearAll)) {
                            scope.selectConfig.value = '';
                            if (typeof (attrs.getVal) != 'undefined') {
                                scope.getVal = '';
                            }
                            scope.selectConfig.label = '';
                            scope.selectConfig.checkRows = [];
                            scope.selectConfig.clearAll();
                        }
                    }
                }

                //单选
                scope.selectSingle = function (row) {
                    if (!scope.selectConfig.checkRowsMap[row[scope.selectConfig.valueField]]) {
                        scope.checkOne(row);
                    } else {
                        scope.disCheck(row);
                    }
                }
                scope.disCheck = function (row) {
                    var lastData = [];
                    var lastMapData = {};
                    angular.forEach(scope.selectConfig.checkRows, function (item, index) {
                        if (item[scope.selectConfig.valueField] === row[scope.selectConfig.valueField]) {
                            //scope.selectConfig.checkRows.splice(index,1);
                        } else {
                            lastData.push(item);
                            lastMapData[item[scope.selectConfig.valueField]] = false;
                        }
                    });
                    scope.selectConfig.checkRows = lastData;
                    scope.selectConfig.checkRowsMap = lastMapData;

                }
                scope.checkOne = function (row) {
                    if (!scope.selectConfig.checkRowsMap[row[scope.selectConfig.valueField]]) {
                        scope.selectConfig.checkRows.push(row);
                        scope.selectConfig.checkRowsMap[row[scope.selectConfig.valueField]] = true;
                    }
                }
                scope.test = false;
                //onBeforeSelect by czc
                scope.onBeforeSelect = function (item, event) {
                    var stopSelect = scope.selectConfig.onBeforeSelect(item, scope.ngItem);
                    if (!stopSelect && typeof (stopSelect) != 'undefined') {
                        // ele.find(".select-content").hide();
                        angular.element(ele[0].children[0].children[1]).css('display', 'none');
                        return;
                    }
                    scope.onSelect(item, event);
                }
                //onSelect
                scope.onSelect = function (item, event) {
                    if (scope.selectConfig.checkbox) {
                        if (!item[scope.selectConfig.valueField]) {
                            if (scope.selectConfig.checkLimit) {
                                if (scope.selectConfig.checkLimit == scope.selectConfig.checkRows.length) {
                                    /*  modalExt.modalTip({
                                        content: "最多只能选" + scope.selectConfig.checkLimit + "个选项！",
                                        type: "warning"
                                    }); */
                                    return;
                                }
                            }
                        }
                        scope.selectSingle(item);
                    } else {
                        // ele.find(".select-content").hide();
                        angular.element(ele[0].children[0].children[1]).css('display', 'none');
                        scope.selectConfig.checkRows = [];
                        scope.selectConfig.checkRows.push(item);
                    }
                    scope.getData();
                    if (xueUtilLang.isFunction(scope.selectConfig.onSelect)) {
                        scope.selectConfig.onSelect(item, scope.ngItem);
                    }
                }
                //selectLi
                scope.selectLi = function (item, event) {
                    if ($(event.target)[0].nodeName == "INPUT") {
                        return;
                    }
                    scope.onBeforeSelect(item, event);
                }

                //销毁
                scope.$on("$destroy", function () {
                    assistVar.unbindWatch1();
                    assistVar.unbindWatch2();
                    assistVar.unbindWatch3();
                    assistVar.unbindWatch4();
                    scope.selectConfig = null;
                    angular.element(ele).remove();
                    //    $(ele).remove();
                })
            }
        }
    }])