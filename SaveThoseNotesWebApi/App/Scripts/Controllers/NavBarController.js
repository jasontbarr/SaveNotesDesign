app.controller('NavBarController', ['$scope', 'LoginFactory', '$location', function ($scope, LoginFactory, $location) {
    $scope.user = {};
    $scope.user.username = localStorage.getItem('username') || '';
    $scope.status = LoginFactory.status;
    $scope.register = function () {
    };
    $scope.login = function () {
        LoginFactory.login($scope.user).then(function (username) {
            $scope.user.username = username;
            $scope.user.password = '';
            $location.path('/');
        });
    };
    $scope.logout = function () {
        LoginFactory.logout();
    };
}]);