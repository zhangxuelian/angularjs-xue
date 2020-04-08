angular.module('ui.xue.demo').controller('xueRadioDemoCtrl', ['$scope', function ($scope) {
    $scope.vm = {
        radioCheck: true,
        fruit: '香蕉',
        disCheck:'选中且禁用',
        click: function (value) {
            console.log(value);
        }
    }
}])