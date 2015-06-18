var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/App/Views/Home.html',
        controller: "HomeController",
    }).when('/Register', {
        templateUrl: '/App/Views/Register.html',
        controller: "RegisterController",
        caseInsensitiveMatch: true
    }).when('/Login', {
        templateUrl: '/App/Views/Login.html',
        controller: "HomeController",
        caseInsensitiveMatch: true
    }).when('/AddANote', {
        templateUrl: '/App/Views/AddANote.html',
        controller: "HomeController",
        caseInsensitiveMatch: true
    }).when('/AishaTest', {
        templateUrl: '/App/Views/AishaTest.html',
        controller: 'HomeController',
        caseInsensitiveMatch: true
    }).when('/UserNoteIndex', {
        templateUrl: '/App/Views/UserNoteIndex.html',
        controller: 'HomeController',
        caseInsensitiveMatch: true    
    }).otherwise({
        redirectTo: '/'
    });
}]);
angular.module('carousel', []);
app.controller('folderCtrl', function ($scope, $http) {
    $scope.w = window.innerWidth;
    $scope.h = window.innerHeight - 100;
    $scope.uri = "http://lorempixel.com";
    $scope.folders = [
       'technics',
       'abstract',
       'food'

    ];

    $scope.images = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


    $scope.currentFolder = $scope.folders[0];
    $scope.selectFolder = function (folder) {

        $scope.currentFolder = folder;

    };
    $scope.activeFolder = function (folder) {

        return (folder === $scope.currentFolder) ? 'active' : '';

    };
});