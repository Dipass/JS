var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.languages = ['html', 'css', 'js', 'php'];
  $scope.langs = {
	'Варшава': 'Польща',
	'Вільнюс': 'Литва',
	'Київ': 'Україна',
  };
});