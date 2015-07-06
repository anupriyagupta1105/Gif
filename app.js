var app= angular.module('GifApp' , ['ngRoute']);

app.config(function($routeProvidder){
	$routeProvider
		.when('/search',{
			templateUrl: 'templates/search.html',
			controller: 'searchCtrl as ctrl'
		})
		.when('/details',{
			templateUrl: 'templates/details.html',
			controller: 'detailsCtrl as ctrl'
		})
}