angular.module('ui.xue.demo').controller('xueAutoSelectDemoCtrl', ['$scope', function ($scope) {
    $scope.vm = {
        value: '',
        config: {
            data: ["身份证", "护照", "居住证", "驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证驾驶证", '往来通行证', '港澳通行证'],
            selectCallback: function (item) {
                console.log(item);
            }
        }
    }
}])