"use strict";

var querystring = require("querystring");

var up = {};

var _options = null;

// Error message resources are maintained globally in one place for easy management
var ERROR_MESSAGES = {
  sender: "Invalid from address",
  to: "Invalid to address",
  msisdn: "Invalid MSISDN passed",
  maxDigits: "Invalid max digits for TTS prompt",
  byeText: "Invalid bye text for TTS prompt",
  pinCode: "Invalid pin code for TTS confirm",
  failedText: "Invalid failed text for TTS confirm",
  product: "Invalid product. Should be one of [voice, sms]"
};

exports.initialize = function(pkey, psecret, options) {
  if (!pkey || !psecret) {
    throw "key and secret cannot be empty, set valid values";
  }
  up = {
    api_key: pkey,
    api_secret: psecret
  };
  _options = options;
};

function clone(a) {
  return JSON.parse(JSON.stringify(a));
}

function getEndpoint(action) {
  return { path: action };
}

function sendRequest(endpoint, method, callback) {
  endpoint.path =
    endpoint.path +
    (endpoint.path.indexOf("?") > 0 ? "&" : "?") +
    querystring.stringify(up);
  _options.httpClient.request(endpoint, method, callback);
}

exports.checkBalance = function(callback) {
  var balanceEndpoint = getEndpoint("/account/get-balance");
  sendRequest(balanceEndpoint, callback);
};

function sendError(callback, err, returnData) {
  // Throw the error in case if there is no callback passed
  if (callback) {
    callback(err, returnData);
  } else {
    throw err;
  }
}

exports.setHost = function(aHost) {
  niEndpoint.host = aHost;
  niStandardEndpoint.host = aHost;
};
