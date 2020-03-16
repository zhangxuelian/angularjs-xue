angular.module('ui.xue.demo', ['ui.xue', 'plunker', 'ui.router'])
  .config(function($urlRouterProvider){
    $urlRouterProvider.otherwise("/index");
  })
  .factory('buildFilesService', ['$http', '$q', function ($http, $q) {

    var moduleMap;
    var rawFiles;

    return {
      getModuleMap: getModuleMap,
      getRawFiles: getRawFiles,
      get: function () {
        return $q.all({
          moduleMap: getModuleMap(),
          rawFiles: getRawFiles()
        });
      }
    };

    function getModuleMap() {
      return moduleMap ? $q.when(moduleMap) : $http.get('assets/module-mapping.json')
        .then(function (result) {
          moduleMap = result.data;
          return moduleMap;
        });
    }

    function getRawFiles() {
      return rawFiles ? $q.when(rawFiles) : $http.get('assets/raw-files.json')
        .then(function (result) {
          rawFiles = result.data;
          return rawFiles;
        });
    }

  }])
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