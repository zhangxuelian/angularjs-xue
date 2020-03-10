angular.module('ui.xue.demo').controller('xueSwitchDemoCtrl', ['$scope', function ($scope) {
    $scope.vm = {
        toggleConfig: {
            onSelect: function (flag) {
                $scope.vm.isOpen = !flag;
            }
        },
        isOpen: true
    }
}])