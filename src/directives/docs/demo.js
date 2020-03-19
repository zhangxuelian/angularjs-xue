angular.module('ui.xue.demo').controller('xueDirectivesDemoCtrl', ['$scope', function ($scope) {
    $scope.vm = {
        radioCheck: true,
        checkboxCheck: false,
        checkboxCheck2: false,
        checkboxCheck3: false,
        fruit: '香蕉',
        inputValue: '',
        click: function (value) {
            console.log(value);
        }
    }
}])