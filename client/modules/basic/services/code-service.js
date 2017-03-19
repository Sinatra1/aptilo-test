(function () {
    'use strict';

    angular.module('application')
            .service('codeService', ['$q', '$http', function ($q, $http) {

                    var service = this;

                    service.code = null;

                    service.generate = function (phone) {
                        var service = this;
                        
                    };

                }]);
}());