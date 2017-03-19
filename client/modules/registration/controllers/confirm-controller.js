(function () {
    'use strict';

    angular.module('application')
            .controller('RegConfirmController', ['$scope', '$controller',
                function ($scope, $controller) {

                    var vm = this;
                    
                    angular.extend(vm, $controller('BasicController', {$scope: $scope}));
                    
                    vm.init = function () {
                        vm.form = regConfirmForm;
                        
                        vm.params.phone = null;

                        vm.redirectUrl = '/reg/contacts';
                    };
                }]);
}());