angular.module('candidateService', []).factory('Candidate', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('/candidates');
    }
  }
}]);
