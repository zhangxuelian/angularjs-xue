angular.module('ui.xue.demo').controller('xueDatepickerdemoCtrl',['$scope',function($scope){
    $scope.test = {
        value: "2020-02-25 14:00:00",
        config: {
            format: "YYYY-MM-DD hh:mm:ss"
        }
    }
    $scope.test1 = {
        value: "2020-02-25",
        minDate: "2020-02-24",
        maxDate: "2020-02-28",
        config: {
            format: "YYYY-MM-DD"
        }
    }
}]);