var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.languages = ['html', 'css', 'js', 'php'];
  $scope.removeLanguage = function(language) {
	for (var i = 0; i < $scope.languages.length; i++) {
	  if ($scope.languages[i] === language) {
		$scope.languages.splice(i, 1);
		i--;
	  }
	}
  };
});