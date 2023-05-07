angular.module('myApp', [])
  .controller('UserController', function($scope) {
    $scope.users = [
      { name: 'Іван', email: 'ivan@example.com' },
      { name: 'Марія', email: 'maria@example.com' },
      { name: 'Петро', email: 'petro@example.com' },
      { name: 'Олена', email: 'olena@example.com' },
      { name: 'Андрій', email: 'andriy@example.com' }
    ];
    
    $scope.filteredUsers = $scope.users;
  });
