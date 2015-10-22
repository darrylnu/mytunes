// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
  },

  setQueue: function(songQueue){
    // debugger;
    this.model = songQueue;
    this.render();
  },

  render: function(){
    // debugger;
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
