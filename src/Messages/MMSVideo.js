"use strict";

const VideoMessageObject = require("./VideoMessageObject");

module.exports = class MMSVideo extends VideoMessageObject {
  constructor(video, to, from, client_ref) {
    super(video, to, from, "mms", client_ref);
  }
};
