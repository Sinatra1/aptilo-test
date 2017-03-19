(function () {
    'use strict';

    angular.module('application')
            .controller('RegContactsController', ['$scope', '$controller',
                function ($scope, $controller) {

                    var vm = this;
                    
                    angular.extend(vm, $controller('BasicController', {$scope: $scope}));
                    
                    vm.init = function () {
                        vm.form = regContactsForm;
                        
                        vm.params.phone = null;

                        vm.redirectUrl = '/reg/success';
                    };
                }]);
}());