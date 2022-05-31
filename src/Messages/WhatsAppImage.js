"use strict";

const ImageMessageObject = require("./ImageMessageObject");

module.exports = class WhatsAppImage extends ImageMessageObject {
  constructor(image, to, from, client_ref) {
    super(image, to, from, "whatsapp", client_ref);
  }
};
