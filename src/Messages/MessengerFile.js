"use strict";

const FileMessageObject = require("./FileMessageObject");

module.exports = class MessengerFile extends FileMessageObject {
  constructor(file, to, from, messenger, client_ref) {
    super(file, to, from, "messenger", client_ref);

    this.messenger = messenger;
  }
};
