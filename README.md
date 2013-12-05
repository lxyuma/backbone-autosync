# backbone-autosync

Backbone.Autosync is Backbone plugin for saving model automatically.

You may be afraid of polling save. But, don't be afraid.

Backbone.autosync is very ```lazy polling```.(so, not strictly realtime sync)

And it is suitable for saving draft, or setting without ok/cancel. (like mac)

# Installation

- clone

```
git clone git@github.com:lxyuma/backbone-autosync.git
```

pick ```backbone-autosync.js``` to your html.


# usage

it's very easy. You only add ```autoSave()``` after initialize model.

```
var YourModel = Backbone.Model.extends({})

var yourView = Backbone.View.extends({
  events : {
    "keydown #title" : "onKeydownTitle"
  },
  initialize: function(){
    this.model = new YourModel;
    this.model.autoSave();
  },
  onKeydownTitle: funtion {
    this.model.set('title', $('#title').val());
  }
});
```

# recommend

I strongly recommend you to use with Backbone.stickit.

It provides data bindings in Backbone.So, you don't need to set form data.
Caution: please use with ```updateView:false``` like that.

```

```

Because, if you don't use this setting, it may be occured unexpected results.(for example, autosync write automatticaly updated_at

