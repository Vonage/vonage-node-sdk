"use strict";

const MessageObject = require("./MessageObject");

module.exports = class WhatsAppCustom extends MessageObject {
  constructor(custom, to, from, client_ref) {
    super(to, from, "whatsapp", client_ref);

    this.custom = custom;
    this.message_type = "custom";
  }
};
