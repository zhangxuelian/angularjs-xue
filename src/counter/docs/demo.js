angular.module('ui.xue.demo').controller('xueCounterDemoCtrl', ['$scope', function ($scope) {
    $scope.vm = {
        counterConfig:{
            suffix: "℃",
            max: 300,
            min: 0,
            type:2
        },
        counterConfigLg:{
            suffix: "℃",
            max: 300,
            min: 0,
            size:'large'
        },
        counterConfigSm:{
            suffix: "℃",
            max: 300,
            min: 20,
            size:'small'
        },
        number1:20,
        number2:20,
        number3:20
    }
}]);