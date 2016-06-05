'use strict';

/**
 * @ngdoc function
 * @name atestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the atestApp
 */
angular.module('atestApp')
  .controller('MainCtrl', function ($http, $scope) {

    var self = this;
    self.data = {};

    $http.get('scripts/json/starbucks.json')
      .then(function (response) {
        self.data.autocomplete = response.data.data;
      });

    $scope.$on('ADDED_AUTOCOMPLETE_RESULT', function (event, newResult) {
      self.data.autocomplete.unshift(newResult);
    });

  });
