"use strict";

const MessageObject = require("./MessageObject");

module.exports = class FileMessageObject extends MessageObject {
  constructor(file, to, from, channel, client_ref) {
    super(to, from, channel, client_ref);

    this.file = file;
    this.message_type = "file";
  }
};
