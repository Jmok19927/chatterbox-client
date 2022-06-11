// This App object represents the Chatterbrenderox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',



  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API

    // call set interval with fetch to continually refresh
    setInterval(App.fetch, 2500);

    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data , "data in parse");
      Messages._data = data;
      MessagesView.initialize();
      data.forEach((messageObject) => {
        Rooms._data.add(messageObject.roomname);
      })
      RoomsView.initialize();

      // data.forEach((message) => {
      //   Messages._data.push(message);
      // })


      callback();

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

      /* grab data using parse.readall,
      with the data, put it into messages.js to 'hold' all the message data
      call messages viewer to render/append all the message data we got onto our HTML DOM

      do the same steps for rooms, get the room names that exist on server
      save it into rooms storage object
      call roomsview to update our dropdown list of rooms

      can use the callback function to start and stop spinner picture while fetching.
      */

    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
