// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();  
      }  
    });

    this.on('ended', function() {
      this.shift();
      //check if there any more songs
      if (this.length > 0) {
        //playFirst if there are
        this.playFirst();
      }
    });

    this.on('dequeue', function() {
      this.remove(this.at(0));
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }
});