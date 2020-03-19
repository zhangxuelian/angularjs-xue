angular.module('ui.xue.demo').controller('xueStepsDemoCtrl', ['$scope', function ($scope) {
    $scope.value = 1;
    $scope.defaultConfig = {
        options: [{
            title: 'Finished',
            code: 0
        }, {
            title: 'In Progress',
            code: 1
        }, {
            title: 'Waiting',
            code: 2
        }]
    };
    $scope.stepsConfigSm = {
        theme:'green-theme',
        alignCenter: true,
        size:'small',
        iconStyle:'statusNum',
        options: [{
            title: 'Finished',
            code: 0
        }, {
            title: 'In Progress',
            code: 1
        }, {
            title: 'Waiting',
            code: 2
        }]
    };
    $scope.stepsConfigDes = {
        alignCenter: true,
        iconStyle:'statusNum',
        options: [{
            title: 'Finished',
            code: 0,
            description:'步骤文字描述...'
        }, {
            title: 'In Progress',
            code: 1,
            description:'步骤文字描述...'
        }, {
            title: 'Waiting',
            code: 2,
            description:'步骤文字描述...'
        }]
    };
    $scope.stepsConfig2 = {
        theme:'green-theme',
        alignCenter: true,
        direction: "vertical", //horizontal:水平布局,vertical：垂直布局
        iconStyle:'fillStatus',
        options: [{
            title: 'Finished',
            code: 0
        }, {
            title: 'In Progress',
            code: 1
        }, {
            title: 'Waiting',
            code: 2
        }]
    };
    $scope.stepsConfigLg = {
        theme:'green-theme',
        alignCenter: true,
        iconStyle:'strokeStatus',
        size:'large',
        options: [{
            title: 'Finished',
            code: 0
        }, {
            title: 'In Progress',
            code: 1
        }, {
            title: 'Waiting',
            code: 2
        }]
    };
    $scope.stepsConfig = {
        theme:'green-theme',
        alignCenter: true,
        iconStyle:'strokeStatus',
        options: [{
            title: 'Finished',
            code: 0
        }, {
            title: 'In Progress',
            code: 1
        }, {
            title: 'Waiting',
            code: 2
        }]
    };
    $scope.stepsConfig4 = {
        theme:'green-theme',
        iconStyle:'point',
        options: [{
            title: 'Finished',
            code: 0
        }, {
            title: 'In Progress',
            code: 1
        }, {
            title: 'Waiting',
            code: 2
        }]
    };
    $scope.stepsConfig5 = {
        theme:'green-theme',
        alignCenter: true,
        iconStyle:'iconfont',
        options: [{
            title: 'Finished',
            code: 0,
            iconfont:'xui-icon xui-icon-md-checkmark'
        }, {
            title: 'In Progress',
            code: 1,
            iconfont:'xui-icon xui-icon-ios-cloud-download'
        }, {
            title: 'Waiting',
            code: 2,
            iconfont:'xui-icon xui-icon-ios-cloud-upload'
        }]
    };
}]);