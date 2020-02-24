angular.module('xue.tabs', [])
    .directive('xueTabsWrap', [function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {},
            controller: 'tabsWrapCtrl',
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/tabs/tabs_wrap.html';
            },
            link: function () {
                console.log('link')
            }
        }
    }])
    .controller('tabsWrapCtrl', [function () {
        console.log('ctrl');
    }])
    .directive('xueTab', [function () {
        return {
            restrict: 'E',
            require: '^xueTabsWrap',
            replace: true,
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/tabs/tab.html';
            },
            link: function () {

            }
        }
    }])
    .directive('xueTabContent', [function () {
        return {

        }
    }]);