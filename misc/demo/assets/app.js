angular.module('ui.xue.demo', ['ui.xue','plunker'])
.run(['$location', function($location){
    if ($location.path() !== '' && $location.path() !== '/') {
      smoothScroll(document.getElementById($location.path().substring(1)), 500, function(el) {
        location.replace('#' + el.id);
      });
    }
}])
.factory('buildFilesService', ['$http','$q',function ($http, $q) {

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
.controller('xueDemoCtrl',['$scope',function($scope){
    
}]);