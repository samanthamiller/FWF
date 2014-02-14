var ponies = angular.module("PonyApp", ['ngRoute']);

ponies.controller("MyLittlePony", function($scope){
    $scope.working = "YEAH I WORK!";     
});

ponies.controller('listController', function($scope, ponyService){
    $scope.listPonies = ponyService.getPonies();
});



ponies.controller('detailController', function($scope, ponyService, $routeParams){
    $scope.theChosenOne = ponyService.getPonyAt($routeParams.ponyIndex);
});




ponies.controller('inputController', function($scope, ponyService){
    $scope.newPony = {};
    $scope.addPony = function(){
        ponyService.addNewPony($scope.newPony.ponyName, $scope.newPony.ponyType);
    };
});

ponies.config(function($routeProvider){
    $routeProvider.when('/listview', {
        templateUrl: 'views/listview.html',
        controller: 'listController'
    }).when('/detailview/:ponyIndex', {
        templateUrl: 'views/detailview.html',
        controller: 'detailController'
    }).when('/inputform', {
        templateUrl: 'views/inputform.html',
        controller: 'inputController'
    }).otherwise({redirectTo: '/listview'});
});