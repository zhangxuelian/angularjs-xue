angular.module('ui.xue.demo').controller('xueTableDemoCtrl', ['$scope',function ($scope) {
    $scope.vm = {
        tableConfig: {
            showTableCol: true,
            showIndex: true, //显示序号
            checkbox: true, //单选
            toolbar: {
                show: true,
                title: '表格列表',
                tools: [{
                    text: '刷新',
                    icon: 'xui-icon xui-icon-ios-refresh'
                }]
            },
            rows: [{
                id: 1,
                name1: 1,
                name2: 1,
                name3: 1,
                name4: 1,
                name5: 1
            }, {
                id: 2,
                name1: 2,
                name2: 2,
                name3: 2,
                name4: 2,
                name5: 2
            }, {
                id: 3,
                name1: '内容3',
                name2: '内容3',
                name3: '内容3',
                name4: '内容3',
                name5: '内容3'
            }],
            colunms: [{
                label: '标题栏1',
                name: 'name1'
            }, {
                label: '标题栏2',
                name: 'name2'
            }, {
                label: '标题栏3',
                name: 'name3'
            }, {
                label: '标题栏4',
                name: 'name4',
                formatter:function(row){
                    return row.name4+'测试';

                }

            }, {
                label: '标题栏5',
                name: 'name5'
            }],
            total: 3,
            optConfigExt: [{
                optName: '操作',
                optStyle: {
                    width: '120px'
                },
                optContent: [{
                    id: 'add',
                    name: '添加',
                    className: "xui-icon xui-icon-ios-add-circle-outline",
                    callback: function (row) {
                        console.log(row);
                    },
                    formatter: function (row) {
                        return true;
                    }
                }, {
                    id: 'view',
                    name: '查看',
                    className: "xui-icon xui-icon-ios-create-outline",
                    formatter: function () {
                        return true;
                    }
                }, {
                    id: 'cancle',
                    name: '取消',
                    className: "xui-icon xui-icon-ios-trash-outline",
                    formatter: function (row) {
                        return true;
                    }
                }]
            }]
        },
        isShow:true
    }
}]);