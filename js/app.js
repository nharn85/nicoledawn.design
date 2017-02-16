/* global angular */
const App = angular.module('app', []);

App.controller('GridCtrl', ($scope, $http) => {
  $http.get('data.json')
  .then((res) => {
    $scope.gridItems = res.data.designs;
  });
});
