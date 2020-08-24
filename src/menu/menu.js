angular.module('xue.menu', ['xue.util.lang', 'xue.util.object'])
    .directive('xueMenu', ['xueUtilLang', function (xueUtilLang) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                menuConfig: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/menu/menu.html'
            },
            link: function (scope, ele, attrs) {
                var defaultConfig = {
                    search: false, //是否支持搜索
                    autoShrink: true, //是否自动收缩
                    setFirst: true, //是否选中第一个

                    data: [], //源数据,一维数组或二维数组
                    showOneDimenIcon: true, //是否展示一级菜单图标
                    oneDimenName: '', //一级菜单标题字段名
                    oneDimenIcon: '', //一级菜单图标字段名

                    childrenName: '', //二维数组对象名
                    twoDimenName: '', //二级菜单标题字段名
                    twoDimenIcon: '', //二级菜单图标字段名
                    
                    searchProp: 'menuName', //模糊搜索指定的字段名称（默认为menuName）

                    clickRouter: function () {}, //导航菜单点击回调
                    routerId: 'id', //导航菜单ID字段名
                    selectId: null, //选中导航菜单ID
                    imagePrefix: 'imagestore/', //图片前缀
                    imageSuffix: '.jpg' //图片后缀
                };
                scope.menuConfig = angular.extend(defaultConfig, scope.menuConfig || {});

                //支持搜索菜单
                if (scope.menuConfig.search) {
                    scope.vm = {
                        searchValue: '',
                        menuList: [],
                        //当前鼠标是否在搜索列表上
                        onSearchListDiv: false,
                        select: function (item) {
                            this.searchValue = '';
                            scope.clickRouter(item);
                        },
                        formatData: function (data) {
                            var list = [];
                            for (var i = 0; i < data.length; i++) {
                                list.push(data[i]);
                                if (data[i][scope.menuConfig.childrenName]) {
                                    var childrenData = data[i][scope.menuConfig.childrenName];
                                    for (var j = 0; j < childrenData.length; j++) {
                                        list.push(childrenData[j]);
                                    }
                                }
                            }
                            this.menuList = list;
                        },
                        /**
                         * 隐藏搜索框
                         */
                        hideSearchBox: function () {
                            //当鼠标的焦点不在搜索框里面时，失去焦点才去隐藏
                            if (!this.onSearchListDiv) {
                                this.searchValue = '';
                            }
                        }
                    };

                }

                //导航菜单点击回调
                scope.clickRouter = function (item) {
                    if (!item[scope.menuConfig.childrenName]) {
                        scope.menuConfig.selectId = item[scope.menuConfig.routerId];
                        if (xueUtilLang.isFunction(scope.menuConfig.clickRouter)) {
                            scope.menuConfig.clickRouter(item);
                        }
                    } else {
                        var open = item.open;
                        if (scope.menuConfig.autoShrink) {
                            angular.forEach(scope.menuConfig.data, function (obj, i) {
                                obj.open = false;
                            });
                        }
                        if (open) {
                            item.open = false;
                        } else {
                            item.open = true;
                        }
                    }
                }

                //设置数据
                var dataWatch = scope.$watch("menuConfig.data", function (newVal, oldVal) {
                    if (newVal) {
                        if (scope.menuConfig.setFirst && scope.menuConfig.data.length) {
                            var item = scope.menuConfig.data[0];
                            scope.clickRouter(item);
                            if (item[scope.menuConfig.childrenName] && item[scope.menuConfig.childrenName].length) {
                                scope.menuConfig.clickRouter(item[scope.menuConfig.childrenName][0]);
                                scope.menuConfig.selectId = item[scope.menuConfig.childrenName][0][scope.menuConfig.routerId];
                                item.open = true;
                            }
                        }
                        if (scope.menuConfig.search) {
                            scope.vm.formatData(newVal);
                        }
                    }
                })

                //设置选中id
                var idWatch = scope.$watch('menuConfig.selectId', function (newVal, oldVal) {
                    var data = scope.menuConfig.data;
                    if (newVal && data) {
                        for (var i = 0; i < data.length; i++) {
                            if (newVal == data[i][scope.menuConfig.routerId]) {
                                break;
                            }
                            if (data[i][scope.menuConfig.childrenName]) {
                                var childrenData = data[i][scope.menuConfig.childrenName];
                                for (var j = 0; j < childrenData.length; j++) {
                                    if (childrenData[j][scope.menuConfig.routerId] == newVal) {
                                        if (scope.menuConfig.autoShrink) {
                                            angular.forEach(data, function (obj) {
                                                obj.open = false;
                                            });
                                        }
                                        data[i].open = true;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                })

                scope.$on("$destroy", function () {
                    dataWatch();
                    idWatch();
                })

            }
        }
    }])

    .directive('xueMenu2', ['xueUtilLang', '$timeout', 'xueUtilObject', function (xueUtilLang, $timeout, xueUtilObject) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                menuConfig: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/menu/menu2.html'
            },
            link: function (scope, ele, attrs) {
                var defaultConfig = {
                    mode: 'vertical', // 菜单模式 vertical/horizontal
                    data: [{
                        id: '1',
                        menuName: '菜单1',
                        iconName: ''
                    }], // 菜单数组
                    uniqueOpened: true, // 是否只打开一个子菜单
                    setFirst: true, //是否选中第一个
                    selectId: null, // 当前选中导航菜单ID
                    menuId: 'id', //导航菜单唯一标识字段名称
                    childrenName: 'subMenus', // 子菜单名称
                    menuName: 'menuName', // 菜单字段名
                    clickRouter: function () {}
                }
                scope.menuConfig = angular.extend(defaultConfig, scope.menuConfig || {});
                //支持搜索菜单
                if (scope.menuConfig.search) {
                    scope.vm = {
                        searchValue: '',
                        menuList: [],
                        //当前鼠标是否在搜索列表上
                        onSearchListDiv: false,
                        select: function (item) {
                            this.searchValue = '';
                            scope.clickRouter(item);
                        },
                        formatData: function (data) {
                            for (var i = 0; i < data.length; i++) {
                                this.menuList.push(data[i]);
                                if (data[i][scope.menuConfig.childrenName]) {
                                    scope.vm.formatData(data[i][scope.menuConfig.childrenName]);
                                }

                            }
                        },
                        /**
                         * 隐藏搜索框
                         */
                        hideSearchBox: function () {
                            //当鼠标的焦点不在搜索框里面时，失去焦点才去隐藏
                            if (!this.onSearchListDiv) {
                                this.searchValue = '';
                            }
                        }
                    };
                }
                scope.clickRouter = function (item) {
                    if (!item.subMenus) {
                        scope.menuConfig.selectId = item[scope.menuConfig.menuId];
                        if (xueUtilLang.isFunction(scope.menuConfig.clickRouter)) {
                            scope.menuConfig.clickRouter(item);
                        }
                        if (scope.menuConfig.mode == 'horizontal') {
                            angular.forEach(scope.menuConfig.data, function (obj) {
                                obj.open = false;
                            });

                        }
                    } else {
                        var open = item.open;
                        if (scope.menuConfig.mode == 'horizontal') {
                            item.open = true;
                            return;
                        }

                        if (scope.menuConfig.uniqueOpened) {
                            var data = scope.menuConfig.data;
                            var pathArr = xueUtilObject.searchKeys(data, item[scope.menuConfig.menuId]);
                            if (pathArr.length < 3) {
                                angular.forEach(data, function (obj) {
                                    obj.open = false;
                                });
                            }
                            item.open = !open;
                        } else {
                            item.open = !open;
                        }
                    }
                }
                //设置数据
                var dataWatch = scope.$watch("menuConfig.data", function (newVal, oldVal) {
                    if (newVal) {
                        if (scope.menuConfig.setFirst && scope.menuConfig.data.length) {
                            var item = scope.menuConfig.data[0];
                            scope.clickRouter(item);
                            if (item[scope.menuConfig.childrenName] && item[scope.menuConfig.childrenName].length) {
                                scope.menuConfig.clickRouter(item[scope.menuConfig.childrenName][0]);
                                scope.menuConfig.selectId = item[scope.menuConfig.childrenName][0][scope.menuConfig.menuId];
                                item.open = true;
                                if (scope.menuConfig.mode == 'horizontal') {
                                    item.open = false;
                                }
                            }
                        }
                        if (scope.menuConfig.search) {
                            scope.vm.formatData(newVal);
                        }
                    }
                })
                //设置选中id
                var idWatch = scope.$watch('menuConfig.selectId', function (newVal, oldVal) {
                    var data = scope.menuConfig.data;
                    if (newVal && data) {
                        if (scope.menuConfig.uniqueOpened && scope.menuConfig.mode == 'vertical') {
                            angular.forEach(data, function (obj) {
                                obj.open = false;
                            });
                            scope.selectIndex(newVal, true);
                        }
                        if (scope.menuConfig.mode == 'horizontal') {
                            if (oldVal) {
                                scope.selectIndex(oldVal, false);
                            }
                            scope.selectIndex(newVal, true);
                        }
                    }
                })
                scope.selectIndex = function (menuId, status) {
                    var data = scope.menuConfig.data;
                    var index = xueUtilObject.searchKeys(data, menuId); // 选中路径数组
                    var n = 0;
                    while (index.length > 2 * n) {
                        var pathArr = index.slice(0, 2 * n + 1);
                        if (scope.menuConfig.mode == 'horizontal') {
                            xueUtilObject.findValByPath(data, pathArr).active = status;
                        } else {
                            xueUtilObject.findValByPath(data, pathArr).open = status;
                        }
                        n++;
                    }
                }
                scope.mouseEvt = function (item, status) {
                    item.open = status;

                }
                scope.$on("$destroy", function () {
                    dataWatch();
                    idWatch();
                })
            }
        }

    }])
    // 支持传入动态对象属性keyName，进行模糊匹配，返回筛选后的列表数据
    .filter('filterList',function(){         
        return function(collection, keyName, value){
            var output = [];
            angular.forEach(collection, function (item) {
                if(item[keyName] && item[keyName].indexOf(value) != -1){
                    output.push(item);
                }
            })
            return output;
        };
    })