(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("form.html",
    "<div>\n" +
    "  <div>Email</div>\n" +
    "  <div class=\"email-input\">\n" +
    "    <input type=\"text\" ng-model=\"doc.email\">\n" +
    "    <div  class=\"alert-error\"\n" +
    "          ng-if=\"state.validation['email'].kind === 'required'\">\n" +
    "      Please enter an email address!\n" +
    "    </div>\n" +
    "    <div  class=\"alert-error\"\n" +
    "          ng-if=\"state.validation['email'].kind === 'regexp'\">\n" +
    "      Your email must look like \"a@b.co\"\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"submit\">\n" +
    "    <button ng-click=\"submit()\">Submit</button>\n" +
    "    <div  class=\"success\"\n" +
    "          ng-if=\"state.success\">\n" +
    "      Submitted successfully!\n" +
    "    </div>\n" +
    "    <div  class=\"alert-error\"\n" +
    "          ng-if=\"state.http\">\n" +
    "      HTTP error: {{state.http}}\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("form_index.html",
    "<html ng-app=\"example\">\n" +
    "  <head>\n" +
    "    <script type=\"text/javascript\"\n" +
    "            src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js\">\n" +
    "    </script>\n" +
    "    <script type=\"text/javascript\"\n" +
    "            src=\"https://d1l4stvdmqmdzl.cloudfront.net/4.0.7/mongoose.min.js\">\n" +
    "    </script>\n" +
    "    <script type=\"text/javascript\"\n" +
    "            src=\"app.js\">\n" +
    "    </script>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <div>\n" +
    "      <my-form></my-form>\n" +
    "    </div>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("name_input.html",
    "<div>\n" +
    "  <label>Name:</label>\n" +
    "  <input  type=\"text\"\n" +
    "          ng-model=\"yourName\"\n" +
    "          placeholder=\"Enter a name here\">\n" +
    "  <hr>\n" +
    "  <h1>Hello {{yourName}}!</h1>\n" +
    "  <button class=\"clear-button\" ng-click=\"clear()\">\n" +
    "    Clear\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("name_input_index.html",
    "<html ng-app=\"example\">\n" +
    "  <head>\n" +
    "    <script type=\"text/javascript\"\n" +
    "            src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js\">\n" +
    "    </script>\n" +
    "    <script type=\"text/javascript\"\n" +
    "            src=\"app.js\">\n" +
    "    </script>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <div>\n" +
    "      <name-input></name-input>\n" +
    "    </div>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");
}]);
})();
