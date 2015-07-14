describe('nameInput', function() {
  var element;
  var injector;
  var scope;
  var httpBackend;

  beforeEach(function(done) {
    injector = angular.injector(['example', 'ngMockE2E']);

    injector.invoke(function($rootScope, $compile, $httpBackend) {
      scope = $rootScope.$new();

      $httpBackend.whenGET(/.*\.html/i).passThrough();
      httpBackend = $httpBackend;

      element = $compile('<my-form></my-form>')(scope);
      scope.$apply();

      scope.$on('MyFormController', function() {
        done();
      });
    });
  });

  it('has an input field for users email', function() {
    element.find('.email-input input').
      val('val@karpov.io').trigger('change');
    assert.equal(scope.doc.email, 'val@karpov.io');
  });

  it('email field is required', function() {
    element.find('.submit button').trigger('click');
    assert.equal(scope.state.validation['email'].kind, 'required');
    assert.equal(element.find('.email-input .alert-error').text().trim(),
      'Please enter an email address!');
  });

  it('email field must contain valid email', function() {
    element.find('.email-input input').
      val('not_a_valid_email').trigger('change');
    element.find('.submit button').trigger('click');
    assert.equal(scope.state.validation['email'].kind, 'regexp');
    assert.equal(element.find('.email-input .alert-error').text().trim(),
      'Your email must look like "a@b.co"');
  });

  it('sends an HTTP post request on success', function() {
    var validatePostBody = function(v) {
      assert.doesNotThrow(function() {
        v = JSON.parse(v);
      });
      assert.equal(v.email, 'val@karpov.io');
      return true;
    };

    httpBackend.expectPOST('/submit', validatePostBody).
      respond({ ok: 1 });

    element.find('.email-input input').
      val('val@karpov.io').trigger('change');
    element.find('.submit button').trigger('click');
    assert.equal(element.find('.submit .success').length, 0);

    httpBackend.flush();

    assert.equal(element.find('.submit .success').text().trim(),
      'Submitted successfully!');
  });

  it('displays any HTTP errors', function() {
    var validatePostBody = function(v) {
      return true;
    };

    httpBackend.expectPOST('/submit', validatePostBody).
      respond(404, 'Not found!');

    element.find('.email-input input').
      val('val@karpov.io').trigger('change');
    element.find('.submit button').trigger('click');

    httpBackend.flush();

    assert.equal(element.find('.submit .success').length, 0);
    assert.equal(element.find('.submit .alert-error').text().trim(),
      'HTTP error: Not found!');
  });
});
