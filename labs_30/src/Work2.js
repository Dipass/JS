var app = angular.module('myApp', []);

app.controller('UserController', ['$scope', function($scope) {
  $scope.users = [
    { name: 'Іван', age: 30 },
    { name: 'Марія', age: 25 },
    { name: 'Петро', age: 40 }
  ];
}]);
