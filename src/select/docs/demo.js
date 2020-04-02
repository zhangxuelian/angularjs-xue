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
            filter: false,
            separate: true
        },
        flterNoSeparateConfig: {
            data: $scope.data,
            separate: false,
            onSelect: function (item) {
                console.log(item);
            }
        },
        // 单选可过滤不分离
        config1: {
            data: $scope.data,
            filter: true,
            separate: false
        },
        // 单选不可过滤不分离
        config2: {
            data: $scope.data,
            filter: false,
            separate: false
        },
        // 单选不可过滤分离
        config3: {
            data: $scope.data,
            filter: false,
            separate: true
        },
        // 单选可过滤分离
        config4: {
            data: $scope.data,
            filter: true,
            separate: true,
            setValue:'2',
            onSelect: function (item) {
                console.log(item);
            },
            clearAll: function () {
                console.log('清除select');
            }
        },
        // 多选不可过滤不分离
        config5: {
            data: $scope.data,
            filter: false,
            separate: false,
            checkbox:true

        },
        // 多选过滤分离
        config6: {
            data: $scope.data,
            filter: true,
            separate: true,
            checkbox:true
        },
        // 多选可过滤不分离：
        config7: {
            data: $scope.data,
            filter: true,
            separate: false,
            checkbox:true
        },
        // 多选不可过滤分离：
        config8: {
            data: $scope.data,
            filter: false,
            separate: true,
            checkbox:true
        },
        multConfig: {
            filter: true,
            enableEmpty: true,
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
            checkLimit: 2,
            onBeforeSelect: function (item) {
                if (item.value == 5) {
                    return false;
                }
            },
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