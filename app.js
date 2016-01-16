var app = angular.module('snlApp', ['ngSanitize']);
app.controller('searchCtrl', function($scope, $http) {
    $scope.searchme;
    $scope.fetchResults = function() {
    $http({
        method: 'GET',
        url: 'https://snl.no/api/v1/search?query=' + $scope.searchme
      }).then(function successCallback(response){
        console.log("It works");
        $scope.myData = response.data;
      }, function errorCallback(response) {
        console.log("its alive");
      });
    }
});
