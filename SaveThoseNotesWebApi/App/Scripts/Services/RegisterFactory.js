app.factory('RegisterFactory', ['$http', '$q', '$location', function ($http, $q, $location) {    
    var o = {
        status: {}
    };

    o.addAccount = function (newUser) {
        $http({
            url: 'api/Account/Register',
            method: 'POST',            
            data: newUser
        }).success(function (response) {
            
            $location.path("/Login");
        });

    };

    return o;
}]);

//headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
