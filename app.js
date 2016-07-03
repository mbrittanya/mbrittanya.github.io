var app = angular.module('app', ['ui.router','ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	// NESTED VIEWS
	.state('home',{
		url: '/home',
		templateUrl:'home.html'
	})
	.state('about',{
		url:'/about',
		templateUrl:'about.html'
	})
	.state('contact',{
		url:'/contact',
		templateUrl:'contact.html'
	})
});

app.controller('myCtrl', ['$scope', function($scope){

	$scope.message = "howdy";


}]); //end app.controller
