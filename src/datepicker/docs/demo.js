angular.module('ui.xue.demo').controller('xueDatepickerdemoCtrl',['$scope',function($scope){
    $scope.test = {
        value: "2020-02-25 14:00:00",
        minDate: "2020-02-24 14:00:00",
        maxDate: "2020-02-28 14:00:00",
        config: {
            format: "YYYY-MM-DD hh:mm:ss"
        }
    }
    $scope.test1 = {
        value: "14:00:00",
        config: {
            format: "hh:mm:ss"
        }
    }
}]);