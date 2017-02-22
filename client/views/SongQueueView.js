// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table', 

  initialize: function() {
    this.render();
/*    this.collection.forEach(function(song) {
      var entry = new SongQueueEntryView(song);
      entry.render();
    }, this);*/
    this.collection.on('update', function() {
      this.render();
    }.bind(this));

    // this.collection.on('add', this.render, this);
    // this.collection.on('remove', this.render, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
    //return this.$el;
  }

});
