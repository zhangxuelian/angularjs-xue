angular.module('ui.xue.demo').controller('xueDirectivesDemoCtrl', ['$scope', function ($scope) {
    $scope.vm = {
        ischeck: true,
        fruit: '1',
        inputValue: '',
        click: function (value) {
            console.log(value);
        }
    }
}])