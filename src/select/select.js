angular.module('xue.select', ['xue.util.array', 'xue.util.lang'])

    .directive('xueSelect1', ['xueUtilArray', 'xueUtilLang', function (xueUtilArray, xueUtilLang) {
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
                return attrs.templateUrl || "xue/template/select/select_back.html";
            },
            link: function (scope, ele, attrs) {
                var assistVar = {
                    unbindWatch1: null,
                    unbindWatch2: null,
                    unbindWatch3: null,
                    unbindWatch4: null
                };
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
                ele = $(attrs.$$element);

                //get label and value from checkRows
                scope.getData = function () {
                    var label = "",
                        value = "";
                    if (scope.selectConfig.checkRows.length != 0) {
                        scope.selectConfig.checkRowsMap = {};
                        $.each(scope.selectConfig.checkRows, function (i, item) {
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
                    ele.find(".select-show").val(label);
                    ele.find(".select-show").attr("title", label);
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
                            var rows = xueUtilArray.findInArrByKeys(scope.selectConfig.data, scope.selectConfig.valueField, valueArr) || [];
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
                    $(".select-content").hide();
                    if (ele.find(".select-content").is(":hidden")) {
                        ele.find(".select-content").show();
                        //单选可过滤且分离
                        if ((!scope.selectConfig.checkbox && scope.selectConfig.filter && scope.selectConfig.separate) || scope.selectConfig.checkbox) {
                            ele.find(".select-content>input[type='text']").focus();
                        }
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

                $(document).off("click");
                $(document).on("click", function (e) {
                    if ((typeof e.target.className) == 'string' && e.target.className.indexOf("select-content") == -1 &&
                        e.target.className.indexOf("select-show") == -1 &&
                        $(e.target).parents(".xui-select-wrap1").length == 0
                    ) {
                        $(".select-content").hide();
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
                //    scope.test = false;
                scope.onBeforeSelect = function (item, event) {
                    var stopSelect = scope.selectConfig.onBeforeSelect(item, scope.ngItem);
                    if (!stopSelect && typeof (stopSelect) != 'undefined') {
                        ele.find(".select-content").hide();
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
                                    //    modalExt.modalTip({content:"最多只能选"+scope.selectConfig.checkLimit+"个选项！",type:"warning"});
                                    return;
                                }
                            }
                        }
                        scope.selectSingle(item);
                    } else {
                        ele.find(".select-content").hide();
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
                    $(ele).remove();
                })
            }
        }
    }])
    .directive('xueSelect', ['xueUtilArray', 'xueUtilLang', function (xueUtilArray, xueUtilLang) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                selectConfig: '=',
                ngItem: '=',
                ngDisabled: '=',
                setVal: '=',
                getVal: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || "xue/template/select/select.html";
            },
            link: function (scope, ele, attrs) {
                var selectCtrl = scope.selectCtrl = {
                    selectClass: "",
                    iptStyle: {},
                    contentStyle: {},
                    defaultConfig: {
                        height: '28px', //输入框高度
                        panelHeight: '250px', //面板高度
                        panelWidth: '180px', //面板以及输入框宽度
                        showLimit: 50, //匹配前n条记录
                        data: [], //select数据源（数组）
                        filter: true, //过滤器开关 为false时与select标签功能一致
                        separate: true, //输入与过滤分离 为false时输入与过滤合并为一体 filter为false时，该设置不生效
                        checkbox: false, //多选开关
                        enableEmpty: true, //是否可以置空
                        valueField: 'value', //对应选项value值
                        textField: 'label', //显示在输入框中的字段名
                        textFieldFormat: function () {}, //自定义显示在输入框中的内容
                        inputLabel: "", //输入框双向绑定内容
                        myLabel: "", // 过滤框双向绑定值
                        setValue: '', //设置值
                        checkRows: [], //选中数组Row
                        checkLimit: null, //多选 最多选n条记录
                        checkRowsMap: {}, //选中记录map
                        onBeforeSelect: function () {}, // 选择前回调
                        onSelect: function () {}, //选择回调
                        assign: function () {}, //赋值回调
                        clearAll: function () {}, //清空回调
                        reset: function(){
                            selectCtrl.ev.clear();
                        }
                    },
                    init: function () {
                        var self = this;
                        scope.selectConfig = angular.extend(self.defaultConfig, scope.selectConfig);
                        scope.selectConfig.id = 'xueSelect_' + new Date().getTime() + Math.round(Math.random() * 10000);
                        self.selectClass = attrs.selectClass;
                        self.contentStyle = {
                            width: scope.selectConfig.panelWidth,
                            height: scope.selectConfig.panelHeight
                        };
                        self.iptStyle = {
                            width: scope.selectConfig.panelWidth,
                            height: scope.selectConfig.height
                        }
                        if (scope.setVal) {
                            scope.selectConfig.setValue = scope.setVal;
                        }
                        self.watch.init();
                    },
                    ev: {
                        textFieldFormat: function (item) {
                            if (xueUtilLang.isFunction(scope.selectConfig.textFieldFormat)) {
                                item[scope.selectConfig.textField] = scope.selectConfig.textFieldFormat(item) || item[scope.selectConfig.textField] || "";
                            }
                        },
                        onBeforeSelect: function (item, e) {
                            if (xueUtilLang.isFunction(scope.selectConfig.onBeforeSelect)) {
                                // 回调返回值判断是否继续选择
                                var stopSelect = scope.selectConfig.onBeforeSelect(item, scope.ngItem);
                                if (!stopSelect && typeof (stopSelect) != 'undefined') {
                                    selectCtrl.hidePanel();
                                    return;
                                }
                            }
                            selectCtrl.ev.onSelect(item, e);
                        },
                        onSelect: function (item, e) {
                            // 多选
                            if (scope.selectConfig.checkbox) {
                                if (!scope.selectConfig.checkRowsMap[item[scope.selectConfig.valueField]]) {
                                    selectCtrl.ev.addRow(item);
                                } else {
                                    selectCtrl.ev.discheckRow(item);
                                }
                            } else { // 单选
                                selectCtrl.hidePanel();
                                scope.selectConfig.checkRows = [];
                                scope.selectConfig.checkRows.push(item);
                            }
                            selectCtrl.ev.assignData();
                            if (xueUtilLang.isFunction(scope.selectConfig.onSelect)) {
                                scope.selectConfig.onSelect(item, scope.ngItem);
                            }
                        },
                        addRow: function (item) {
                            if (item[scope.selectConfig.valueField] && scope.selectConfig.checkLimit) {
                                if (scope.selectConfig.checkLimit == scope.selectConfig.checkRows.length) {
                                    console.log('最多只能选' + scope.selectConfig.checkLimit + '个');
                                    return;
                                }
                            }
                            scope.selectConfig.checkRows.push(item);
                            scope.selectConfig.checkRowsMap[item[scope.selectConfig.valueField]] = true;
                        },
                        discheckRow: function (row) {
                            angular.forEach(scope.selectConfig.checkRows, function (item, index) {
                                if (item[scope.selectConfig.valueField] === row[scope.selectConfig.valueField]) {
                                    scope.selectConfig.checkRows.splice(index, 1);
                                }
                            });
                        },
                        assignData: function () {
                            var label = "",
                                value = "";
                            scope.selectConfig.checkRowsMap = {};
                            angular.forEach(scope.selectConfig.checkRows, function (item) {
                                selectCtrl.ev.textFieldFormat(item);
                                label += item[scope.selectConfig.textField] + ",";
                                value += item[scope.selectConfig.valueField] + ",";
                                scope.selectConfig.checkRowsMap[item[scope.selectConfig.valueField]] = true;
                            });
                            if (label) {
                                label = label.substring(0, label.length - 1);
                                value = value.substring(0, value.length - 1);
                            }
                            if (typeof (attrs.getVal) != 'undefined') {
                                scope.getVal = value;
                            }
                            scope.selectConfig.inputLabel = label;
                        },
                        // input为输入框时改变事件
                        changeIpt: function () {
                            if (scope.selectConfig.inputLabel == "") {
                                if (xueUtilLang.isFunction(scope.selectConfig.clearAll)) {
                                    selectCtrl.ev.clear();
                                }
                            }
                        },
                        clear: function () {
                            if (typeof (attrs.getVal) != 'undefined') {
                                scope.getVal = '';
                            }
                            scope.selectConfig.checkRows = [];
                            scope.selectConfig.checkRowsMap = {};
                            scope.selectConfig.inputLabel = '';
                            scope.selectConfig.myLabel = '';
                            scope.selectConfig.setValue = '';
                            if (xueUtilLang.isFunction(scope.selectConfig.clearAll)) {
                                scope.selectConfig.clearAll();
                            }
                        }
                    },
                    watch: {
                        inpuLabelWatcher: null,
                        setValueWatcher: null,
                        init: function () {
                            var self = this;
                            $("body")[0].addEventListener("click", self.clickOtherArea);
                            self.watchInputValue();
                            self.watchSetValue();
                        },
                        // 设置值监听
                        watchSetValue: function () {
                            var self = this;
                            self.setValueWatcher = scope.$watch("selectConfig.data + selectConfig.setValue", function (newVal) {
                                if (scope.selectConfig && typeof (scope.selectConfig.setValue) != 'undefined') {
                                    if (scope.selectConfig.checkbox) { //多选
                                        var valueArr = scope.selectConfig.setValue.split(",");
                                        var rows = xueUtilArray.findInArrByKeys(scope.selectConfig.data, scope.selectConfig.valueField, valueArr) || [];
                                        scope.selectConfig.checkRows = rows;
                                        selectCtrl.ev.assignData();
                                    } else { //单选
                                        var index = xueUtilArray.findObjIndex(scope.selectConfig.data, scope.selectConfig.valueField, scope.selectConfig.setValue);
                                        if (index != -1) {
                                            scope.selectConfig.checkRows = [];
                                            scope.selectConfig.checkRows.push(scope.selectConfig.data[index]);
                                            selectCtrl.ev.assignData();
                                        }
                                    }
                                }
                            },true)
                        },
                        // 双向数据绑定值变化
                        watchInputValue: function () {
                            var self = this;
                            self.inpuLabelWatcher = scope.$watch('selectConfig.inputLabel', function (newValue) {
                                if (scope.selectConfig && xueUtilLang.isFunction(scope.selectConfig.assign) && scope.selectConfig.checkRows.length) {
                                    scope.selectConfig.assign(scope.selectConfig.checkRows);
                                }
                            })
                        },
                        clickOtherArea: function (e) {
                            if ($(e.target).attr("class") != "xui-select-wrap" && $(e.target).parents(".xui-select-wrap").length == 0 &&
                                $(e.target).attr("id") != scope.selectConfig.id && $(e.target).parents("#" + scope.selectConfig.id).length == 0) {
                                selectCtrl.hidePanel();
                            }
                        },
                        destroy: function () {
                            var self = this;
                            $("body")[0].removeEventListener("click", self.clickOtherArea);
                            self.watchInputValue();
                            self.watchSetValue();
                        }
                    },
                    openPanel: function (e) {
                        var self = this;
                        $('.xui-icon-md-arrow-dropdown').removeClass('is-reverse');
                        $(".select-content").hide();
                        self.showPanel(e);
                    },
                    showPanel: function (e) {
                        var panelEle = $('#' + scope.selectConfig.id);
                        $('body').append(panelEle);
                        var top = $(e.target).offset().top,
                            left = $(e.target).offset().left,
                            height = $(e.target).height();
                        var eleHeight = panelEle.outerHeight(),
                            screenHeight = $('body').height();
                        var offsetTop = top + height + 2;
                        if ((screenHeight - offsetTop) < eleHeight && offsetTop > eleHeight) {
                            panelEle.css({
                                'top': top - eleHeight - 2 + 'px',
                                'left': left + 'px'
                            });
                        } else {
                            panelEle.css({
                                'top': offsetTop + 'px',
                                'left': left + 'px'
                            });
                        }
                        panelEle.show();
                        $(ele).find('.xui-icon-md-arrow-dropdown').addClass('is-reverse');
                    },
                    hidePanel: function () {
                        $(ele).find('.xui-icon-md-arrow-dropdown').removeClass('is-reverse');
                        var panelEle = $('#' + scope.selectConfig.id);
                        if (panelEle.is(":hidden")) {
                            return;
                        }
                        panelEle.fadeOut(300);
                    }
                }
                selectCtrl.init();
                scope.$on("$destroy", function () {
                    selectCtrl.watch.destroy();
                    $('#' + scope.selectConfig.id).remove();
                });
            }

        }
    }])