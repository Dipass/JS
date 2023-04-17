var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.name = 'Іван';
  $scope.changeName = function() {
    $scope.name = 'Дмитро';
  };
});
