angular.module('PokemonApp').service('pokieService', function(){
	var pokieArray = [
		{name: 'Krookodile',
		 hp: '140',
		 stage:	'2'	
		},
		{name: 'Delphox',
		 hp: '140',
		 stage:	'2'	
		},
		{name: 'Trevenant',
		 hp: '120',
		 stage:	'1'	
		}				 
	];

this.getPokemon = function(){
	var pokemonList = JSON.parse(localStorage.getItem('pokemonLS')) || pokieArray;
	pokieArray = pokemonList;
	return pokieArray;
};

this.getPokieAt = function(idx){
	return pokieArray[idx];
};

this.addNewPokie = function(pName, pHp, pStage){
	var savePokie = {name: pName, hp: pHp, stage: pStage};
	pokieArray.push(savePokie);
	localStorage.setItem('pokemonLS', JSON.stringify(pokieArray));
	window.location.hash = '/pokielist';
}	

});

