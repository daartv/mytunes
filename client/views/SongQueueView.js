// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.forEach(function(song) {
      var entry = new SongQueueEntryView(song);
      entry.render();
    }, this);

    this.collection.on('add', this.render);
    this.collection.on('remove', this.render);
  },

  render: function() {
    return this.$el;
  }

});
