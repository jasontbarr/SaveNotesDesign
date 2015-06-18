app.factory('LoginFactory', ['$http', '$q', '$location', function ($http, $q, $location ) {
    var o = { status: {} };
    o.status.isLoggedIn = (localStorage.getItem('token')) ? true : false;

    o.login = function (user) {
        var q = $q.defer();
        $http({
            url: '/Token',
            method: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            data: 'username=' + user.username + '&password=' + user.password + '&grant_type=password'
        }).success(function (data) {
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('username', data.userName);
            o.status.isLoggedIn = true;
            console.log(data);
            q.resolve(data.userName);            
        }).error(function (data) {
            o.logout();
            q.reject();
        });
        return q.promise;
    }

    o.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        o.status.isLoggedIn = false;
        $location.path('/home');
    }

    return o;
}]);