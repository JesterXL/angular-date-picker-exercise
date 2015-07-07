var app = angular.module("epicDates", [
							'ui.bootstrap'
							]);
app.controller("DateController", function($scope)
{
	$scope.dt = new Date();
});