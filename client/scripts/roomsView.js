// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  inputtedRoomName: '',

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleClick);
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms.

    // call render room for each room in the room list
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    //RoomsView.$select
    // var cleanName = _.template(
    //   "<option value='<%-roomname%>'><%-roomname%></option>"
    // );
    RoomsView.$select.append(`<option value='${roomname}'>${roomname}</option>`);
    // take in a roomname, append it to the dropdown list?
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.

    // change a variable of 'active room' on selecting it from the dropdown, grabbing the text element
    //re-render the message view to only render messages of the active room


  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.


    let handleRoomName = function() {
      console.log('clicked add room');
      let roomName = prompt("input room name", "");
      let sanitized = roomName // _.template(
      //   "<%-roomName%>"
      // )();
      if (sanitized !== null && sanitized !== "") {
        RoomsView.renderRoom(sanitized);
      }
    }

    handleRoomName();
    // RoomsView.$button.on('click', handleRoomName);

    /*

    only do that if the room does not already exist, if the room exists in the room list, change the active room var to the room typed in and rerender.
    */
  }

};
