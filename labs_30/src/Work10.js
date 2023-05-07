angular.module('myApp', [])
  .controller('myCtrl', function($scope) {
    $scope.users = ['Користувач 1', 'Користувач 2', 'Користувач 3', 'Користувач 4', 'Користувач 5', 'Користувач 6'];
    $scope.limitCount = 3; 
    $scope.startFrom = 0; 
  });
