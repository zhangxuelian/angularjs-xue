angular.module('ui.xue.demo').controller('xueCounterDemoCtrl', ['$scope', function ($scope) {
    $scope.vm = {
        counterConfig: {
            suffix: "℃",
            max: 300,
            min: 0,
            type: 2,
            changeCallback: function (value) {
                console.log(value);
            }
        },
        counterConfigLg: {
            suffix: "℃",
            max: 300,
            min: 0,
            size: 'large'
        },
        counterConfigSm: {
            suffix: "℃",
            max: 300,
            min: 20,
            size: 'small'
        },
        number: 20
    }
}]);