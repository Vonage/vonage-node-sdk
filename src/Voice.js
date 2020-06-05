"use strict";

import Utils from "./Utils";

class Voice {
  static get ERROR_MESSAGES() {
    return {
      to: "Invalid to address",
      msg: "Invalid Text Message",
      maxDigits: "Invalid max digits for TTS prompt",
      byeText: "Invalid bye text for TTS prompt",
      pinCode: "Invalid pin code for TTS confirm",
      failedText: "Invalid failed text for TTS confirm",
      answerUrl: "Invalid answer URL for call"
    };
  }
  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Addition  options.
   */
  constructor(credentials, options = {}) {
    this.creds = credentials;
    this.options = options;
  }

  _sendVoiceMessage(endpoint, data, callback) {
    if (!data.to) {
      Utils.sendError(callback, new Error(ERROR_MESSAGES.to));
    } else {
      data["api_key"] = this.creds.apiKey;
      data["api_secret"] = this.creds.apiSecret;
      this.options.logger.info(
        "sending TTS message to " + data.to + " with message " + data.text
      );
      this.options.httpClient.request(
        {
          host: endpoint.host,
          path: Utils.createPathWithQuery(endpoint.path, data)
        },
        "POST",
        (err, apiResponse) => {
          if (!err && apiResponse.status && apiResponse.status > 0) {
            Utils.sendError(
              callback,
              new Error(apiResponse["error-text"]),
              apiResponse
            );
          } else {
            if (callback) callback(err, apiResponse);
          }
        }
      );
    }
  }

  /**
   * TODO: document
   */
  sendTTSMessage(recipient, message, opts, callback) {
    if (!message) {
      Utils.sendError(callback, new Error(Voice.ERROR_MESSAGES.msg));
    } else {
      if (!opts) {
        opts = {};
      }
      opts["to"] = recipient;
      opts["text"] = message;
      this._sendVoiceMessage(
        {
          host: this.options.apiHost || "api.nexmo.com",
          path: "/tts/json"
        },
        opts,
        callback
      );
    }
  }

  /**
   * TODO: remove with next major version, API is 404
   */
  sendTTSPromptWithCapture(
    recipient,
    message,
    maxDigits,
    byeText,
    opts,
    callback
  ) {
    if (!message) {
      Utils.sendError(callback, new Error(Voice.ERROR_MESSAGES.msg));
    } else if (!maxDigits || isNaN(maxDigits) || maxDigits.length > 16) {
      Utils.sendError(callback, new Error(Voice.ERROR_MESSAGES.maxDigits));
    } else if (!byeText) {
      Utils.sendError(callback, new Error(Voice.ERROR_MESSAGES.byeText));
    } else {
      if (!opts) {
        opts = {};
      }
      opts["to"] = recipient;
      opts["text"] = message;
      opts["max_digits"] = maxDigits;
      opts["bye_text"] = byeText;
      this._sendVoiceMessage(
        {
          host: this.options.apiHost || "api.nexmo.com",
          path: "/tts-prompt/json"
        },
        opts,
        callback
      );
    }
  }

  /**
   * TODO: remove with next major version, API is 404
   */
  sendTTSPromptWithConfirm(
    recipient,
    message,
    maxDigits,
    pinCode,
    byeText,
    failedText,
    opts,
    callback
  ) {
    if (!message) {
      Utils.sendError(callback, new Error(Voice.ERROR_MESSAGES.msg));
    } else if (!maxDigits || isNaN(maxDigits) || maxDigits.length > 16) {
      Utils.sendError(callback, new Error(Voice.ERROR_MESSAGES.maxDigits));
    } else if (!pinCode || pinCode.length !== maxDigits) {
      Utils.sendError(callback, new Error(Voice.ERROR_MESSAGES.pinCode));
    } else if (!byeText) {
      Utils.sendError(callback, new Error(Voice.ERROR_MESSAGES.byeText));
    } else if (!failedText) {
      Utils.sendError(callback, new Error(Voice.ERROR_MESSAGES.failedText));
    } else {
      if (!opts) {
        opts = {};
      }
      opts["to"] = recipient;
      opts["text"] = message;
      opts["max_digits"] = maxDigits;
      opts["pin_code"] = pinCode;
      opts["bye_text"] = byeText;
      opts["failed_text"] = failedText;
      this._sendVoiceMessage(
        {
          host: this.options.apiHost || "api.nexmo.com",
          path: "/tts-prompt/json"
        },
        opts,
        callback
      );
    }
  }

  /**
   * TODO: remove with next major version, API is 404
   */
  call(recipient, answerUrl, opts, callback) {
    if (!answerUrl) {
      Utils.sendError(callback, new Error(Voice.ERROR_MESSAGES.answerUrl));
    } else {
      if (!opts) {
        opts = {};
      }
      opts["to"] = recipient;
      opts["answer_url"] = answerUrl;
      this._sendVoiceMessage(
        {
          host: this.options.restHost || "rest.nexmo.com",
          path: "/call/json"
        },
        opts,
        callback
      );
    }
  }
}

export default Voice;
