var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.workers = [
		{name: 'Микола', age: 30, salary: 400},
		{name: 'Василь', age: 31, salary: 500},
		{name: 'Петро', age: 32, salary: 600},
	];
});
