var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/app/partials/users.html',
		controller: 'userController'
	})
	.when('/add-user', {
		templateUrl: '/app/partials/add-user.html',
		controller: 'userController'
	})
	.otherwise({ redirectTo: '/'});
});