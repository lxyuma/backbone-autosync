$(document).ready(function() {

  module('Backbone.Autosync');

asyncTest('set', function() {
  var MyModel = Backbone.Model.extend({urlRoot: "faked"});
  this.myInstance = new MyModel({title: "first"});

  this.myInstance.autoSave();
  this.myInstance.set({title: "changed"});

  this.spySave = sinon.spy(this.myInstance, "save");

  setTimeout(_.bind(function() {
    deepEqual(this.myInstance.nowSyncLock, false);
    ok(this.spySave.calledOnce);
    start();
  }, this), 2000);
});


});
