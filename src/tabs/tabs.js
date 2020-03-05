angular.module('xue.tabs', ['xue.util.array'])
    .directive('xueTabsWrap', [function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                type: "@", // card/border-card(default:null)
                tabPosition: "=", // top/right/bottom/left(default:top)
                ngModel: "=",
                tabConfig: "="
            },
            controller: 'tabsWrapCtrl',
            controllerAs: 'twCtrl',
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/tabs/tabs_wrap.html';
            },
            link: function (scope, ele, attrs, ctrl) {
                if(typeof scope.ngModel == 'undefined' && typeof attrs.ngModel == 'undefined'){
                    ctrl.select(0);
                }
            }
        }
    }])
    .controller('tabsWrapCtrl', ['$scope', 'xueUtilArray', function ($scope, xueUtilArray) {
        var ctrl = this, oldIndex, destroyed;
        ctrl.tabs = [];
        $scope.index = 0,
        ctrl.select = function (index, evt) {
            if (destroyed) {
                return;
            }
            if (index == oldIndex) {
                return;
            }
            var previousSelected = ctrl.tabs[oldIndex];
            if (previousSelected) {

                /* previousSelected.onDeselect({
                    $event: evt,
                    $selectedIndex: index
                }); */
                if (evt && evt.isDefaultPrevented()) {
                    return;
                }
                previousSelected.active = false;
            }

            var selected = ctrl.tabs[index];
            if (selected) {
                /* selected.tab.onSelect({
                    $event: evt
                }); */
                selected.active = true;
                oldIndex = index;
                $scope.index = index;
            } else if (!selected && angular.isDefined(oldIndex)) {
                oldIndex = null;
            }
        };

        ctrl.addTab = function (tab) {
            ctrl.tabs.push(tab);
            if ($scope.ngModel) {
                var index = xueUtilArray.findObjIndex(ctrl.tabs, 'value', $scope.ngModel);
                ctrl.select(index);
            }
        };

        ctrl.isTabHead = function (node) {
            return node.tagName && node.hasAttribute('slot') && node.attributes["slot"].nodeValue == "label";
        }

        $scope.$on('$destroy', function () {
            destroyed = true;
        });

        $scope.$watch('ngModel', function (oldVal, newVal) {
            if (newVal) {
                var index = xueUtilArray.findObjIndex(ctrl.tabs, 'value', newVal);
                ctrl.select(index);
            }
        });

    }])
    .directive('xueTab', [function () {
        return {
            restrict: 'E',
            require: '^xueTabsWrap',
            replace: true,
            transclude: true,
            scope: {
                label: '=',
                value: '=',
                disabled: '=',
                closable: '=',
                onSelect: '&select',
                onDeselect: '&deselect'
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/tabs/tab.html';
            },
            link: function (scope, ele, attrs, ctrl, transclude) {
                scope.select = function (evt) {
                    if (!scope.disabled) {
                        var index;
                        for (var i = 0; i < ctrl.tabs.length; i++) {
                            if (ctrl.tabs[i] === scope) {
                                index = i;
                                break;
                            }
                        }
                        ctrl.select(index, evt);
                    }
                };
                scope.$transcludeFn = transclude;
                ctrl.addTab(scope);
            }
        }
    }])
    .directive('xueTabContent', [function () {
        return {
            restrict: 'A',
            require: '^xueTabsWrap',
            link: function (scope, elm, attrs, ctrl) {
                var tab = scope.$eval(attrs.xueTabContent);
                tab.$transcludeFn(tab.$parent, function (contents) {
                    angular.forEach(contents, function (node) {
                        if (ctrl.isTabHead(node)) {
                            tab.headElement = node;
                        } else {
                            elm.append(node);
                        }
                    });
                });
            }
        }
    }])
    .directive('xueTabHead', [function () {
        return {
            restrict: 'A',
            require: '^xueTabsWrap',
            link: function (scope, elm) {
                scope.$watch('headElement', function (heading, c) {
                    if (heading) {
                        elm.html('');
                        elm.append(heading);
                    }
                });
            }
        }
    }]);