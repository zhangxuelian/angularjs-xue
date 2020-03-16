angular.module('ui.xue.demo', ['ui.xue', 'ui.router'])
    .config(function ($urlRouterProvider,$stateProvider) {
        $urlRouterProvider.otherwise('getting_started');
        $stateProvider.state('getting_started', {
            url: '/getting_started',
            templateUrl: 'modules/getting_started.html'
        });
    })
    .controller('xueDemoCtrl', ['$scope', function ($scope) {
        var self = this;
        self.loadData = function () {
            var ele = document.getElementById("demoWrap");
            self.demoModules = JSON.parse(ele.attributes["data-demoModules"].nodeValue);
            self.menuData[1].id = self.demoModules[0].name;
            self.version = ele.attributes["data-version"].nodeValue;
            self.menuData[4].name = 'V' + self.version;
        };
        self.menuData = [{
            id: "gettingStarted",
            name: '入门指南'
        }, {
            id: '',
            name: '组件文档'
        }, {
            id: 'ui',
            name: 'UI'
        }, {
            id: 'tool',
            name: '工具库'
        }, {
            id: '',
            name: ''
        }];
    }]);