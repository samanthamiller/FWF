var pokemon = angular.module('PokemonApp', ['ngRoute']);

pokemon.controller('indexController', function($scope){
	// $scope.test = 'Controller working'
});

pokemon.controller('listController', function($scope, pokieService){
	$scope.list = pokieService.getPokemon();
});

pokemon.controller('detailController', function($scope, pokieService, $routeParams){
	$scope.chosen = pokieService.getPokieAt($routeParams.pokieIndex);
});

pokemon.controller('inputController', function($scope, pokieService){
	$scope.newPokie = {};
	$scope.addPokie = function(){
		pokieService.addNewPokie($scope.newPokie.pokieName, $scope.newPokie.pokieHp, $scope.newPokie.pokieStage);
	};
});

pokemon.config(function($routeProvider){
    $routeProvider.when('/pokielist', {
        templateUrl: 'partial/pokielist.html',
        controller: 'listController'
    }).when('/pokiedetail/:pokieIndex', {
        templateUrl: 'partial/pokiedetail.html',
        controller: 'detailController'
    }).when('/pokieinput', {
        templateUrl: 'partial/pokieinput.html',
        controller: 'inputController'
    }).otherwise({redirectTo: '/pokielist'});
});