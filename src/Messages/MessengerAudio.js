"use strict";

const AudioMessageObject = require("./AudioMessageObject");

module.exports = class MessengerAudio extends AudioMessageObject {
  constructor(audio, to, from, messenger, client_ref) {
    super(audio, to, from, "messenger", client_ref);

    this.messenger = messenger;
  }
};
