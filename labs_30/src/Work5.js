angular.module('myApp', [])
  .controller('UserController', function($scope) {
    $scope.users = [
      { name: 'Іван', age: 25 },
      { name: 'Марія', age: 30 },
      { name: 'Петро', age: 20 }
    ];
  });
