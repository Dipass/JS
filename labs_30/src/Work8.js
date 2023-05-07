angular.module('myApp', [])
  .controller('UserController', function($scope) {
    $scope.users = [
      { firstName: 'Іван', lastName: 'Петров', email: 'ivan@example.com' },
      { firstName: 'Марія', lastName: 'Сидорова', email: 'maria@example.com' },
      { firstName: 'Олександр', lastName: 'Іванов', email: 'oleksandr@example.com' },
      { firstName: 'Наталія', lastName: 'Ковальчук', email: 'natalia@example.com' },
      { firstName: 'Петро', lastName: 'Савченко', email: 'petro@example.com' }
    ];
  });
