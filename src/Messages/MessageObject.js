"use strict";

module.exports = class MessageObject {
  constructor(to, from, channel, client_ref) {
    this.to = to;
    this.from = from;
    this.channel = channel;
    this.client_ref = client_ref || null;
  }
};
