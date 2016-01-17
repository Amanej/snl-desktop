var snlApp = angular.module('snlApp', ['ngSanitize','ngRoute']);
snlApp.controller('searchCtrl', function($scope, $http) {
    $scope.searchme;
    $scope.fetchResults = function() {
    $http({
        method: 'GET',
        url: 'https://snl.no/api/v1/search?query=' + $scope.searchme + '&limit=4'
      }).then(function successCallback(response){
        console.log("It works");
        $scope.articles = response.data;
      }, function errorCallback(response) {
        console.log("its alive");
      });
    }
});
