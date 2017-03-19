(function () {
    'use strict';

    angular.module('application')
            .service('codeService', [function () {

                    var service = this;

                    service.validate = function (code) {
                        if (!code) {
                            return false;
                        }
                        
                        code = code.replace(/ /g, '');
                        
                        if (!/^\d{4}$/.test(code)) {
                            return false;
                        }
                        
                        return true;
                    };

                }]);
}());