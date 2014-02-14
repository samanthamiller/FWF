angular.module('MyApp').service('DataService', function(){
	var itemsArray = [];

	this.getItems = function(){
		var addyArray = JSON.parse(localStorage.getItem('itemLS')) || [];
		itemsArray = addyArray;
		return itemsArray;
	};

	this.saveItem = function(pItem, pQuantity){
		var savedItems = {itemName: pItem, quantity:pQuantity};
		itemsArray.push(savedItems);

		// Update local storage object
		localStorage.setItem('itemLS', JSON.stringify(itemsArray));
	};

	this.removeItemAt = function(pIndex){
		itemsArray.splice(pIndex, 1);
		localStorage.setItem('itemLS', JSON.stringify(itemsArray));
	}

	this.destroyLocalStorage = function(){
		itemsArray.splice(0);
		localStorage.clear();
	}

});