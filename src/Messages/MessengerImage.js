"use strict";

const ImageMessageObject = require("./ImageMessageObject");

module.exports = class MessengerImage extends ImageMessageObject {
  constructor(image, to, from, messenger, client_ref) {
    super(image, to, from, "messenger", client_ref);

    this.messenger = messenger;
  }
};
