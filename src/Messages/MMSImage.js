"use strict";

const ImageMessageObject = require("./ImageMessageObject");

module.exports = class MMSImage extends ImageMessageObject {
  constructor(image, to, from, client_ref) {
    super(image, to, from, "mms", client_ref);
  }
};
