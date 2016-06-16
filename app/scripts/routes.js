'use strict';

angular.module('compareNationsApp')
    .config(function ($routeProvider) {
        $routeProvider
          /*  .when('/', {
                templateUrl: 'views/nation.html',
                controller: 'NationslistCtrl',
                controllerAs: 'nationCtrl'
            })*/
            .when('/about', {
                templateUrl: 'views/nation.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/nation', {
                templateUrl: 'views/nation.html',
                controller: 'NationslistCtrl',
                controllerAs: 'nationCtrl'
            })
            
            .otherwise({
                redirectTo: '/'
            });
    });
