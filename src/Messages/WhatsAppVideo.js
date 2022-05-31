"use strict";

const VideoMessageObject = require("./VideoMessageObject");

module.exports = class WhatsAppVideo extends VideoMessageObject {
  constructor(video, to, from, client_ref) {
    super(video, to, from, "whatsapp", client_ref);
  }
};
