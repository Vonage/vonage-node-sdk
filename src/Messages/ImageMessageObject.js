"use strict";

const MessageObject = require("./MessageObject");

module.exports = class ImageMessageObject extends MessageObject {
  constructor(image, to, from, channel, client_ref) {
    super(to, from, channel, client_ref);

    this.image = image;
    this.message_type = "image";
  }
};
