angular.module('ui.xue.demo').controller('xuePaginationdemoCtrl',['$scope',function($scope){
    $scope.mv = {
        total: 100,
        page: 2,
        maxSize: 5,
        size: 10
    };
    $scope.pageConfig = {
        
    }
}]);