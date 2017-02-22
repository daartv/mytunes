// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,


  initialize: function() {
    $.ajax({
      url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        console.log('Data retrieved successfully.');
        this.add(data.results);
        this.trigger('update');
      }.bind(this),
      error: function() {
        console.error('Error in retrieving data.');
      }
    });
  },

});