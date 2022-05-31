"use strict";

const MessageObject = require("./MessageObject");

module.exports = class WhatsAppTemplate extends MessageObject {
  constructor(template, whatsapp, to, from, client_ref) {
    super(to, from, "whatsapp", client_ref);

    this.template = template;
    this.whatsapp = whatsapp;
    this.message_type = "template";
  }
};
