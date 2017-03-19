(function () {
    'use strict';

    angular.module('application')
            .controller('RegPrepareController', ['$scope', '$controller', 'phoneService',
                function ($scope, $controller, phoneService) {

                    var vm = this;
                    
                    angular.extend(vm, $controller('BasicController', {$scope: $scope}));
                    
                    vm.init = function () {
                        vm.form = regPrepareForm;
                        
                        vm.params.phone = null;

                        vm.redirectUrl = '/reg/confirm';
                    };
                    
                    vm.request = function () {
                        var vm = this;
                        
                        vm.requestService.request('send-code', vm.params).then(function(response){
                            
                            if (!vm.redirectUrl || !response.code) {
                                vm.$location.path('/');
                            }

                            vm.$location.path(vm.redirectUrl);
                        });
                    };
                    
                    vm.validate = function () {
                        var vm = this;
                        
                        if (!phoneService.validate(vm.params.phone) || vm.form.$invalid !== undefined) {
                            return false;
                        }
                        
                        return true;
                    };
                }]);
}());