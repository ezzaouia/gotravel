(function () {
  'use strict';

  angular
    .module('gotravel')
    .config(stateConfig);

  function stateConfig($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    }).state('spots', {
      url: '/spots',
      templateUrl: 'components/spot/views/index.html',
      controller: 'SpotController',
      controllerAs: 'spot'
    }).state('newSpot', {
      url: '/spots/new',
      templateUrl: 'components/spot/views/new.html',
      controller: 'SaveOrUpdateSpotController',
      controllerAs: 'saveOrUpdate'
    }).state('showSpot', {
      url: '/spots/:id',
      templateUrl: 'components/spot/views/show.html',
      controller: 'SaveOrUpdateSpotController',
      controllerAs: 'saveOrUpdate'
    }).state('editSpot', {
      url: '/spots/:id/edit',
      templateUrl: 'components/spot/views/edit.html',
      controller: 'SaveOrUpdateSpotController',
      controllerAs: 'saveOrUpdate'
    });
  }
})();
