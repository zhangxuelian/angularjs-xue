angular.module('xue.table', ['xue.uitl.lang', 'xue.pagination'])
    .directive('xueTable', ['xueUtilLang', function (xueUtilLang) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                tableConfig: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/table/table.html';
            },
            link: function (scope, ele, attrs) {

            }
        };
    }])