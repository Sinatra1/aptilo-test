(function () {
    'use strict';

    angular.module('application')
            .service('nameService', [function () {

                    var service = this;
                    service.minNameLength = 3;

                    service.validate = function (name) {
                        
                        if (!name || name.length < service.minNameLength) {
                            return false;
                        }
                        
                        return true;
                    };

                }]);
}());