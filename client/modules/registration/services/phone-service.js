(function () {
    'use strict';

    angular.module('application')
            .service('phoneService', [function () {

                    var service = this;

                    service.validate = function (phone) {
                        if (!phone) {
                            return false;
                        }
                        
                        phone = phone.replace(/ /g, '').replace('+', '');
                        
                        if (!/^\d{11}$/.test(phone)) {
                            return false;
                        }
                        
                        return true;
                    };

                }]);
}());