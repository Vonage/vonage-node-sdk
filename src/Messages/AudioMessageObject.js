"use strict";

const MessageObject = require("./MessageObject");

module.exports = class AudioMessageObject extends MessageObject {
  constructor(audio, to, from, channel, client_ref) {
    super(to, from, channel, client_ref);

    this.audio = audio;
    this.message_type = "audio";
  }
};
