mysite.controller('homectrl', function($scope, $rootScope, focus, $http) {
	//alert("home controller is wokring good");
	$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
  $('.collapsible').collapsible();
  $(".button-collapse").sideNav();
	$http.get('./javascripts/data.json').success(function(response) {
		console.log(response);
		$scope.post = response.post.postitems;
	})
});