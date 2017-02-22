// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table', 

  initialize: function() {
    this.render();

    this.collection.on('update', function() {
      this.render();
    }.bind(this));

  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
