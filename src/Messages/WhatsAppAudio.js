"use strict";

const AudioMessageObject = require("./AudioMessageObject");

module.exports = class WhatsAppAudio extends AudioMessageObject {
  constructor(audio, to, from, client_ref) {
    super(audio, to, from, "whatsapp", client_ref);
  }
};
