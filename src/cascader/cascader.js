angular.module('xue.cascader', ['xue.util.lang', 'xue.util.array'])
    .directive('xueCascader', ["$http", "$q", 'xueUtilLang', 'xueUtilArray', function ($http, $q, xueUtilLang, xueUtilArray) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                cascaderConfig: '=',
                ngVal: '=',
                ngDisabled: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/cascader/cascader.html';
            },
            link: function (scope, ele, attrs) {
                var cascaderCtrl = scope.cascaderCtrl = {
                    areaUrl: 'assets/data/city.min.js',
                    defaultConfig: {
                        data: [],
                        dataMap: {},
                        type: '', // 级联框自定义类型 area: 地区选择框
                        valueField: 'value', // 对应选项value值
                        textField : 'label', // 显示在输入框中的字段名
                        childName: 'children', // 选择框子列表字段名
                        css: { // 自定义样式
                            inputClassName: '', // 输入框样式类名
                            inputStyle: {}, // 输入框样式
                            panelClassName: '', // 选择框单列样式类名
                            panelStyle: {} // 选择框单列样式
                        },
                        onSelect: function(){} //选择回调
                    },
                    // 选择框列数据数组
                    selectList: [],
                    // 自定义类型 数据加载 异步对象
                    delay: null,
                    // 配置初始化
                    init: function () {
                        var self = this;
                        scope.cascaderConfig = angular.extend(self.defaultConfig, scope.cascaderConfig || {});
                        // 是否使用自定义类型
                        if (scope.cascaderConfig.type) {
                            self.delay = $q.defer();
                            $http.get(self[scope.cascaderConfig.type + 'Url']).success(function(data) {
                                self.initData(data, 0);
                                return self.delay.resolve(data);
                            });
                        } else {
                            self.initData(scope.cascaderConfig.data, 0);
                        }
                    },
                    // 数据初始化
                    initData: function (data, depth) {
                        var self = this;
                        self.selectList[depth] = [];
                        angular.forEach(data, function(item) {
                            item.depth = depth; // 层级
                            scope.cascaderConfig.dataMap[item[scope.cascaderConfig.valueField]] = item;
                            // 子列表递归处理
                            if (item[scope.cascaderConfig.childName] && item[scope.cascaderConfig.childName].length) {
                                self.initData(item[scope.cascaderConfig.childName], depth + 1);    
                            } else {
                                // 叶子项
                                item.isLeaf = true;
                            }
                        })
                        // 根列表赋值
                        if (depth === 0) {
                            scope.cascaderConfig.data = self.selectList[0] = data;
                        }
                    },
                    // 根据selectValue获取列表数据
                    getData: function (data, index) {
                        var self = this;
                        var valueIndex = xueUtilArray.findObjIndex(data, scope.cascaderConfig.valueField, self.selectValue[index])
                        // 当前项存在且存在子列表
                        if (valueIndex != -1 && !data[valueIndex].isLeaf) {
                            // 子列表赋值
                            self.selectList[index + 1] = data[valueIndex][scope.cascaderConfig.childName];
                            // 递归处理
                            if (self.selectValue[index + 1]) {
                                self.getData(data[valueIndex][scope.cascaderConfig.childName], index + 1);
                            }
                        }
                    },
                    // 是否展示选择框
                    showSelect: false,
                    // 鼠标位置是否位于选择框上
                    onSelectDiv: false,
                    // 点击不位于选择框的区域隐藏选择框
                    hideSelect: function () {
                        if (!cascaderCtrl.onSelectDiv) {
                            cascaderCtrl.showSelect = false;
                            cascaderCtrl.resumeValue();
                        }
                    },
                    // 展开/收缩 选择框
                    toggleSelect: function(event) {
                        var self = this;
                        self.showSelect = !self.showSelect;
                        if (!self.showSelect) {
                            self.resumeValue();
                        }
                        event.stopPropagation();
                    },
                    // 选择框选择项数组
                    selectValue: [],
                    // 单击项
                    clickItem: function (item) {
                        var self = this;
                        // 选择项数组赋值
                        self.selectValue[item.depth] = item[scope.cascaderConfig.valueField];
                        // 单击非叶子项
                        if (!item.isLeaf) {
                            self.selectList[item.depth + 1] = item[scope.cascaderConfig.childName];
                        } else {
                        // 单击叶子项
                            self.selectValue = self.selectValue.slice(0, item.depth + 1);
                            var completeLabel = [];
                            angular.forEach(self.selectValue, function (item) {
                                completeLabel.push(scope.cascaderConfig.dataMap[item][scope.cascaderConfig.textField]);
                            })
                            scope.ngVal = completeLabel.join("/");
                            self.showSelect = false;
                            if (xueUtilLang.isFunction(scope.cascaderConfig.onSelect)){
                                scope.cascaderConfig.onSelect(self.selectValue.join("/"));
                            }
                        }
                    },
                    // 选择框 收缩时 数据恢复
                    resumeValue: function () {
                        var self = this;
                        if (scope.ngVal) {
                            if (self.selectValue.join("/") != scope.ngVal) {
                                self.selectValue = scope.ngVal.split("/");
                                self.getData(scope.cascaderConfig.data, 0);
                            }
                        } else {
                            self.selectValue = [];
                            self.selectList.length = 1;
                        }
                    },
                    // 清除选择项
                    clear: function(event) {
                        var self = this;
                        scope.ngVal = "";
                        self.selectValue = [];
                        self.showSelect = false;
                        self.selectList.length = 1;
                        if (event) {
                            event.stopPropagation();
                        }
                    }
                }

                document.addEventListener('click', cascaderCtrl.hideSelect);
               
                var unbindWatch = scope.$watch("ngVal",function(newValue,oldValue){
                    if (scope.ngVal) {
                        var valueArr = newValue.split("/");
                        angular.forEach(valueArr, function(item, index) {
                            cascaderCtrl.selectValue[index] = item;
                        })
                        if (cascaderCtrl.selectValue.length) {
                            if (scope.cascaderConfig.type) {
                                cascaderCtrl.delay.promise.then(function(data) {
                                    cascaderCtrl.getData(data, 0);    
                                })
                            } else {
                                cascaderCtrl.getData(scope.cascaderConfig.data, 0);
                            }
                        }
                    }
                })

                cascaderCtrl.init();

                scope.$on("$destroy", function() {
                    document.removeEventListener('click', cascaderCtrl.hideSelect);
                    unbindWatch();
                })
            }
        }
    }])