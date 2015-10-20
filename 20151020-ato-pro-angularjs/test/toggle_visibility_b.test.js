describe('nameInput', function() {
  var element;
  var scope;

  beforeEach(function() {
    injector = angular.injector(['test']);

    injector.invoke(function($rootScope, $compile) {
      scope = $rootScope.$new();

      element = $compile('<toggle-visibility-b></toggle-visibility-b')(scope);
      scope.$apply();
    });
  });

  it('toggles visibility', function() {
    assert.equal(element.find('div').css('display'), '');
    element.find('button').click();
    assert.equal(element.find('div').css('display'), 'block');
  });
});
