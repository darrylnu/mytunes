// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    debugger;
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueEntryView = new songQueueEntryView({model:this.model.get('songQueue')});
    this.songQueueView = new SongQueueView({collection: this.model.get('library')});
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      // debugger;
      this.playerView.setSong(model.get('currentSong'));
      this.songQueueEntryView.setQueue(model.get('songQueueEntryView'));
    }, this);
    
    // this.model.on('change:songQueue', function(model){
    //   // debugger;
    //   this.playerView.setSong(model.get('songQueue'));
    // }, this);
  
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      // this.songQueueView.$el
      // this.song
    ]);
  }

});
