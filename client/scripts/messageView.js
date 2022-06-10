// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(
    // fix by adding between the username div <%-user%>
    // add between the empty div <%-text%>
    // the % is grabbing this information from the message option passed in.
    // - is for escape to prevent certain characters that can mess with our html
    // change from template literal into concat double quotes?
    `
      <!--
      <div class="chat">
        <div class="username"></div>
        <div></div>
      </div>
      -->
    `)

};