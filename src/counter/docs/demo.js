angular.module('ui.xue.demo').controller('xueCounterDemoCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.vm = {
        counterConfig:{
            suffix: "℃",
            max: 30,
            min: 0
        },
        number:1
    }
}]);