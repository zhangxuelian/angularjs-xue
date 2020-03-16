angular.module('ui.xue.demo').controller('xueLoadingDemoCtrl', ['$scope', function ($scope) {
    var vm = $scope.vm = {
        loadingConfig: {
            isShowLoading: true,
            msg: "加载中,请稍候..."
        },
        loadingConfig2: {
            isShowLoading: true,
            theme: 'dark-theme',
            loadingTypeClass: 'square-jelly-box',
            msg: "加载中,请稍候..."
        },
        loadingConfig3: {
            isShowLoading: true,
            theme: 'dark-theme',
            loadingTypeClass: 'line-spin-clockwise',
            msg: "加载中,请稍候..."
        },
        stop: function () {
            vm.loadingConfig.isShowLoading = false;
            vm.loadingConfig2.isShowLoading = false;
            vm.loadingConfig3.isShowLoading = false;
        }
    }
}])