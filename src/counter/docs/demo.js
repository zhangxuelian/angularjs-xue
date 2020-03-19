angular.module('ui.xue.demo').controller('xueCounterDemoCtrl', ['$scope', function ($scope) {
    var vm = $scope.vm = {
        counterConfig: {
            suffix: "℃",
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
        disabledConfig: {
            disabled: true
        },
        disabledConfig1: {
            type: 2,
            disabled: true
        },
        inputConfig: {
            suffix: "个",
            type: 2,
            size: 'small'
        },
        inputConfig2: {
            suffix: "个",
            type: 2,
            step: 0.5,
            min: 10.0
        },
        inputConfig3: {
            suffix: "个",
            type: 2,
            size: 'large'
        },
        stepConfig: {
            step: 0.05
        },
        stepConfig2: {
            suffix: "个",
            type: 2,
            step: 10
        },
        number: 20
    }
}]);