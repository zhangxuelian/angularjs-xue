angular.module('ui.xue.demo').controller('xueDirectivesDemoCtrl', ['$scope', function ($scope) {
    $scope.vm = {
        ischeck: true,
        approvalStatus: '',
        toggleConfig: {
            onSelect: function (flag) {
                $scope.vm.isOpen=!flag;
            }
        },
        isOpen:true,
        inputValue:''
    }
}])