angular.module('myApp', [])
  .controller('UserController', function($scope) {
    $scope.users = [
      { id: 1, name: 'Іван', email: 'ivan@example.com' },
      { id: 2, name: 'Марія', email: 'maria@example.com' },
      { id: 3, name: 'Петро', email: 'petro@example.com' },
      { id: 4, name: 'Олена', email: 'olena@example.com' },
      { id: 5, name: 'Андрій', email: 'andriy@example.com' }
    ];
  });
