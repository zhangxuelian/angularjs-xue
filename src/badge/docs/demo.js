angular.module('ui.xue.demo').controller('xueBadgeDemoCtrl', ['$scope', function ($scope) {
    var vm = $scope.vm = {
        config: {
            count: 12
        },
        config2: {
            count: 8,
            bgColor: '#0394F9'
        },
        config3: {
            count: 12,
            max: 10,
            bgColor: '#ff492a'
        },
        config4: {
            count: 14,
            isAlone: true
        },
        dotConfig:{
            isDot:true,
            count:10
        }
    }
}])