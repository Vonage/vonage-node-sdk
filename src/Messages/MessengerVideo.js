"use strict";

const VideoMessageObject = require("./VideoMessageObject");

module.exports = class MessengerVideo extends VideoMessageObject {
  constructor(video, to, from, messenger, client_ref) {
    super(video, to, from, "messenger", client_ref);

    this.messenger = messenger;
  }
};
