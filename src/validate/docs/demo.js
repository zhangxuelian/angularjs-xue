angular.module('ui.xue.demo').controller('xueValidateDemoCtrl', ['$scope', function ($scope) {
    $scope.pcIp = '';
    $scope.xueValidConfig = {
        pcIp: {
            requiredTip: "IP地址不能为空",
            regex: "ip",
            errorTip: "请填写正确的IP格式！"
        }
    };
}]);
