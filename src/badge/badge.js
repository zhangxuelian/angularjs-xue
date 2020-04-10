angular.module('xue.badge', [])
    .directive('xueBadge', [function () {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            scope: {
                isAlone: '=',
                count: '=',
                max: '=',
                isDot: '='
            },
            template: "<div class='xue-badge-wrap'>" +
                "<div ng-transclude ng-if='!isAlone'></div>" +
                "<div ng-show=\"count\" class=\"xui-badge-container\" ng-class=\"{'dot':isDot,'alone':isAlone}\" ng-style=\"setStyle\">\n" +
                "<span>{{isDot?'':(count>max1?max1+'+':count)}}</span>\n" +
                "</div>" +
                '</div>',
            link: function (scope, ele, attrs) {
                scope.max1 = scope.max || 99;
                scope.setStyle = {
                    background: attrs.bgColor
                };
            }
        }
    }])