var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.name = 'Іван';
	$scope.surname = 'Іванів';
	$scope.age = 25;
	$scope.changeName = function() {
		$scope.name = 'Петро';
	};
	$scope.changeSurname = function() {
		$scope.surname = 'Петренко';
	};
	$scope.changeAge = function() {
		$scope.age = 30;
	};
});