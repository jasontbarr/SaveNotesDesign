app.controller('HomeController', ['$scope', '$location','NoteFactory', function ($scope, $location, NoteFactory) {
    $scope.notes = NoteFactory.notes;

    $scope.title = "Save Those Notes";    
    if ($scope.$parent.status.isLoggedIn) {
        
        $scope.note = "Enter New Note Information";
        $scope.newNote = {};
        //$scope.n = {};
        $scope.editNote = {};

        $scope.addNote = function () {
            NoteFactory.addNote($scope.newNote);
            $scope.newNote = {};
        };

        $scope.updateNote = function (i) {
            NoteFactory.updateNote(i, $scope.editNote);
            $scope.editNote = {};
        };

        $scope.deleteNote = function (i) {
            NoteFactory.deleteNote(i);
        };

        $scope.getNoteDetail = function (i) {
            NoteFactory.getNoteDetail(i);
        };

        $scope.getNotes = function () {
            NoteFactory.getNotes();
        };
        

    }
    //function Carousel($scope) {
    //    $scope.myInterval = 3000;
    //    $scope.slides = [
    //      {
    //          image: 'http://lorempixel.com/400/200/'
    //      },
    //      {
    //          image: 'http://lorempixel.com/400/200/food'
    //      },
    //      {
    //          image: 'http://lorempixel.com/400/200/sports'
    //      },
    //      {
    //          image: 'http://lorempixel.com/400/200/people'
    //      }
    //    ];
    //}
}]);
//var NoteApp = angular.module("App", []);
//App.controller("HomeController", function ($scope) {
//    $scope.query = {}
//    $scope.queryBy = '$'
//    $scope.notes = [];
//    $scope.Users = [];
//    $scope.orderProp = "name";
//});
//angular.module('app', ['ui.bootstrap']);
//function Carousel($scope) {
//    $scope.myInterval = 3000;
//    $scope.slides = [
//      {
//          image: 'http://lorempixel.com/400/200/'
//      },
//      {
//          image: 'http://lorempixel.com/400/200/food'
//      },
//      {
//          image: 'http://lorempixel.com/400/200/sports'
//      },
//      {
//          image: 'http://lorempixel.com/400/200/people'
//      }
//    ];
//}
//(function () {
//    angular.module('App', ['ngRoute'])
//    .config(Config)
//    .factory('LoginFactory', LoginFactory)
//    .factory('UserFactory', UserFactory)
//    //.factory('AuthFactory', AuthFactory)
//    .factory('NoteFactory', NoteFactory)
//    .controller('HomeController', HomeController)
//    // .controller('MapLocationController', MapLocationController)
//    .controller('NavBarController', NavBarController)
//    .controller('UserController', UserController)
//    //.controller('CarouselController', CarouselController)
//})();
