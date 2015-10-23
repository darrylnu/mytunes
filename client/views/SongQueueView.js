// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",
  initialize: function() {
    debugger;
// this.collection.on('add remove', this.render, this);
var this2 = this; 
    setInterval(function(){
      this2.render()},3000);
  },

  render: function() {
    // debugger;
    this.$el.children().detach;
    debugger;
      this.$el.html('<th>Song Queue</th>').append(
          this.collection.map(function(song){
              return new SongQueueEntryView({model:song}).render();
          })      
      );
      
    
    debugger;    
    return this.$el;
  }

});
