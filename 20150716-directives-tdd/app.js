var app = angular.module('example', ['ng']);

app.directive('nameInput', function() {
  return {
    restrict: 'E',
    controller: function($scope) {
      $scope.clear = function() {
        $scope.yourName = '';
      };

      setTimeout(function() {
        $scope.$emit('NameInputController');
      }, 0);
    },
    templateUrl: '/name_input.html'
  };
});
