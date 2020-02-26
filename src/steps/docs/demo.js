angular.module('ui.xue.demo').controller('xueStepsDemoCtrl', ['$scope', function ($scope) {
    $scope.value = 1;
    $scope.stepsConfig = {
        theme:'green-theme',
        alignCenter: true,
        options: [{
            title: 'Finished',
            code: 0
        }, {
            title: 'In Progress',
            code: 1
        }, {
            title: 'Waiting',
            code: 2
        }]
    };
}]);