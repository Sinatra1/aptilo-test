(function () {
    'use strict';

    angular.module('application')
            .service('requestService', ['$q', '$http', function ($q, $http) {

                    var service = this;

                    service.url = '/';

                    service.request = function (method, httpMethod, config, data) {
                        var deferred = $q.defer();

                        if (!httpMethod) {
                            httpMethod = 'GET';
                        }

                        $http(angular.extend({
                            method: httpMethod,
                            url: service.getMethodUrl(method),
                            data: data
                        }, config)).then(function (response) {

                            deferred.resolve(response);

                        }, function (response) {

                            deferred.reject(response);
                        });

                        return deferred.promise;
                    };

                    service.getMethodUrl = function (method) {
                        return service.url + method;
                    };

                }]);
}());