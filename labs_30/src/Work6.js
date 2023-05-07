angular.module('myApp', [])
  .controller('myController', function($scope) {
    $scope.users = [
      { name: 'Іван', surname: 'Петров', age: 25 },
      { name: 'Алексій', surname: 'Сидорова', age: 30 },
      { name: 'Андрій', surname: 'Коваленко', age: 20 },
      { name: 'Олена', surname: 'Іванова', age: 35 }
    ];
    
    $scope.ascending = true;
  });
