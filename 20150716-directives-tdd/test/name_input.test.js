describe('nameInput', function() {
  var element;
  var injector;
  var scope;

  beforeEach(function(done) {
    injector = angular.injector(['example', 'ngMockE2E']);

    injector.invoke(function($rootScope, $compile, $httpBackend) {
      scope = $rootScope.$new();

      $httpBackend.whenGET(/.*\.html/i).passThrough();

      element = $compile('<name-input></name-input>')(scope);
      scope.$apply();

      scope.$on('NameInputController', function() {
        done();
      });
    });
  });

  it('shows the inputted name', function() {
    element.find('input').val('Test').trigger('change');
    assert.equal(element.find('h1').text().trim(), 'Hello Test!');
  });

  it('has a clear button', function() {
    element.find('input').val('Test').trigger('change');
    assert.equal(element.find('h1').text().trim(), 'Hello Test!');

    element.find('button.clear-button').trigger('click');
    assert.equal(scope.yourName, '');
    assert.equal(element.find('h1').text().trim(), 'Hello !');
  });
});
