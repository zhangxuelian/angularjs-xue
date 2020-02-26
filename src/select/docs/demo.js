angular.module('ui.xue.demo').controller('xueSelectdemoCtrl', ['$scope', function ($scope) {
    $scope.data = [{
        label: "身份证",
        value: "1"
    }, {
        label: "护照",
        value: "2"
    }, {
        label: "居住证",
        value: "3"
    }, {
        label: "驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证",
        value: "4"
    }]
    $scope.mv = {
        testConfig: {
            data: $scope.data,
            panelHeight: 'auto',
            panelWidth: '180px',
            onSelect: function (item) {
                console.log(item);
            },
            clearAll: function () {
                console.log('清除select');
            }
        },
        noFilterConfig: {
            data: $scope.data,
            filter: false
        },
        flterNoSeparateConfig: {
            data: $scope.data,
            separate: false,
            onSelect: function (item) {
                console.log(item);
            }
        },
        multConfig: {
            data: [{
                name: "全部",
                value: "1"
            }, {
                name: "小孩",
                value: "2"
            }, {
                name: "青年",
                value: "3"
            }, {
                name: "中年",
                value: "4"
            }, {
                name: "老人",
                value: "5"
            }],
            checkbox: true,
            valueField: 'value',
            textField: 'name',
            panelHeight: '150px',
            panelWidth: '180px',
            onSelect: function (item) {
                console.log($scope.mv.multConfig.checkRows);
            }
        },
        multFilterConfig: {
            data: $scope.data,
            checkbox: true,
            filter: false
        }
    };
}]);