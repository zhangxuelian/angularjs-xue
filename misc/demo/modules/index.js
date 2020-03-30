angular.module('ui.xue.demo', ['ui.xue', 'ui.router','ngAnimate'])
    .config(function ($urlRouterProvider,$stateProvider) {
        $urlRouterProvider.otherwise('getting_started');
        $stateProvider
        .state('getting_started', {
            url: '/getting_started',
            templateUrl: 'modules/getting_started.html'
        }).state('component', {
            url: '/component',
            templateUrl: 'modules/component.html',
            controller: 'componentCtrl',
            controllerAs: 'component'
        }).state('ui', {
            url: '/ui',
            templateUrl: 'modules/ui.html',
            controller: 'componentCtrl',
            controllerAs: 'ui'
        }).state('tool', {
            url: '/tool',
            templateUrl: 'modules/tool.html',
            controller: 'componentCtrl',
            controllerAs: 'tool'
        });
    })
    .controller('xueDemoCtrl', ['$scope', function ($scope) {
        var self = this;
        self.menuData = [{
            id: "getting_started",
            name: '入门指南'
        }, {
            id: 'component',
            name: '组件'
        }, {
            id: 'ui',
            name: 'UI'
        }, {
            id: 'tool',
            name: '工具库'
        }];
    }])
    .controller('componentCtrl',[function(){
        var self = this;
        self.selectId = "";
        self.selectMenu = function($event){
            self.selectId = $event.target.attributes["data-module-name"].nodeValue || '';
            self.optDom();
        };
        self.load = function(){
            var ele = document.getElementById("componentLeftWrap");
            self.selectId = ele.attributes["data-first-module-name"].nodeValue;
            self.optDom();
        };
        self.optDom = function(){
            var ele = document.getElementById("componentRightWrap");
            var childrenEle = ele.getElementsByClassName("module-wrap");
            angular.forEach(childrenEle,function(ele){
                if(ele.getAttribute("id") == self.selectId){
                    ele.style.display="block";
                }else{
                    ele.style.display="none";
                }
            });
            ele.scrollTop = 0;
        };
    }]);