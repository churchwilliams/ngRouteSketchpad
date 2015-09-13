var app = angular.module('miniRouting', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider

		.when('/', {
			templateUrl: 'templates/home/homeTmpl.html',
			controller: 'homeCtrl'
		})

		.when('/settings', {
			templateUrl: 'templates/settings/settingsTmpl.html',
			controller: 'settingsCtrl'
		})

		.when('/products', {
			templateUrl: 'templates/products/productTmpl.html',
			controller: 'productsCtrl'
		})
		.when('/products/:id', {
			templateUrl: 'templates/products/productTmpl.html',
			controller: 'productsCtrl'
		})

		.otherwise({
			redirectTo: '/'
		});


});