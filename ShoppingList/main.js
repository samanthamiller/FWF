var theApp = angular.module('MyApp', []);
theApp.controller('ShoppingList', function($scope, DataService){

	$scope.items = DataService.getItems();
	$scope.newItem = {};
	$scope.amount;

	$scope.addNewItem = function(){
		if($scope.newItem.quantity == undefined){
			return;
		}
		DataService.saveItem($scope.newItem.name, $scope.newItem.quantity)
		console.log($scope.newItem.quantity);
	}

	$scope.removeItem = function(idx){
		DataService.removeItemAt(idx);
	}

	$scope.clearIt = function(){
		DataService.destroyLocalStorage();
	}
});


