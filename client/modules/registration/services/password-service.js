(function () {
    'use strict';

    angular.module('application')
            .service('passwordService', [function () {

                    var service = this;
                    service.minPasswordLength = 6;

                    service.validate = function (password) {
                        
                        if (!password || password.length < service.minPasswordLength) {
                            return false;
                        }
                        
                        return true;
                    };
                    
                    service.isEqual = function (password, passwordTwice) {
                        
                        if ( 
                            !service.validate(passwordTwice) || 
                            password != passwordTwice
                        ) {
                            return false;
                        }
                        
                        return true;
                    };

                }]);
}());