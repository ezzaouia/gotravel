(function () {
  'use strict';

  angular.module('gotravel').controller('MainController', MainController);

  function MainController() {
    var vm = this;
    vm.things = ['one', 'two', 'tree']
  }
})();
