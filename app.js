var appang = angular.module('snlApp', ['ngSanitize']);
appang.controller('searchCtrl', function($scope, $http) {
    $scope.searchme;
    //$scope.search  = "Norge";

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
    $scope.getSingleArticle = function(id) {
      $http.get("https://snl.no/api/v1/search?query=" + $scope.searchme).then(function(response) {
          $scope.myData = response.data;
          //console.log(myData);
      });
    }

});
