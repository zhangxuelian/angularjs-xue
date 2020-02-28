angular.module('ui.xue.demo').controller('xueScrollerDemoCtrl',['$scope',function($scope){
    $scope.scrollConfig = {
        dataType: 3,
        isAutoPlay: true,
        isLoop: true,
        data: [{
            text: '111'
        },{
            text: '222'
        },{
            text: '333'
        },{
            text: '444'
        },{
            text: '555'
        }]
    }
}]);