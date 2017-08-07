angular.module('clientService', []).factory('Client', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('/clients');
    }
  }
}]);
