var app = require('../app.js');
app
.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
  
  console.log("HomeCtrl loaded.");
  $scope.new = {};

}]);
