'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
      'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])

  .config(function ($stateProvider, $urlRouterProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/');
    $stateProvider

      .state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller:'MainCtrl'
      })

      .state('about',{
      url: '/about',
      templateUrl: '../views/about.html',
      controller: 'AboutCtrl'


    })



  });

