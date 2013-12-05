// backbone-autosync 0.1.0
//
// (c) 2013 ryuma.tsukano
// Licensed under the MIT license.

(function(Backbone) {

  _.extend(Backbone.Model.prototype, {
    autoSave: function(options) {
      var interval  = typeof options.interval === 'undefined' ? 1000 : options.interval;
      var debugMode = typeof options.debugMode !== 'undefined' && options.debugMode === true ? true : false

      showLog("start test", debugMode);

      this.nowSyncLock = false;
      this.saveInterval = setInterval(_.bind(function() {
        showLog("now interval checking", debugMode);

        if (this.hasChanged() && this.nowSyncLock === false) {
          this.nowSyncLock = true;
          this.save({}, {
            success: _.bind(function(){ this.nowSyncLock = false;}, this),
            error  : _.bind(function(){ this.nowSyncLock = false;}, this)
          });
          showLog("now saving", debugMode);

        }
      }, this), interval);
    },

    stopAutoSave: function(){
      if (typeof this.saveInterval != 'undefined') {
        clearInterval(this.saveInterval);
      }
    }
  });
  var showLog = function(message, debugMode){
    if(typeof debugMode !== 'undefined' && debugMode === true){
      console.log('Backbone.autosync:DEBUG_MODE:' + message);
    }
  };

}).call(this, Backbone);
