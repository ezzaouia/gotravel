(function () {
  'use strict';

  angular
    .module('gotravel')
    .factory('spotFactory', spotFactory);

  function spotFactory($resource) {
    var factory = {
      all: all
    }

    function all() {
      $resource('api/spot/id.json', {
        id: '@id'
      }) {
        return all: isArray: true
      }
    }
  }
})();
