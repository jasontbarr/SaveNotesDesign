app.controller('CarouselController', ['$scope', '$location', function ($scope, $location) {

    
        $scope.query = {}
        $scope.queryBy = '$'
        $scope.notes = [];
        $scope.Users = [];
        $scope.orderProp = "name";
    
    angular.module('app', ['ui.bootstrap']);
    function Carousel($scope) {
        $scope.myInterval = 3000;
        $scope.slides = [
          {
              image: 'http://lorempixel.com/400/200/'
          },
          {
              image: 'http://lorempixel.com/400/200/food'
          },
          {
              image: 'http://lorempixel.com/400/200/sports'
          },
          {
              image: 'http://lorempixel.com/400/200/people'
          }
        ];
    }

}]);