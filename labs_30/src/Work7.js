angular.module('myApp', [])
  .controller('myController', function($scope) {
    $scope.users = [
      { name: 'Іван', age: 25, email: 'ivan@example.com' },
      { name: 'Марія', age: 30, email: 'maria@example.com' },
      { name: 'Петро', age: 20, email: 'petro@example.com' }
    ];
  
    $scope.sortingField = 'name';
    $scope.changeSortingField = function() {
      $scope.sortingField = $scope.selectedField;
    };
  });
