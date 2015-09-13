var app = angular.module('miniRouting');

app.controller('productsCtrl', function($scope, $routeParams, productsService){

	$scope.message = "This is the productsCtrl saying HELLO!"
	if ($routeParams.id === 'shoes'){
		$scope.productData = productsService.shoeData;
		$scope.message = "You want shoe data? Hurrrr yah go!"
	} 
	else if ($routeParams.id === 'socks'){
		$scope.productData = productsService.sockData;
		$scope.message = "Looking for some sexayyy socks. Look no further!"
	}
});