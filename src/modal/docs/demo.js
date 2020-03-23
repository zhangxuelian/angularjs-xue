angular.module('ui.xue.demo').controller('xueModalDemoCtrl', 
    ['$scope', '$xModal',function ($scope, $xModal) {
    $scope.open1 = function(){
        var test = $xModal.open({
            templateUrl: 'modal.test.html',
            controller: 'modalTestCtrl'
        });
        test.close(function(ret){
            console.log(ret);
        });
    }
    $scope.open2 = function(){
        var test = $xModal.open({
            backdrop: false,
            templateUrl: 'modal.test.html',
            controller: 'modalTestCtrl'
        });
    }
    $scope.open3 = function(){
        var test = $xModal.open({
            autoClose: true,
            template: '<div style="height: 250px;width: 100%; line-height: 200px;text-align: center;">这里是自定义template视图</div>',
            controller: 'modalTestCtrl'
        });
    }
    $scope.open4 = function(){
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
}]);
angular.module('ui.xue.demo').controller('modalTestCtrl',['$scope','$modalInstance',function($scope,$modalInstance){
    $scope.content = "这里是modal控制器里的内容！";
    $scope.close = function(){
        $modalInstance.close({
            a: 'test zxl'
        });
    }
}]);