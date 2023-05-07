angular.module('myApp', [])
  .controller('myController', function($scope) {
    $scope.users = [
      { name: 'Іван', dateOfBirth: new Date(1990, 0, 1) },
      { name: 'Марія', dateOfBirth: new Date(1985, 3, 15) },
      { name: 'Петро', dateOfBirth: new Date(1995, 7, 25) }
    ];
  })
  .filter('formatDate', function() {
    return function(date) {
      var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return date.toLocaleDateString('uk-UA', options);
    };
  });
