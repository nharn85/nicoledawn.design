var App = angular.module('app', []);

App.controller('GridCtrl', function($scope, $http) {
  $http.get('data.json')
       .then(function(res){
          $scope.gridItems = res.data.designs;
        });
});