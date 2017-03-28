angular.module('myQuoteApp')
.controller('QuoteController', ['$scope', 'QuoteService',  function($scope,QuoteService){
	$scope.mssg = "HEllo"
	$scope.people = QuoteService.quotes;
}]);
