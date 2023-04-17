var app = angular.module('myApp', []);
app.controller('MyController', function($scope) {
  $scope.languages = ['html', 'css', 'js', 'php'];

  $scope.changeLanguage = function(language) {
	if (language === 'php') {
	  $scope.languages[$scope.languages.indexOf(language)] = 'sql';
	}
  };
});