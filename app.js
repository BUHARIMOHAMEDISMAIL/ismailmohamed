var mysite = angular.module('website',['ngRoute', 'website.service'])
.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partial/home.html',
		controller:'homectrl'
	})
	.when('/signin', {
		templateUrl: 'partial/signin.html',
		controller: 'signinctrl'
	})
	.when('/post', {
		templateUrl:'partial/post.html',
		controller:'postctrl'
	});
});