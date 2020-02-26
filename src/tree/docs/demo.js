angular.module('ui.xue.demo').controller('xueTreeDemoCtrl',['$scope',function($scope){
    $scope.treeConfig = {
        data: [{
            name: 'tree-1',
            id: 1,
            children: [{
                name:  'tree-1-1',
                id: 11,
                children: [{
                    name:  'tree-1-1-1',
                    id: 111
                }]
            }, {
                name:  'tree-1-2',
                id: 2
            }, {
                name:  'tree-1-3',
                id: 3
            }]
        }]
    }
}]);
