mysite.controller('homectrl', function($scope, $rootScope, focus, $http) {
	//alert("home controller is wokring good");
	$http.get('./javascripts/data.json').success(function(response) {
		console.log(response);
		$scope.post = response.post.postitems;
	})
});