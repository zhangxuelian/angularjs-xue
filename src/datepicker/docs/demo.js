angular.module('ui.xue.demo').controller('xueDatepickerdemoCtrl',['$scope',function($scope){
    $scope.test = {
        value: "2020-02-25 14:00:00",
        config: {
            format: "YYYY-MM-DD hh:mm:ss"
        },

        value1: "2020-02-25 14:00:00",
        config1: {
            format: "YYYY-MM-DD hh:mm:ss"
        },
        minDate: "2020-02-24 14:00:00",
        maxDate: "2020-02-28 14:00:00",

        value2: "2020-02-25 14:00:00",
        config2: {
            format: "YYYY-MM-DD hh:mm:ss"
        }
    }
    
    $scope.test1 = {
        value: "2020-02-25",
        config: {
            format: "YYYY-MM-DD"
        },

        value1: "2020-02-25",
        config1: {
            format: "YYYY-MM-DD"
        },
        minDate: "2020-02-24",
        maxDate: "2020-02-28",

        value2: "2020-02-25",
        config2: {
            format: "YYYY-MM-DD"
        }
    }

    $scope.test2 = {
        value: "14:00:00",
        config: {
            format: "hh:mm:ss"
        },

        value1: "14:00:00",
        config1: {
            format: "hh:mm:ss"
        }
    }
}]);