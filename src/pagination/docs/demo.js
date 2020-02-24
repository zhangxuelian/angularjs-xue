angular.module('ui.xue.demo').controller('xuePaginationDemoCtrl',['$scope',function($scope){
    $scope.mv = {
        total: 100,
        page: 2,
        maxSize: 5,
        size: 10
    };
}]);