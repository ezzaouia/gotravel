(function () {
  'use strict';

  angular
    .module('gotravel')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/navbar/views/navbar.html'
    };

    return directive;
  }

})();
