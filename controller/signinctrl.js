mysite.controller('signinctrl', function($scope, $location, $rootScope) {
	$rootScope.checking = 'working good';
	console.log($rootScope.checking);
	$scope.submit = function(item) {
		$scope.email = item.email;
		$scope.password = item.password;
		if($scope.email == 'mohamed@gmail.com') {
			if( $scope.password == 'ismail123') {
				$location.path('/post');
			}
			else {
				alert("wrong password");
			}

		}
		else {
			alert("wrong mail id");
		}
	}
});