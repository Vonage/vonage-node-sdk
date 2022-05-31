"use strict";

const FileMessageObject = require("./FileMessageObject");

module.exports = class WhatsAppFile extends FileMessageObject {
  constructor(file, to, from, client_ref) {
    super(file, to, from, "whatsapp", client_ref);
  }
};
