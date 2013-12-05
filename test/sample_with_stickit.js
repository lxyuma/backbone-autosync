$(document).ready(function() {

  module('Backbone.Autosync.with.stickit');

  var MyModel = Backbone.Model.extend({ urlRoot: "faked" })
  var MyView = Backbone.View.extend({
    bindings: {
      "#title": "title"
    },
    render: function(){
      this.$el.html($('<input>', {"id": "title", "type": "TEXT"}));
      return this;
    }
  });


  asyncTest('autosave run interval save', _.bind(function() {

    this.myModel = new MyModel({title: "first"});
    this.myView = new MyView({model: this.myModel});
    this.myView.render();
    this.myView.stickit();

    this.spySave = sinon.spy(this.myModel, "save");
    this.myModel.autoSave({interval:100});
    this.myView.$("#title").val('changed!');
    this.myView.$("#title").trigger('change');

    setTimeout(_.bind(function() {
      deepEqual(this.myModel.get('title'), 'changed!');
      deepEqual(this.myModel.nowSyncLock, false);
      ok(this.spySave.calledOnce);
      start();
    }, this), 500);
  }, this));

});
