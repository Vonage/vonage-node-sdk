"use strict";

const MessageObject = require("./MessageObject");

module.exports = class TextMessageObject extends MessageObject {
  constructor(text, to, from, channel, client_ref) {
    super(to, from, channel, client_ref);

    this.text = text;
    this.message_type = "text";
  }
};
