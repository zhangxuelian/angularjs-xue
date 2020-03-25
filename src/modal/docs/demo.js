angular.module('ui.xue.demo').controller('xueModalDemoCtrl',
    ['$scope', '$xModal', '$xDialog', function ($scope, $xModal, $xDialog) {
        // 基础模态框
        $scope.open1 = function (type) {
            if (type == 1) {
                var test = $xModal.open({
                    autoClose: true,
                    template: '<div style="height: 250px;width: 100%; line-height: 200px;text-align: center;">这里是自定义template视图</div>'
                });
            }
            if (type == 2) {
                var modalInstance = $xModal.open({
                    templateUrl: 'modal.test.html',
                    controller: 'modalTestCtrl'
                });
                modalInstance.result.then(function (ret) {
                    console.log("关闭原因：", ret);
                }, function (ret) {
                    console.log("取消原因：", ret);
                });
                modalInstance.closed.then(function (ret) {
                    console.log("关闭弹窗");
                });
                modalInstance.opened.then(function (ret) {
                    console.log("打开弹窗");
                });
                modalInstance.rendered.then(function (ret) {
                    console.log("渲染完成");
                });
            }
            if (type == 3) {
                var test = $xModal.open({
                    backdrop: false,
                    templateUrl: 'modal.test.html',
                    controller: 'modalTestCtrl'
                });
            }
            if (type == 4) {
                var test = $xModal.open({
                    backdrop: false,
                    templateUrl: 'modal.drag.html',
                    controller: 'modalTestCtrl'
                });
            }
            /** example
                https://github.com/stu-salsbury/angular-couch-potato : $couchPotato
                    $xModal.open({
                    templateUrl: '{path}/example.tpl.html',
                    controller: 'exampleCtrl',
                    resolve: {
                        dummy:$couchPotato.resolveDependencies(['{path}/example.ctrl.js'])
                    }
                }) 
            */
        }
        // 基础对话框
        $scope.open2 = function (type) {
            if (type == 1) {
                var modalInstance = $xDialog.open({
                    title: "基础对话框标题",
                    confirmCallback: function () {
                        modalInstance.close();
                    },
                    cancelCallback: function () {
                        modalInstance.dismiss();
                    },
                    closeCallback: function () {
                        modalInstance.dismiss();
                    },
                    modalParam: {
                        template: '<div style="height: 250px;width: 100%; line-height: 200px;text-align: center;">基础对话框</div>'
                    }
                });
            }
            if (type == 2) {
                var modalInstance = $xDialog.open({
                    title: "自定义对话框标题",
                    confirmValue: "确定按钮",
                    cancelValue: "取消按钮",
                    confirmCallback: function () {
                        modalInstance.close({
                            test: '确定参数'
                        });
                    },
                    cancelCallback: function () {
                        modalInstance.dismiss({
                            test: '取消参数'
                        });
                    },
                    closeCallback: function () {
                        modalInstance.dismiss({
                            test: '关闭参数'
                        });
                    },
                    modalParam: {
                        templateUrl: 'dialog.test.html',
                        controller: 'modalTestCtrl'
                    }
                });
                modalInstance.result.then(function (ret) {
                    console.log("关闭原因：", ret);
                }, function (ret) {
                    console.log("取消原因：", ret);
                });
            }
            if (type == 3) {
                var modalInstance = $xDialog.open({
                    title: "自定义对话框标题",
                    cancelValue: "关闭",
                    header: false,
                    footer: true,
                    confirm: false,
                    cancel: true,
                    cancelCallback: function () {
                        modalInstance.dismiss();
                    },
                    modalParam: {
                        templateUrl: 'dialog.test.html',
                        controller: 'modalTestCtrl'
                    }
                });
            }
        }
        // 提示框
        $scope.open3 = function (type) {

        }
        // 通知框
        $scope.open4 = function (type) {

        }
        // 弹出式loading
        $scope.open5 = function (type) {

        }
        // 局部式loading
        $scope.open6 = function (type) {

        }
    }]);
angular.module('ui.xue.demo').controller('modalTestCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
    $scope.content = "这里是modal控制器里的内容！";
    $scope.close = function () {
        $modalInstance.close({
            test: 'close传参对象'
        });
    }
    $scope.cancel = function () {
        $modalInstance.dismiss({
            test: 'dismiss传参对象'
        });
    }
}]);