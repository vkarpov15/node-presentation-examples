var m = angular.module('test', ['ng']);

m.directive('toggleVisibilityA', function() {
  return {
    template: [
      '<button ng-click="visible = !visible">',
      '  Toggle Visibility',
      '</button>',
      '<div ng-show="visible">',
      '  Insert content here',
      '</div>'
    ].join('\n'),
    controller: function($scope) {
      $scope.visible = true;
    }
  };
});

m.directive('toggleVisibilityOn', function() {
  return function(scope, element, attrs) {
    scope.$on(attrs.toggleVisibilityOn, function() {
      element.toggle();
    });
  }
});

m.directive('toggleVisibilityB', function() {
  return {
    template: [
      '<button ng-click="$broadcast(\'TOGGLE_VISIBILITY\')">',
      '  Toggle Visibility',
      '</button>',
      '<div toggle-visibility-on="TOGGLE_VISIBILITY">',
      '  Insert content here',
      '</div>'
    ].join('\n')
  };
});
