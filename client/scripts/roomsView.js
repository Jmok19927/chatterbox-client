// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  inputtedRoomName: '',

  initialize: function() {
    RoomsView.$button.off().on('click',RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.render();
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.renderRoom(null);
    Rooms._data.forEach((roomname) => {
      RoomsView.renderRoom(roomname);
    })

;
    // call render room for each room in the room list
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    //RoomsView.$select
    // var cleanName = _.template(
    //   "<option value='<%-roomname%>'><%-roomname%></option>"
    // );
    if (typeof roomname !== "string" && roomname !== null) {
      return;
    }
    if (!Rooms._appended.has(roomname)) {
      let sanitized = _.template(`<%-roomName%>`)({roomName : roomname});
      RoomsView.$select.append(`<option value='${sanitized}'>${sanitized}</option>`);
      Rooms.addRoom(roomname);
      Rooms._appended.add(roomname);
    }
    // take in a roomname, append it to the dropdown list?
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    RoomsView.inputtedRoomName = RoomsView.$select.val();
    MessagesView.render();
    // change a variable of 'active room' on selecting it from the dropdown, grabbing the text element
    //re-render the message view to only render messages of the active room


  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.

    let promptMessage = prompt('input room name',"");
    //console.log('clicked add room');
    // let roomName = prompt("input room name", "");
    let sanitized =  promptMessage;//_.template(
      //"<%-promptItem%>"
      //)({promptItem : promptMessage});
    if (sanitized !== null) {
      RoomsView.renderRoom(sanitized);
    }

    // RoomsView.$button.on('click', handleRoomName);

    /*

    only do that if the room does not already exist, if the room exists in the room list, change the active room var to the room typed in and rerender.
    */
  }

};