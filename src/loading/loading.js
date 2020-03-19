angular.module('xue.loading', [])
    .directive('xueLoading', ['$compile', function ($compile) {
        return {
            restrict: "A",
            scope: {
                loadingConfig: '=xueLoading'
            },
            link: function (scope, ele, attrs) {

                var loadingConfig = {
                    isShowLoading: false, // false 不显示加载窗
                    theme: 'default-theme', // 'default-theme','dark-theme'
                    msg: '加载中,请稍候...', // 加载中需展示的文字，如：'加载中……'
                    className: '', // 自定义样式类名
                    loadIcon: '', // 自定义loading图标
                    loadingTypeClass: 'ball-circus', // 'ball-circus','square-jelly-box','ball-spin-clockwise'
                    // 'line-spin-clockwise','ball-clip-rotate','ball-pulse-sync'
                    itemArr: null, //不同加载样式所需的dom数不同。
                    zIndex: 99
                };
                scope.loadingConfig = angular.extend(loadingConfig, scope.loadingConfig);
                var renderObj = {
                    template: '<div class="loading-shade" ng-class="loadingConfig.className" ng-style="{\'z-index\':loadingConfig.zIndex}"\
                        ng-if="loadingConfig.isShowLoading">\
                        <div class="loading-content" ng-class="loadingConfig.theme">\
                            <div class="loading-container" ng-class="loadingConfig.loadingTypeClass" ng-if="!loadingConfig.loadIcon">\
                                <div class="loading-item" ng-repeat="x in loadingConfig.itemArr track by $index"></div>\
                            </div>\
                            <div class="loading-container" ng-if="loadingConfig.loadIcon" ng-class="loadingConfig.loadIcon"></div>\
                            <div class="loading-text">{{loadingConfig.msg}}</div>\
                        </div>\
                    </div>',
                    // 不同的加载样式，需要的dom节点数不一样
                    createArrByLen: function () {
                        var loadingItemMap = {
                            'ball-circus': 5,
                            'square-jelly-box': 2,
                            'ball-pulse-sync': 3,
                            'ball-spin-clockwise': 8,
                            'line-spin-clockwise': 8,
                            'ball-clip-rotate': 1
                        };
                        var len = loadingItemMap[scope.loadingConfig.loadingTypeClass];
                        var arr = [],
                            i = len;
                        while (i--) {
                            arr[i] = 0;
                        }
                        scope.loadingConfig.itemArr = arr;
                    },
                    appendHtml: function () {
                        var dom = $(renderObj.template);
                        var render = $compile(dom)(scope);
                        ele.append(render);
                    }
                };
                renderObj.createArrByLen();
                renderObj.appendHtml();
                //销毁
                scope.$on("$destroy", function () {})
            }
        }
    }])