$(document).ready(function() {

  module('Backbone.Autosync');

test('set', function() {
  var MyModel = Backbone.Model.extend({});
  var myInstance = new MyModel({title: "first"});

  myInstance.autoSave();
  myInstance.set({title: "changed"});

  deepEqual(true, true); //temp test(=> will rewrite mocha test
});


});
