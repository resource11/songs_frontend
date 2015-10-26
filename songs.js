'use strict';

// begin document ready
$(document).ready(function() {

  // get DOM element for ul with id attribute 'songs'
  var $songList = $('#songs');

  // the URL of the JSON file
  var songs_url = "http://localhost:5000/songs.json"

  // begin click handler
  $('#songs_button').on('click', function(event) {

    // the AJAX request to return a responsePromise
    var responsePromise = $.ajax({
      method: 'GET',
      url: songs_url,
      dataType: 'json'
    });

    // begin .done() method handler

    // the http response handler, which will pass in
    // the songs.json file formatted into a string
    var songsResponseHandler = function(songsData) {

      // console log the stringified JSON file
      // returned from the AJAX request
      console.log("songsData is ", songsData);

      // take the stringified JSON file and
      // convert it to a JS object named 'songs'
      var songs = JSON.parse(songsData);
      console.log("songs are ", songs);

      // iterate through the JS array of songs and
      // append each song to an individual li in
      // the ul with the id attribute 'songs'
      // using the title property value for each
      // song object in the songs array

      // so the 'song' parameter is a reminder that
      // the argument passed in is an element in the
      // songs array
      songs.forEach(function(song){
        $songList.append("<li>" + song.title + "</li>")
      });

    };
    // end .done() method handler

    // the requestPromise .done() method
    responsePromise.done(songsResponseHandler);


    // the requestPromise .fail() method
    responsePromise.fail(function(data){
          var errorMsg = 'Error: Accessing the URL' + songs_url;
          alert(errorMsg);
          console.log(errorMsg);
    });


  });
  // end click handler

});
// end document ready
