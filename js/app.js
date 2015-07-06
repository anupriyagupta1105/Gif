var app = angular.module('gifApp', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider){
	$routeProvider
		.when('/search',{
			templateUrl: 'templates/search.html',
			controller: 'SearchCtrl as ctrl'
		})
		.when('/details',{
			templateUrl: 'templates/details.html',
			controller: 'DetailsCtrl as ctrl'
		})
});