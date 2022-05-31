"use strict";

const AudioMessageObject = require("./AudioMessageObject");

module.exports = class MMSAudio extends AudioMessageObject {
  constructor(audio, to, from, client_ref) {
    super(audio, to, from, "mms", client_ref);
  }
};
