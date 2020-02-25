angular.module('ui.xue.demo').controller('xueDatepickerdemoCtrl',['$scope',function($scope){
    $scope.value = "2020-02-25 14:00:00"
    $scope.config = {
        format: "YYYY-MM-DD hh:mm:ss"
    }
}]);