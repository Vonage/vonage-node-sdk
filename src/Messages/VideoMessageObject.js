"use strict";

const MessageObject = require("./MessageObject");

module.exports = class VideoMessageObject extends MessageObject {
  constructor(video, to, from, channel, client_ref) {
    super(to, from, channel, client_ref);

    this.video = video;
    this.message_type = "video";
  }
};
