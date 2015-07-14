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

app.directive('myForm', function($window) {
  var schema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      match: /.+@.+\..+/
    }
  });

  return {
    restrict: 'E',
    controller: function($scope, $http) {
      $scope.doc = new mongoose.Document({}, schema);
      $scope.state = {};

      $scope.submit = function() {
        $scope.state = {};
        var error = $scope.doc.validateSync();
        if (error) {
          $scope.state.validation = error.errors;
          return;
        }

        $http.
          post('/submit', $scope.doc.toObject()).
          success(function(data) {
            $scope.state.success = true;
          }).
          error(function(error) {
            $scope.state.http = error;
          });
      };

      setTimeout(function() {
        $scope.$emit('MyFormController');
      }, 0);
    },
    templateUrl: '/form.html'
  };
});
