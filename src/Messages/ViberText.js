"use strict";

const TextMessageObject = require("./TextMessageObject");

module.exports = class ViberText extends TextMessageObject {
  constructor(text, to, from, viber_service, client_ref) {
    super(text, to, from, "viber_service", client_ref);

    this.viber_service = viber_service;
  }
};
