angular.module('ui.xue.demo').controller('xueLoadingDemoCtrl', ['$scope', function ($scope) {
    var vm = $scope.vm = {
        loadingConfig: {
            isShowLoading: true,
            msg: "加载中,请稍候..."
        }
    }
}])