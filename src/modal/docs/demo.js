angular.module('ui.xue.demo').controller('xueModalDemoCtrl', 
    ['$scope', '$xModal',function ($scope, $xModal) {
    console.log($xModal);
    $scope.open = function(){
        $xModal.open({
            templateUrl: 'modal.test.html',
            controller: 'modalTestCtrl'
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
angular.module('ui.xue.demo').controller('modalTestCtrl',[function(){
    console.log('xxx');
}]);