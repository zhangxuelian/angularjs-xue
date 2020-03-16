angular.module('xue.badge', [])
    .directive('xueBadge', [function () {
        return {
            restrict: "E",
            replace: true,
            scope: {
                badgeConfig: '='
            },
            template: "<div ng-show=\"badgeConfig.count\" class=\"xui-badge-wrap\" ng-class=\"{'dot':badgeConfig.isDot,'alone':badgeConfig.isAlone}\" ng-style=\"{'background-color':badgeConfig.bgColor}\">\n" +
                "   <span>{{badgeConfig.isDot?'':(badgeConfig.count>badgeConfig.max?badgeConfig.max+'+':badgeConfig.count)}}</span>\n" +
                "</div>",
            link: function (scope, ele, attrs) {
                var defaultConfig = {
                    bgColor: '#d92b2f', // 背景颜色，默认红色
                    max: 99, //超出显示 99+
                    isDot: false, //是否展示小圆点
                    count: 0, // 显示值
                    isAlone: false //是否单独使用
                }
                scope.badgeConfig = angular.extend(defaultConfig, scope.badgeConfig || {});
            }
        }
    }])