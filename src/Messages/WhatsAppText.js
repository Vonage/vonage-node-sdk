"use strict";

const TextMessageObject = require("./TextMessageObject");

module.exports = class WhatsAppText extends TextMessageObject {
  constructor(text, to, from, client_ref) {
    super(text, to, from, "whatsapp", client_ref);
  }
};
