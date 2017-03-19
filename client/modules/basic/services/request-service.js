(function () {
    'use strict';

    angular.module('application')
            .service('requestService', ['$q', '$http', '$resource', function ($q, $http, $resource) {

                    var service = this;

                    service.url = '/assets/json/';

                    service.request = function (method, data) {
                        var deferred = $q.defer();
                        
                        $resource(service.getMethodUrl(method)).get(function (response) {
                            deferred.resolve(response);
                        }, function(response) {
                            deferred.reject(response);
                        });

                        return deferred.promise;
                    };

                    service.getMethodUrl = function (method) {
                        return service.url + method + '.json';
                    };

                }]);
}());