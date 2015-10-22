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
    if (this.model !== undefined) {
      this.$el.html('<th>Song Queue</th>').append(
          this.model.map(function(song){
              return new SongQueueEntryView({model:song}).render();
          })      
      );
      
    }
    debugger;    
    return this.$el;
  }

});
