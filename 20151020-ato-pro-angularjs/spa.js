var m = angular.module('spa', ['ngRoute']);

m.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider.
    otherwise({ redirectTo: '/' }).
    when('/', {
      template: [
        '<div>',
        '  <a ng-href="/detail/1">Detail 1</a>',
        '</div>',
        '<div>',
        '  <a ng-href="/detail/2">Detail 2</a>',
        '</div>'
      ].join('\n')
    }).
    when('/detail/:id', {
      template: [
        '<a ng-href="/">Back</a>',
        '<h1>Detail {{id}}</h1>'
      ].join('\n'),
      controller: function($scope, $routeParams) {
        $scope.id = $routeParams.id;
      }
    });
});
