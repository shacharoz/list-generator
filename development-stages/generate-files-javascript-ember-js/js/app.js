App = Ember.Application.create();


App.FileSaver = Ember.Object.extend({
  save: function(fileContents, mimeType, filename) {
    window.saveAs(new Blob([fileContents], {type: mimeType}), filename);
  }
});

App.register('lib:fileSaver', App.FileSaver);


App.IndexRoute = Ember.Route.extend({
  model: function() {
    return {
      title: "Generating Files with JavaScript and Ember.js",
      author: "John Croisant",
      site: "http://spin.atomicobject.com/"
    };
  }
});


App.IndexController = Ember.ObjectController.extend({
  suggestedFilename: function() {
    return this.get("model.title").toLowerCase().replace(/\W+/g, "_") + ".json";
  }.property("model.title"),

  // Used by data URI example only
  dataURI: function() {
    return (
      "data:application/json;charset=UTF-8," +
      encodeURIComponent(JSON.stringify(this.get("model")))
    );
  }.property("model"),

  // Used by FileSaver example only
  actions: {
    downloadFile: function() {
      return this.fileSaver.save(
        JSON.stringify(this.get("model")),
        "application/json",
        this.get("suggestedFilename")
      );
    }
  }
});

App.inject('controller:index', 'fileSaver', 'lib:fileSaver');
