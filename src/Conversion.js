"use strict";

class Conversion {
  constructor(credentials, options) {
    this.creds = credentials;
    this.options = options;
  }

  voice(message_id, delivered, timestamp, callback) {
    return this.submit("voice", message_id, delivered, timestamp, callback);
  }

  sms(message_id, delivered, timestamp, callback) {
    return this.submit("sms", message_id, delivered, timestamp, callback);
  }

  submit(type, message_id, delivered, timestamp, callback) {
    return this.options.api.postUseQueryString(
      "/conversions/" + type,
      { "message-id": message_id, delivered, timestamp },
      this.options.api._addLimitedAccessMessageToErrors(callback, 402)
    );
  }
}

export default Conversion;
