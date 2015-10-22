// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    debugger;
    this.render();
  },

  render: function() {
    debugger;
    this.$el.children().detach;
    debugger;
    this.$el.html('<th>SongQueue</th>').append(
        this.collection.map(function(song){
            return new SongQueueEntryView({model:song}).render();
        })      
    );
    debugger;    
    return this.$el;
  }

});
