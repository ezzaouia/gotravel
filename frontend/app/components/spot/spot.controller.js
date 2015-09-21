(function () {
  'use strict';

  angular
    .module('gotravel')
    .controller('SpotController', spotController);

  function spotController($log, $location, spotService) {
    var vm = this;
    vm.spots = [];

    activate();

    function activate() {
      return getAllSpots().then(function () {
        $log.info('Activated Spots View');
      });
    }

    function getAllSpots() {
      return spotService.getSpots().then(function (data) {
        vm.spots = data;
        return vm.spots;
      });
    }

  }
})();

/** save or update spot controller
-------------------------------------------*/
(function () {
  'use strict';

  angular
    .module('gotravel')
    .controller('SaveOrUpdateSpotController', saveOrUpdateSpotController);

  function saveOrUpdateSpotController($log, $state, $stateParams, spotService) {
    var vm = this;
    vm.save = save;
    vm.destroy = destroy;
    vm.spot = [];
    var id = $stateParams.id;

    if (id) {
      activateEditSpot();
    }

    function save() {
      if (id) {
        spotService.update(vm.spot);
      } else {
        $log.info(vm.spot);
        spotService.save(vm.spot);
      }
    }

    function destroy() {
      spotService.deleteSpot(id);
      $state.go('spots');
    }

    function activateEditSpot() {
      return findSpotById().then(function () {
        $log.info('Activated edit spot View');
      });
    }

    function findSpotById() {
      return spotService.findById(id).then(function (data) {
        vm.spot = data;
        console.log(data);
        return vm.spot;
      });
    }
  }
})();
