// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var newMessage = {};
    newMessage.username = App.username;
    newMessage.text = $('#message').val();// idk pull the text from the textDOM
    newMessage.roomname = RoomsView.$select.val() || ''; // grab our current room or default to ''
    Parse.create(newMessage);
    $('#message').val('');
    setTimeout(App.fetch, 100);

    /*
    create a message object to hold our data from the form
      within the message object:
      take our current username - set it as user:
      take the message from inside the text box - set it as text:
      take the room name that we're in : set as roomname:

      take newly created message object and use Parse.create to push it to the server.

      rest should take care of it to show up when we push to server, fetch it back and it should pop up.
    */

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    // console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};