var app = angular.module('myApp', []);
		app.controller('myCtrl', function($scope) {
			$scope.langs = {
				name: 'Петро',
				surname: 'Петренко',
				age: '25'
			};
			$scope.userData = $scope.langs.name + ' ' + $scope.langs.surname + ', ' + $scope.langs.age + ' років';
		});