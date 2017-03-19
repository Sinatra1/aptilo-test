(function () {
    'use strict';

    angular.module('application')
            .controller('BasicController', ['$location',
                function ($location) {

                    var vm = this;
                    
                    vm.form = null;
                    vm.params = {};
                    vm.baseUrl = '#!';
                    vm.redirectUrl = null;
                    
                    vm.submit = function () {
                        var vm = this;
                        
                        if (!vm.validate()) {
                            vm.form.$invalid = true;
                            return;
                        }
                        
                        vm.request();
                    };
                    
                    vm.validate = function () {
                        var vm = this;
                        
                        if (vm.form.$invalid !== undefined) {
                            return false;
                        }
                        
                        return true;
                    };
                    
                    vm.request = function () {
                        var vm = this;
                        
                        if (!vm.redirectUrl) {
                            return;
                        }
                        
                        $location.path(vm.redirectUrl);
                    };
                    
                    vm.init = function () {
                        
                    };

                }]);
}());