var app = angular.module('myApp', []);
        app.controller('myCtrl', function($scope) {
            $scope.name = 'Петро';
            $scope.surname = 'Петренко';
            $scope.age = 25;
        });