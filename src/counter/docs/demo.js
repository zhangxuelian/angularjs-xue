angular.module('ui.xue.demo').controller('xueCounterDemoCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.vm = {
        counterConfig:{
            suffix: "℃",
            max: 300,
            min: 20,
            type:2
        },
        counterConfigLg:{
            suffix: "℃",
            max: 300,
            min: 20,
            size:'large'
            // type:2
        },
        counterConfigSm:{
            suffix: "℃",
            max: 300,
            min: 20,
            size:'small'
            // type:2
        },
        number:20
    }
}]);