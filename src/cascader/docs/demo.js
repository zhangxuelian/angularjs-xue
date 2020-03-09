angular.module('ui.xue.demo').controller('xueCascaderDemoCtrl',['$scope',function($scope){
    $scope.testValue = "";
    $scope.testConfig = {
        data: [
            {
                label: '节点1',
                value: 1,
                children: [{
                    label: '节点1-1',
                    value: 11,
                    children: [{
                        label: '节点1-1-1',
                        value: 111
                    }]
                }, {
                    label: '节点1-2',
                    value: 12
                }, {
                    label: '节点1-3',
                    value: 13
                }]
            },
            {
                label: '节点2',
                value: 2,
                children: [{
                    label: '节点2-1',
                    value: 21,
                    children: [{
                        label: '节点2-1-1',
                        value: 211
                    }]
                }, {
                    label: '节点2-2',
                    value: 22,
                    children: [{
                        label: '节点2-2-1',
                        value: 221
                    }]
                }, {
                    label: '节点2-3',
                    value: 23
                }]
            },
            {
                label: '节点3',
                value: 3,
                children: [{
                    label: '节点3-1',
                    value: 31,
                    children: [{
                        label: '节点3-1-1',
                        value: 311
                    }]
                }, {
                    label: '节点3-2',
                    value: 32
                }, {
                    label: '节点3-3',
                    value: 33
                }]
            }
        ],
        css: {
            inputStyle: {
                width: '196px',
                height: '28px'
            }
        }
    }

    $scope.areaValue = "";
    $scope.areaConfig = {
        dataUrl: 'assets/data/city.min.js',
        css: {
            inputStyle: {
                width: '196px',
                height: '28px'
            }
        }
    }
}]);