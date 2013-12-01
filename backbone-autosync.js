// backbone-autosync 0.1.0
//
// (c) 2013 ryuma.tsukano
// Licensed under the MIT license.

(function(Backbone) {

  _.extend(Backbone.Model.prototype, {
    autoSave: function(intervalMilliSec) {
      if(typeof intervalMilliSec == 'undefined')
        intervalMilliSec = 1000;

      nowSyncLock = false;
      setInterval(function() {
        if (this.hasChanged() && nowSyncLock == false) {
          nowSyncLock = true;
          this.save({}, {
            success: function(){ nowSyncLock = false }, //must be this bindings (error too)
            error  : function(){ nowSyncLock = false }
          });
        }
      }, intervalMilliSec);
    }
  });

  //var startSync = function(){
  //  setInterval(
  //};

}).call(this, Backbone);
