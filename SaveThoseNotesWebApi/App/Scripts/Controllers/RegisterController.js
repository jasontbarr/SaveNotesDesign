app.controller('RegisterController', ['$scope', '$location', 'RegisterFactory', function ($scope, $location, RegisterFactory) {
    $scope.newUser = {};

    $scope.addAccount = function () {
        RegisterFactory.addAccount($scope.newUser);
        // $scope.newUser = {};
    };
}]);

//(function () {
//    'use strict';

//    angular
//        .module('app')
//        .controller('RegisterController', RegisterController);

//    RegisterController.$inject = ['NavBarController', '$location', '$rootScope', 'FlashService'];
//    function RegisterController(UserService, $location, $rootScope, FlashService) {
//        var vm = this;

//        vm.register = register;

//        function register() {
//            vm.dataLoading = true;
//            UserService.Create(vm.user)
//                .then(function (response) {
//                    if (response.success) {
//                        FlashService.Success('Registration successful', true);
//                        $location.path('/Login');
//                    } else {
//                        FlashService.Error(response.message);
//                        vm.dataLoading = false;
//                    }
//                });
//        }
//    }

//})();