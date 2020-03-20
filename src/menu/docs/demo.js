angular.module('ui.xue.demo').controller('xueMenuDemoCtrl', ['$scope', function ($scope) {
    $scope.menuConfig = {
        search: true,
        data: [{
            id: 1,
            menuName: "菜单1",
            subMenus: [{
                id: 11,
                menuName: "菜单项1-1"
            }, {
                id: 12,
                menuName: "菜单项1-2"
            }, {
                id: 13,
                menuName: "菜单项1-3"
            }, {
                id: 14,
                menuName: "菜单项1-4"
            }]
        }, {
            id: 2,
            menuName: "菜单2",
            subMenus: [{
                id: 21,
                menuName: "菜单项2-1"
            }, {
                id: 22,
                menuName: "菜单项2-2"
            }, {
                id: 23,
                menuName: "菜单项2-3"
            }, {
                id: 24,
                menuName: "菜单项2-4"
            }]
        }],
        clickRouter: function (item) { //导航菜单点击回调
            console.log(item);
        },
        oneDimenName: 'menuName', //一级菜单标题字段名
        childrenName: 'subMenus', //二维数组对象名
        twoDimenName: 'menuName' //二级菜单标题字段名
    }
    $scope.menuConfig1 = {
        selectId: 111, // 当前选中导航菜单ID
        data: [{
            id: '1',
            menuName: '菜单1',
            subMenus: [{
                id: '11',
                menuName: '菜单项1-1',
                subMenus: [{
                    id: '111',
                    menuName: '菜单项1-1'
                }]
            }]
        }, {
            id: '2',
            menuName: '菜单2',
            subMenus: [{
                id: '21',
                menuName: '菜单项1-2',
                subMenus: [{
                    id: '211',
                    menuName: '菜单项1-2'
                }]
            }]
        },{
            id: '3',
            menuName: '菜单3'
        },{
            id: '4',
            menuName: '菜单4',
            subMenus: [{
                id: '41',
                menuName: '菜单项4-1'
            },{
                id: '42',
                menuName: '菜单项4-2'
            }]
        }]
    }
    $scope.menuConfig2 = {
        mode: 'horizontal',
        selectId: 111, // 当前选中导航菜单ID
        data: [{
            id: '1',
            menuName: '菜单1',
            subMenus: [{
                id: '11',
                menuName: '菜单项1-1',
                subMenus: [{
                    id: '111',
                    menuName: '菜单项1-1-1'
                },{
                    id: '121',
                    menuName: '菜单项1-2-1'
                }]
            },{
                id: '12',
                menuName: '菜单12'
            },{
                id: '13',
                menuName: '菜单13'
            }]
        }, {
            id: '2',
            menuName: '菜单2',
            subMenus: [{
                id: '21',
                menuName: '菜单项2-1',
                subMenus: [{
                    id: '211',
                    menuName: '菜单项2-1-1'
                },{
                    id: '212',
                    menuName: '菜单项2-1-2'
                }]
            },{
                id: '22',
                menuName: '菜单项2-2'
            }]
        },{
            id: '3',
            menuName: '菜单3'
        }]
    }
}]);