angular.module('ui.xue.demo').controller('xueModalDemoCtrl',
    ['$scope', '$xModal', '$xDialog', function ($scope, $xModal, $xDialog) {
        // 基础模态框
        $scope.open1 = function (type) {
            if (type == 1) {
                var test = $xModal.open({
                    autoClose: true,
                    template: '<div style="height: 250px;width: 100%; line-height: 200px;text-align: center;">这里是自定义template视图</div>',
                    controller: 'modalTestCtrl'
                });
            }
            if (type == 2 || type == 3) {
                var test = $xModal.open({
                    templateUrl: 'modal.test.html',
                    controller: 'modalTestCtrl'
                });
                test.result.then(function (ret) {
                    console.log(ret);
                });
            }
            if (type == 4) {
                var test = $xModal.open({
                    backdrop: false,
                    templateUrl: 'modal.test.html',
                    controller: 'modalTestCtrl'
                });
            }
            if (type == 5) {
                var test = $xModal.open({
                    drag: true,
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
        $scope.open2 = function(type){
            if(type == 1){
                var modalInstance = $xDialog.open({
                    title: "标题",
                    beforeConfirm: function(){
                        console.log('确定前');
                    },
                    confirm: function(){
                        console.log('确定');
                    },
                    beforeCancel: function(){
                        console.log('取消前');
                    },
                    cancel: function(){
                        console.log('取消');
                    },
                    beforeClose: function(){
                        console.log('关闭前');
                    },
                    close: function(){
                        console.log('关闭');
                    },
                    modalParam: {
                        template: '<div style="height: 250px;width: 100%; line-height: 200px;text-align: center;">这里是自定义template视图</div>',
                        controller: 'modalTestCtrl'
                    }
                });

            }
        }
        // 提示框
        $scope.open3 = function(type){

        }
        // 通知框
        $scope.open4 = function(type){

        }
        // 弹出式loading
        $scope.open5 = function(type){

        }
        // 局部式loading
        $scope.open6 = function(type){

        }
    }]);
angular.module('ui.xue.demo').controller('modalTestCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
    $scope.content = "这里是modal控制器里的内容！";
    $scope.close = function () {
        $modalInstance.close({
            a: 'test zxl'
        });
    }
}]);