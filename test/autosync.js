$(document).ready(function() {

  module('Backbone.Autosync');

  var MyModel = Backbone.Model.extend({urlRoot: "faked"});

  asyncTest('autosave run interval save', _.bind(function() {

    this.myInstance = new MyModel({title: "first"});
    this.spySave = sinon.spy(this.myInstance, "save");
    this.myInstance.autoSave(100);
    this.myInstance.set({title: "changed"});

    setTimeout(_.bind(function() {
      deepEqual(this.myInstance.nowSyncLock, false);
      ok(this.spySave.calledOnce);
      start();
    }, this), 500);
  }, this));

  asyncTest('stopAutoSave can stop interval saving', _.bind(function() {
    this.myInstance = new MyModel({title: "first"});
    this.spySave = sinon.spy(this.myInstance, "save");
    this.myInstance.autoSave(100);
    this.myInstance.stopAutoSave();

    this.myInstance.set({title: "changed"});

    setTimeout(_.bind(function() {
      ok(! this.spySave.calledOnce);
      ok(this.myInstance.hasChanged());
      start();
    }, this), 500);

  },this));
});
