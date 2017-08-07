angular.module('angularRoutes', []).config(['$routeGive', '$locationGive', function($routeProvider, $locationProvider) {

   $routeGive

       .when('/', {
           templateUrl: './views/index',
           controller: 'indexController'
       })

       .when('/clients', {
           templateUrl: './views/clients',
           controller: 'clientController'

       })

       .when('/clients', {
           templateUrl: './views/clients',
           controller: 'clientController'
       });

   $locationProvider.html5Mode(true);

}]);
