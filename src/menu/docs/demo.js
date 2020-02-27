angular.module('ui.xue.demo').controller('xueMenuDemoCtrl',['$scope',function($scope){
    $scope.menuConfig = {
        search: true,
        data: [{
            id: 1,
            menuName: "菜单1",
            subMenus: [{
                id: 11,
                menuName: "菜单项1-1"
            },{
                id: 12,
                menuName: "菜单项1-2"
            },{
                id: 13,
                menuName: "菜单项1-3"
            },{
                id: 14,
                menuName: "菜单项1-4"
            }]
        },{
            id: 2,
            menuName: "菜单2",
            subMenus: [{
                id: 21,
                menuName: "菜单项2-1"
            },{
                id: 22,
                menuName: "菜单项2-2"
            },{
                id: 23,
                menuName: "菜单项2-3"
            },{
                id: 24,
                menuName: "菜单项2-4"
            }]
        }],
        clickRouter: function(item) {//导航菜单点击回调
            console.log(item);
        },
        oneDimenName: 'menuName',//一级菜单标题字段名
        childrenName: 'subMenus',//二维数组对象名
        twoDimenName: 'menuName'//二级菜单标题字段名
    }
}]);
