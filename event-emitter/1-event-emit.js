const event = require("events");

const customEvent = new event();

// the .on() listens for events
customEvent.on("response", () => {
  console.log("data received");
});

// the .emit() emits an event


customEvent.emit('response')