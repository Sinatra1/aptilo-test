(function () {
    'use strict';

    angular.module('application')
            .controller('RegConfirmController', ['$scope', '$controller', 'codeService',
                function ($scope, $controller, codeService) {

                    var vm = this;
                    
                    angular.extend(vm, $controller('BasicController', {$scope: $scope}));
                    
                    vm.init = function () {
                        vm.form = regConfirmForm;
                        
                        vm.params.code = null;

                        vm.redirectUrl = '/reg/contacts';
                    };
                    
                    vm.request = function () {
                        var vm = this;
                        vm.error = false;
                        
                        vm.requestService.request('confirm-code', vm.params).then(function(response){
                            
                            if (!vm.redirectUrl || !response.code || response.code != vm.params.code) {
                                vm.error = true;
                                return;
                            }

                            vm.$location.path(vm.redirectUrl);
                        });
                    };
                    
                    vm.validate = function () {
                        var vm = this;
                        
                        if (!codeService.validate(vm.params.code) || vm.form.$invalid !== undefined) {
                            return false;
                        }
                        
                        return true;
                    };
                }]);
}());