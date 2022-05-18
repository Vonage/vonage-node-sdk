"use strict";

const MessageObject = require("./MessageObject");

module.exports = class MMSVcard extends MessageObject {
  constructor(vcard_url, to, from, client_ref) {
    super(to, from, client_ref);
    this.vcard = { url: vcard_url };
    this.channel = "mms";
    this.message_type = "vcard";
  }
};
