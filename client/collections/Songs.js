// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,


  initialize: function() {
    var context = this;
    $.ajax({
      url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        this.add(data.results);
      }.bind(this),
      error: function() {
        console.error('Error in retrieving data.');
      }
    });
  },

});