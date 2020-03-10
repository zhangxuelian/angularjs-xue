angular.module('ui.xue.demo').controller('xueModalDemoCtrl', 
    ['$scope', '$xModal',function ($scope, $xModal) {
    console.log($xModal);
    $scope.open = function(){
        var test = $xModal.open({
            templateUrl: 'modal.test.html',
            controller: 'modalTestCtrl'
        });
        test.close(function(ret){
            console.log(ret);
        });
    }
    /* $xModal.open({
        templateUrl: 'app/case_center/case_work/case_work_process/case_record/burner_confirm.tpl.html',
        controller: 'burnerConfirmCtrl',
        resolve: {
            dummy:$couchPotato.resolveDependencies(['app/case_center/case_work/case_work_process/case_record/burner_confirm.ctrl.js'])
        }
    }) */
}]);
angular.module('ui.xue.demo').controller('modalTestCtrl',['$scope',function($scope){
    console.log('xxx');
    $scope.test = "zxl";
    $scope.close = function(){
        $scope.$close({
            a: 'test zxl'
        });
    }
}]);