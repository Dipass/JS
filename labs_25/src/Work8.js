var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.languages = ['html', 'css', 'js', 'php'];

  $scope.addLanguage = function() {
	$scope.languages.push('sql');
  }
});