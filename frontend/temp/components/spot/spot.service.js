(function () {
  'use strict';

  angular
    .module('gotravel')
    .factory('spotService', spotService);

  function spotService($log, $http, toastr) {
    var apiHost = '/api/spot';

    var service = {
      apiHost: apiHost,
      getSpots: getSpots,
      save: save,
      deleteSpot: deleteSpot,
      findById: findById,
      update: update
    };

    return service;

    /** find all
    ------------------------------------------ */
    function getSpots() {
      return $http.get(apiHost + '/find')
        .then(getSpotsComplete)
        .catch(getSpotsFailed);

      function getSpotsComplete(response) {
        return response.data;
      }

      function getSpotsFailed(error) {
        $log.error('XHR Failed for getSpots.\n' + angular.toJson(error.data, true));
      }
    }

    /** create
    ------------------------------------------ */
    function save(spot) {
      return $http
        .post(apiHost + '/create', {
          title: spot.title,
          description: spot.description
        })
        .then(spotCRUDComplete('created'));
    }

    function spotCRUDComplete(arg) {
      toastr.success('Post have been ' + arg);
    }

    /** delete
    ------------------------------------------ */
    function deleteSpot(id) {
      return $http
        .post(apiHost + '/destroy/' + id, {})
        .then(spotCRUDComplete('deleted'));
    }

    function update(spot) {
      return $http
        .post(apiHost + '/update/' + spot.id, {
          title: spot.title,
          description: spot.description
        })
        .then(spotCRUDComplete('updated'));
    }

    /** find by id
    ------------------------------------------ */
    function findById(id) {
      return $http
        .get(apiHost + '/' + id)
        .then(getSpotComplete);

      function getSpotComplete(response) {
        console.log(response.data);
        return response.data;
      }
    }

  }
})();
