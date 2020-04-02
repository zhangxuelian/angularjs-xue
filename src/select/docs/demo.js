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
    $scope.vm = {
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
        // 单选可过滤分离
        config4: {
            data: $scope.data,
            filter: true,
            separate: true,
            // setValue:'2',
            onSelect: function (item) {
                console.log(item);
                // $scope.vm.config10.setValue = item.value;
            },
            clearAll: function () {
                console.log('清除select');
            },
            assign: function (item) {
                // console.log(item);
            }
        },
        // 多选不可过滤不分离
        config5: {
            data: $scope.data,
            filter: false,
            separate: false,
            checkbox: true

        },
        // 多选过滤分离
        config6: {
            data: $scope.data,
            filter: true,
            separate: true,
            checkbox: true
        },
        // 多选可过滤不分离：
        config7: {
            data: $scope.data,
            filter: false,
            checkbox: true
        },
        config9: {
            data: []
        },
        config8: {
            data: $scope.data,
            textField: 'name1',
            textFieldFormat:function(item){
                return item.label + '( '+ item.value+')';
            }
        },
        config10: {
            enableEmpty: false,
            filter:false,
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
            checkRows:[],
            valueField: 'value',
            textField: 'name1',
            panelHeight: '150px',
            panelWidth: '180px',
            textFieldFormat:function(item){
                return item.name + '(自定义)'+ item.value;
            },
            onBeforeSelect: function (item) {
                if (item.value == 5) {
                    return false;
                }
            },
            onSelect: function (item) {
                console.log(item)
                // console.log($scope.vm.config10.checkRows);
            }
        }
    };
}]);