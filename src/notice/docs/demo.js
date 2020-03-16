angular.module('ui.xue.demo').controller('xueNoticeDemoCtrl', ['$scope', function ($scope) {
    $scope.vm = {
        config: {
            count: 15,
            selectTabId: 1,
            listMaxLen: 10,
            noticeTypeList: [{contentType: '提示分类内容', count: 0},{contentType: '提示分类内容2', count: 101}],
            noticeList: [{
                content: '提示内容1',
                contentType:'审批1',
                time: '2019-08-20 17:13:55'
            }, {
                content: '提示内容2',
                contentType:'审批2',
                time: '2019-08-20 17:13:55'
            }],
            formatField: {
                contentTitle:'contentType'
            },
            tabMark: 'number',
            tabItem: [{
                id: 0,
                name: '通知提醒',
                count: 99
            }, {
                id: 1,
                name: '待办事项',
                count: 105
            }, {
                id: 2,
                name: '系统公告',
                count: 24
            }],
            showNoticeType: false,
            tabItemClick: function (item) {
                console.log(item);
                $scope.vm.config.showNoticeType =true;
            }
        }
    }
}]);