angular.module('ui.xue.demo').controller('xueSelectdemoCtrl',['$scope',function($scope){
    $scope.mv = {
        testConfig:{
            data: [{
                name: "身份证",
                value: "1"
            }, {
                name: "护照",
                value: "2"
            }, {
                name: "居住证",
                value: "3"
            }, {
                name: "驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证",
                value: "4"
            }],
            valueField: 'value',
            textField: 'name',
            panelHeight: 'auto',
            panelWidth: '180px'
        },
        emptyConfig:{
            data:[],
            panelHeight: '250px',
            panelWidth: '180px'
        }
    };
}]);
