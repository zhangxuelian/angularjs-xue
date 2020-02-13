angular.module('xue.pagination.demo').controller('xuePaginationdemoCtrl',['$scope',function($scope){
    $scope.mv = {
        total: 100,
        page: 2,
        maxSize: 7,
        size: 5
    };
}]);