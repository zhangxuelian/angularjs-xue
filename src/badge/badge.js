angular.module('xue.badge', [])
    .directive('xueBadge', [function () {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            scope: {
                badgeConfig: '='
            },
            template: "<div class='xue-badge-wrap'>" +
                "<div ng-transclude></div>" +
                "<div ng-show=\"badgeConfig.count\" class=\"xui-badge-container\" ng-class=\"{'dot':badgeConfig.isDot,'alone':badgeConfig.isAlone}\" ng-style=\"{'background-color':badgeConfig.bgColor}\">\n" +
                "<span>{{badgeConfig.isDot?'':(badgeConfig.count>badgeConfig.max?badgeConfig.max+'+':badgeConfig.count)}}</span>\n" +
                "</div>" +
                '</div>',
            link: function (scope, ele, attrs) {
                var defaultConfig = {
                    bgColor: '', // 背景颜色，默认辅助色红色
                    max: 99, //超出显示 99+
                    isDot: false, //是否展示小圆点
                    count: 0, // 显示值
                    isAlone: false //是否单独使用
                }
                scope.badgeConfig = angular.extend(defaultConfig, scope.badgeConfig || {});
            }
        }
    }])