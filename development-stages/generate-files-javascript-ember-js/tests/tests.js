App.rootElement = "#ember-testing";
App.setupForTesting();
App.injectTestHelpers();

module("Integration tests", {
  setup: function() { Ember.run(App, App.advanceReadiness); },
  teardown: function() { App.reset(); }
});


test("Downloading via data URI", function() {
  visit("/");

  andThen(function() {
    var node = find("a#datauri-example")[0];
    equal(node.download, "generating_files_with_javascript_and_ember_js.json",
          "the download attribute contains the suggested filename");

    var match = /data:application\/json;charset=UTF-8,(.*)/.exec(node.href);
    ok(match, "the href attribute contains a JSON data URI");

    var fileContents = decodeURIComponent(match[1]);
    deepEqual(
      JSON.parse(fileContents),
      {
        title: "Generating Files with JavaScript and Ember.js",
        author: "John Croisant",
        site: "http://spin.atomicobject.com/"
      },
      "the href data URI has the expected file contents"
    );
  });
});


App.MockFileSaver = Ember.Object.extend({
  savedFiles: [],
  save: function(fileContents, mimeType, filename) {
    this.savedFiles.addObject({
      fileContents: fileContents,
      mimeType: mimeType,
      filename: filename
    });
  }
});

test("Downloading via FileSaver", function() {
  // Replace the controller's real App.FileSaver with an App.MockFileSaver
  var mockFileSaver = new App.MockFileSaver();
  App.__container__.lookup("controller:index").fileSaver = mockFileSaver;

  visit("/");
  click("a#filesaver-example");

  andThen(function() {
    equal(mockFileSaver.savedFiles.length, 1, "file is saved when user clicks the link");

    var file = mockFileSaver.savedFiles[0]
    equal(file.filename, "generating_files_with_javascript_and_ember_js.json", "file is saved with the suggested filename");
    equal(file.mimeType, "application/json", "file is saved with the expected MIME type");

    deepEqual(
      JSON.parse(file.fileContents),
      {
        title: "Generating Files with JavaScript and Ember.js",
        author: "John Croisant",
        site: "http://spin.atomicobject.com/"
      },
      "the file is saved with the expected contents"
    );
  });
});
