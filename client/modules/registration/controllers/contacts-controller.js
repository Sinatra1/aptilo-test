(function () {
    'use strict';

    angular.module('application')
            .controller('RegContactsController', ['$scope', '$controller', 'nameService', 'emailService', 'passwordService',
                function ($scope, $controller, nameService, emailService, passwordService) {

                    var vm = this;

                    angular.extend(vm, $controller('BasicController', {$scope: $scope}));

                    vm.init = function () {
                        vm.form = regContactsForm;
                        vm.form.$invalid = true;

                        vm.params.name = null;
                        vm.params.email = null;
                        vm.params.password = null;
                        vm.params.passwordTwice = null;

                        vm.redirectUrl = '/reg/success';
                    };

                    vm.request = function () {
                        var vm = this;
                        vm.error = false;

                        vm.requestService.request('create-account', vm.params).then(function (response) {

                            if (!vm.redirectUrl || !response.success) {
                                vm.error = true;
                                return;
                            }

                            vm.$location.path(vm.redirectUrl);
                        });
                    };

                    vm.validate = function () {
                        var vm = this;

                        var invalid = false;

                        if (vm.params.name && !nameService.validate(vm.params.name)) {
                            vm.form.name.$invalid = true;
                            invalid = true;
                        } else {
                            vm.form.name.$invalid = false;
                        }
                        
                        if (vm.params.email && !emailService.validate(vm.params.email)) {
                            vm.form.email.$invalid = true;
                            invalid = true;
                        } else {
                            vm.form.email.$invalid = false;
                        }

                        if (vm.params.password && !passwordService.validate(vm.params.password)) {
                            vm.form.password.$invalid = true;
                            invalid = true;
                        } else {
                            vm.form.password.$invalid = false;
                        }

                        if (vm.passwordTwice && !passwordService.isEqual(vm.params.password, vm.passwordTwice)) {
                            vm.form.passwordTwice.$invalid = true;
                            invalid = true;
                        } else {
                            vm.form.passwordTwice.$invalid = false;
                        }

                        if (invalid) {
                            vm.form.$invalid = true;
                        } else {
                            vm.form.$invalid = false;
                        }

                        return !vm.form.$invalid;
                    };
                }]);
}());