var app = angular.module('miniRouting');

app.controller('homeCtrl', function($scope){
	$scope.message = "This is the homeCtrl $scope saying HELLO!";
})