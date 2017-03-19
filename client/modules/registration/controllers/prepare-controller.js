(function () {
    'use strict';

    angular.module('application')
            .controller('RegPrepareController', ['$scope', '$controller',
                function ($scope, $controller) {

                    var vm = this;
                    
                    angular.extend(vm, $controller('BasicController', {$scope: $scope}));
                    
                    vm.init = function () {
                        vm.form = regPrepareForm;
                        debugger;
                        vm.params.phone = null;

                        vm.redirectUrl = '/reg/confirm';
                    };
                }]);
}());