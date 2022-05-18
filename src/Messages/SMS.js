"use strict";

const TextMessageObject = require("./TextMessageObject");

module.exports = class SMS extends TextMessageObject {
  constructor(text, to, from, client_ref) {
    super(text, to, from, "sms", client_ref);
  }
};
