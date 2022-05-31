"use strict";

const ImageMessageObject = require("./ImageMessageObject");

module.exports = class ViberImage extends ImageMessageObject {
  constructor(image, to, from, viber_service, client_ref) {
    super(image, to, from, "viber_service", client_ref);

    this.viber_service = viber_service;
  }
};
