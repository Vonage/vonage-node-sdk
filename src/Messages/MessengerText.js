"use strict";

const TextMessageObject = require("./TextMessageObject");

module.exports = class MessengerText extends TextMessageObject {
  constructor(text, to, from, messenger, client_ref) {
    super(text, to, from, "messenger", client_ref);

    this.messenger = messenger;
  }
};
