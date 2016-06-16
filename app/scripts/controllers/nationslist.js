'use strict';

/**
 * @ngdoc function
 * @name compareNationsApp.controller:NationslistCtrl
 * @description
 * # NationslistCtrl
 * Controller of the compareNationsApp
 */
angular.module('compareNationsApp')
  .controller('NationslistCtrl', [ '$scope', '$http', function (scope, http) {
    var self = this;
    http.get('/data/nations.json')
        .success(function(data){
        scope.nations = data;  //nations è il nome del file JSON
    })
    .error(function(){
        console.log("Error!");
     });
  }]);

