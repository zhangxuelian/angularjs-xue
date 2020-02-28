angular.module('ui.xue.demo').controller('xueDirectivesDemoCtrl', ['$scope', function ($scope) {
    $scope.vm = {
        ischeck: true,
        approvalStatus: '',
        toggleConfig: {
            disabled: false,
            onSelect: function (flag) {
                console.log(flag);
            }
        },
        isOpen:true
    }
}])