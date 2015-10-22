// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    debugger;
    this.songQueueView = new SongQueueView({model : this.model.get('songQueue').models});
    debugger;
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    debugger;
    // this.songQueueEntryView = new songQueueEntryView({model:this.model.get('songQueue')});
    // this.songQueueView = new SongQueueView({collection: this.model.get('library')});
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);
    
    this.libraryView.collection.on('enqueue', function(model){
      debugger;
      this.songQueueView.render();
      debugger;
    }, this);
    // this.model.on('change:nextSongInQueue', function(model){
    //   this.songQueueView.push(model.get('nextSongInQueue'));
    // }, this);
    // this.model.on('change:songQueue', function(model){
    //   // debugger;
    //   this.playerView.setSong(model.get('songQueue'));
    // }, this);
  
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
       this.songQueueView.$el
      // this.song
    ]);
  }

});
