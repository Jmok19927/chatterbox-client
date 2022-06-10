// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    // call render?
  },

  render: function() {
    // TODO: Render _all_ the messages.

    /*
    for loop checking through our messages storage.
      for each message object check if the room matches our current room
      if it does match, call render message on it to make it appear
    */
  },

  renderMessage: function(message) {
    // TODO: Render a single message.

    //take a message object from our messages storage
    //pass it into our messageView render which turns it into a DOM element
    //prepend (goes to the top) the DOM element to $chats
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).


    /* on click function, on click, check if the target is a username
    if it is a username element, access the text of the username
    toggle that username in our friends.js, if its not a friend add it, if it is a friend, remove it from the set. (calling friends.toggle?)
    */
  }

};