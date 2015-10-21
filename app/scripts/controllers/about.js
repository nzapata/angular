(function(){
'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('AboutCtrl', ['$scope','localStorageService',  function ($scope,localStorageService) {

   // $scope.todos =[];

    //using local storages
    

    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);

      $scope.submit = function(){

        $scope.todos.push([$scope.todo]);

        $scope.todo = '';
      };

      $scope.removeTodo = function (index) {
        $scope.todos.splice(index,1);
      }

  } ]);

}());
