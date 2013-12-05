// backbone-autosync 0.1.0
//
// (c) 2013 ryuma.tsukano
// Licensed under the MIT license.

(function(Backbone) {

  _.extend(Backbone.Model.prototype, {
    autoSave: function(intervalMilliSec) {
      if(typeof intervalMilliSec == 'undefined')
        intervalMilliSec = 1000;

      this.nowSyncLock = false;
      this.saveInterval = setInterval(_.bind(function() {
        if (this.hasChanged() && this.nowSyncLock === false) {
          this.nowSyncLock = true;
          this.save({}, {
            success: _.bind(function(){ this.nowSyncLock = false;}, this),
            error  : _.bind(function(){ this.nowSyncLock = false;}, this)
          });
        }
      }, this), intervalMilliSec);
    },

    stopAutoSave: function(){
      if (typeof this.saveInterval != 'undefined') {
        clearInterval(this.saveInterval);
      }
    }
  });
}).call(this, Backbone);
