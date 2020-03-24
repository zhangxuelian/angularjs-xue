angular.module('xue.menu', ['xue.util.lang'])
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

    .directive('xueMenu1', ['xueUtilLang', function (xueUtilLang) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            controller: 'xueMenuController',
            controllerAs: 'menuCtrl',
            scope: {
                mode: "@", // 菜单模式 vertical/horizontal 默认vertical
                defaultActive: '=' // 当前选中导航菜单
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/menu/menu1.html'
            },
            link: function (scope, ele, attrs, ctrl) {
                if (typeof scope.defaultActive == 'undefined' && typeof attrs.defaultActive == 'undefined') {
                    // 默认选中第一个
                    ctrl.select();
                }
            }
        }
    }])
    .controller('xueMenuController', ['$scope', '$attrs', 'xueUtilArray', 'xueUtilLang', function ($scope, $attrs, xueUtilArray, xueUtilLang) {
        var menuCtrl = this,
            menuAray = [],
            oldIndex;
        menuCtrl.mode = $attrs.mode || 'vertical';
        $scope.activeIndex = $attrs.defaultActive || null;
        menuCtrl.openedMenus = [];
        menuCtrl.slectSubMenu = function (submenu) {
            submenu.opened = !submenu.opened;
        }
        menuCtrl.openSubMenu = function (submenu, status) {
            submenu.opened = status;
        }
        menuCtrl.select = function (index, menuItem) {
            if (!index) {
                index = menuAray[0];
            }
            if (index == oldIndex) {
                return;
            }
            var oldSelect = menuCtrl.openedMenus[oldIndex];
            if (oldSelect) {
                oldSelect.active = false;
            }
            var selected = menuCtrl.openedMenus[index];
            if (selected) {
                if (xueUtilLang.isFunction(selected.onSelect)) {
                    selected.onSelect({
                        $selectedIndex: index,
                        $selected: selected
                    });
                }
                selected.active = true;
                oldIndex = index;
                $scope.activeIndex = index;
            }
        }
        menuCtrl.closeMenu = function () {
            for (var i in menuCtrl.openedMenus) {
                menuCtrl.openedMenus[i].opened = false;
            }
        }
        menuCtrl.addMenu = function (menu, value) {
            menuAray.push(value);
            menuCtrl.openedMenus[value] = menu;
            if ($attrs.defaultActive) {
                menuCtrl.select($attrs.defaultActive);
            }
        }
    }])
    .directive('xueSubmenu', ['xueUtilLang', 'xueUtilArray', function (xueUtilLang, xueUtilArray) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            require: '^xueMenu1',
            scope: {
                label: '=',
                value: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/menu/submenu.html'
            },
            link: function (scope, element, attrs, ctrl, transclude) {
                scope.mode = ctrl.mode;
                scope.opened = false;
                var timeout;
                scope.slectSubMenu = function (e) {
                    e.stopPropagation();
                    if (ctrl.mode == 'vertical') {
                        ctrl.slectSubMenu(scope);
                    } else {
                        ctrl.openSubMenu(scope, true);
                    }
                }

                scope.mouseenter = function () {
                    if (ctrl.mode == 'vertical') {
                        return;
                    }
                    clearTimeout(timeout);
                    timeout = setTimeout(function () {
                        ctrl.openSubMenu(scope, true);
                    }, 100);
                }
                scope.mouseleave = function () {
                    if (ctrl.mode == 'vertical') {
                        return;
                    }
                    clearTimeout(timeout);
                    timeout = setTimeout(function () {
                        ctrl.openSubMenu(scope, false);
                    }, 100);
                }
                ctrl.addMenu(scope, scope.value);
            }
        }
    }])

    .directive('xueMenuItem', ['xueUtilLang', 'xueUtilArray', function (xueUtilLang, xueUtilArray) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            require: '^xueMenu1',
            scope: {
                label: '=',
                value: '=',
                onSelect: '&select'
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/menu/menuItem.html'
            },
            link: function (scope, ele, attrs, ctrl, transclude) {
                scope.itemClick = function (e) {
                    e.stopPropagation();
                    ctrl.select(scope.value);
                    if (ctrl.mode == 'horizontal') {
                        // var parents = $(e.target).parents('.menu-item');
                        // angular.forEach(parents,function(item){
                        //     $(item).addClass('is-active');
                        // })
                        ctrl.closeMenu();
                    }
                }
                ctrl.addMenu(scope, scope.value);
            }
        }
    }])