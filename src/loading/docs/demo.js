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
            loadingTypeClass: 'ball-pulse-sync',
            msg: "加载中,请稍候..."
        },
        loadingConfig4: {
            isShowLoading: true,
            loadingTypeClass: 'line-spin-clockwise',
            msg: "加载中,请稍候..."
        },
        loadingConfig5: {
            isShowLoading: true,
            theme: 'dark-theme',
            loadingTypeClass: 'ball-clip-rotate',
            msg: "加载中,请稍候..."
        },
        loadingConfig6: {
            isShowLoading: true,
            theme: 'dark-theme',
            loadingTypeClass: 'ball-spin-clockwise',
            msg: "加载中,请稍候..."
        },
        loadingConfig7: {
            isShowLoading: true,
            loadIcon:'xui-icon xui-icon-ios-refresh',
            loadingTypeClass: null,
            msg: "拼命加载中..."
        },
        stop: function () {
            vm.loadingConfig.isShowLoading = false;
            vm.loadingConfig2.isShowLoading = false;
            vm.loadingConfig3.isShowLoading = false;
            vm.loadingConfig4.isShowLoading = false;
            vm.loadingConfig5.isShowLoading = false;
            vm.loadingConfig6.isShowLoading = false;
            vm.loadingConfig7.isShowLoading = false;
        }
    }
}])