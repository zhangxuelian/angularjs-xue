angular.module('ui.xue.demo').controller('xueCheckboxDemoCtrl', ['$scope', function ($scope) {
    $scope.vm = {
        checkboxCheck: false,
        checkList: ["橙子"],
        checkArray: ["橙子", "樱桃"],
        checkStatus: false,
        change:function(checkArray){
            console.log(checkArray);
        }
    }
}])