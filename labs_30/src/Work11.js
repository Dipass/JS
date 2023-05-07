var app = angular.module('myApp', []);

app.controller('UserController', ['$scope', function($scope) {
    $scope.users = [
        { name: 'Джон' },
        { name: 'Аліса' },
        { name: 'Боб' },
        { name: 'Алекс' },
        { name: 'Сара' }
    ];
}]);
