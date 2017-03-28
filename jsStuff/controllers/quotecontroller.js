angular.module('myQuoteApp')
.controller('QuoteController', ['$scope', 'QuoteService',  function($scope,QuoteService){

	setTimeout(function(){
		QuoteService.quoters().then(function(response){
			$scope.quoter = response;
			console.log($scope.quoter);
		});
	},1000);

	setTimeout(function(){
		QuoteService.quoters2().then(function(response){
			$scope.quoter2 = response;
			console.log($scope.quoter2);
		});
	},2000);

	setTimeout(function(){
		QuoteService.quoters3().then(function(response){
		$scope.quoter3 = response;
		console.log($scope.quoter3);
	});
},3000);

	$scope.newQuoters = QuoteService.quotes;

	$scope.addQuote = function(){
		$scope.newQuoters.push({
			text: $scope.newQuote.text,
			author: $scope.newQuote.author
		})
		$scope.newQuote.text = "";
		$scope.newQuote.author = ""
	}

	$scope.remove = function(quotes){
		var removeQuote = $scope.newQuoters.indexOf(quotes);
		$scope.newQuoters.splice(removeQuote, 1);
	}

}]);
