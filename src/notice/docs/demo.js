angular.module('ui.xue.demo').controller('xueNoticeDemoCtrl', ['$scope', function ($scope) {
    $scope.vm = {
        config: {
            count: 0,
            selectTabId: 1,
            listMaxLen: 10,
            noticeTypeList: [],
            noticeList: [],
            tabMark: 'number',
            tabItem: [{
                id: 0,
                name: '通知提醒',
                count: 3
            }, {
                id: 1,
                name: '待办事项',
                count: 5
            }, {
                id: 2,
                name: '系统公告',
                count: 7
            }],
            tabItemClick: function (item) {
                console.log(item)
            }
        }
    }
}]);