"use strict";

var querystring = require("querystring");

var msgpath = { host: "rest.nexmo.com", path: "/sms/json" };
var shortcodePath = { host: "rest.nexmo.com", path: "/sc/us/${type}/json" };
var ttsEndpoint = { host: "api.nexmo.com", path: "/tts/json" };
var ttsPromptEndpoint = { host: "api.nexmo.com", path: "/tts-prompt/json" };
var callEndpoint = { host: "rest.nexmo.com", path: "/call/json" };
var verifyEndpoint = { host: "api.nexmo.com", path: "/verify/json" };
var checkVerifyEndpoint = { host: "api.nexmo.com", path: "/verify/check/json" };
var controlVerifyEndpoint = {
  host: "api.nexmo.com",
  path: "/verify/control/json"
};
var searchVerifyEndpoint = {
  host: "api.nexmo.com",
  path: "/verify/search/json"
};
var niEndpoint = { host: "api.nexmo.com", path: "/ni/advanced/async/json" };
var niBasicEndpoint = { host: "api.nexmo.com", path: "/ni/basic/json" };
var niStandardEndpoint = { host: "api.nexmo.com", path: "/ni/standard/json" };
var niAdvancedEndpoint = { host: "api.nexmo.com", path: "/ni/advanced/json" };
var applicationsEndpoint = { host: "api.nexmo.com", path: "/v1/applications" };
var up = {};
var numberPattern = new RegExp("^[0-9 +()-]*$");

var _options = null;

// Error message resources are maintained globally in one place for easy management
var ERROR_MESSAGES = {
  sender: "Invalid from address",
  to: "Invalid to address",
  msg: "Invalid Text Message",
  msgParams: "Invalid shortcode message parameters",
  countrycode: "Invalid Country Code",
  msisdn: "Invalid MSISDN passed",
  body: "Invalid Body value in Binary Message",
  udh: "Invalid udh value in Binary Message",
  title: "Invalid title in WAP Push message",
  url: "Invalid url in WAP Push message",
  maxDigits: "Invalid max digits for TTS prompt",
  byeText: "Invalid bye text for TTS prompt",
  pinCode: "Invalid pin code for TTS confirm",
  failedText: "Invalid failed text for TTS confirm",
  answerUrl: "Invalid answer URL for call",
  verifyValidation: "Missing Mandatory fields (number and/or brand)",
  checkVerifyValidation: "Missing Mandatory fields (request_id and/or code)",
  controlVerifyValidation:
    "Missing Mandatory fields (request_id and/or cmd-command)",
  searchVerifyValidation:
    "Missing Mandatory fields (request_id or request_ids)",
  numberInsightAdvancedValidation:
    "Missing Mandatory fields (number and/or callback url)",
  numberInsightValidation: "Missing Mandatory field - number",
  numberInsightPatternFailure:
    "Number can contain digits and may include any or all of the following: white space, -,+, (, ).",
  optionsNotAnObject:
    "Options parameter should be a dictionary. Check the docs for valid properties for options",
  applicationName: "Invalid argument: name",
  applicationType: "Invalid argument: type",
  applicationAnswerUrl: "Invalid argument: answerUrl",
  applicationEventUrl: "Invalid argument: eventUrl",
  applicationId: "Invalid argument: appId",
  product: "Invalid product. Should be one of [voice, sms]"
};

exports.initialize = function(pkey, psecret, options) {
  // These can default to empty as we may provide a private key for JWT auth
  // In that situation, private key and secret are not required. If you don't provide
  // A key/secret and try and make a request you'll get a 401 error back
  pkey = pkey || "";
  psecret = psecret || "";

  up = {
    api_key: pkey,
    api_secret: psecret
  };
  _options = options;
};

exports.sendBinaryMessage = function(sender, recipient, body, udh, callback) {
  if (!body) {
    sendError(callback, new Error(ERROR_MESSAGES.body));
  } else if (!udh) {
    sendError(callback, new Error(ERROR_MESSAGES.udh));
  } else {
    sendMessage(
      {
        from: sender,
        to: recipient,
        type: "binary",
        body: body,
        udh: udh
      },
      callback
    );
  }
};

exports.sendWapPushMessage = function(
  sender,
  recipient,
  title,
  url,
  validity,
  callback
) {
  if (!title) {
    sendError(callback, new Error(ERROR_MESSAGES.title));
  } else if (!url) {
    sendError(callback, new Error(ERROR_MESSAGES.url));
  } else {
    if (typeof validity === "function") {
      callback = validity;
      validity = 86400000;
    }
    sendMessage(
      {
        from: sender,
        to: recipient,
        type: "wappush",
        title: title,
        validity: validity,
        url: url
      },
      callback
    );
  }
};

exports.sendTextMessage = function(sender, recipient, message, opts, callback) {
  if (!message) {
    sendError(callback, new Error(ERROR_MESSAGES.msg));
  } else {
    if (!callback) {
      callback = opts;
      opts = {};
    }
    opts["from"] = sender;
    opts["to"] = recipient;
    opts["text"] = message;
    sendMessage(opts, callback);
  }
};

exports.sendMessage = function(opts, callback) {
  sendMessage(opts, callback);
};
function sendMessage(data, callback) {
  if (!data.from) {
    sendError(callback, new Error(ERROR_MESSAGES.sender));
  } else if (!data.to) {
    sendError(callback, new Error(ERROR_MESSAGES.to));
  } else {
    var path = clone(msgpath);
    path.path += "?" + querystring.stringify(data);
    _options.logger.info(
      "sending message from " +
        data.from +
        " to " +
        data.to +
        " with message " +
        data.text
    );
    sendRequest(path, "POST", function(err, apiResponse) {
      if (!err && apiResponse.status && apiResponse.messages[0].status > 0) {
        sendError(
          callback,
          new Error(apiResponse.messages[0]["error-text"]),
          apiResponse
        );
      } else {
        if (callback) callback(err, apiResponse);
      }
    });
  }
}

function sendViaShortcode(type, recipient, messageParams, opts, callback) {
  if (!recipient) {
    sendError(callback, new Error(ERROR_MESSAGES.to));
  }
  if (!messageParams || !Object.keys(messageParams)) {
    sendError(callback, new Error(ERROR_MESSAGES.msgParams));
  }
  opts = opts || {};
  var path = clone(shortcodePath);
  path.path = path.path.replace("${type}", type);
  Object.keys(messageParams).forEach(function(key) {
    opts[key] = messageParams[key];
  });
  opts.to = recipient;
  path.path += "?" + querystring.stringify(opts);
  _options.logger.info(
    "sending message from shortcode " +
      type +
      " to " +
      recipient +
      " with parameters " +
      JSON.stringify(messageParams)
  );
  sendRequest(path, "POST", function(err, apiResponse) {
    if (!err && apiResponse.status && apiResponse.messages[0].status > 0) {
      sendError(
        callback,
        new Error(apiResponse.messages[0]["error-text"]),
        apiResponse
      );
    } else {
      if (callback) callback(err, apiResponse);
    }
  });
}
exports.shortcodeAlert = function(recipient, messageParams, opts, callback) {
  sendViaShortcode("alert", recipient, messageParams, opts, callback);
};
exports.shortcode2FA = function(recipient, messageParams, opts, callback) {
  sendViaShortcode("2fa", recipient, messageParams, opts, callback);
};
exports.shortcodeMarketing = function(
  recipient,
  messageParams,
  opts,
  callback
) {
  sendViaShortcode("marketing", recipient, messageParams, opts, callback);
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

exports.getPricing = function(countryCode, callback) {
  if (!countryCode || countryCode.length !== 2) {
    sendError(callback, new Error(ERROR_MESSAGES.countrycode));
  } else {
    var pricingEndpoint = getEndpoint("/account/get-pricing/outbound");
    pricingEndpoint.path += "?country=" + countryCode;
    sendRequest(pricingEndpoint, callback);
  }
};

exports.getPhonePricing = function(product, msisdn, callback) {
  if (!product || (product != "sms" && product != "voice")) {
    sendError(callback, new Error(ERROR_MESSAGES.product));
  } else if (!msisdn) {
    sendError(callback, new Error(ERROR_MESSAGES.msisdn));
  } else {
    var pricingEndpoint = getEndpoint("/account/get-phone-pricing/outbound");
    pricingEndpoint.path +=
      "/" + product + "/" + up.api_key + "/" + up.api_secret + "/" + msisdn;
    sendRequest(pricingEndpoint, callback);
  }
};

exports.getNumbers = function(options, callback) {
  var numbersEndpoint = getEndpoint("/account/numbers");
  if (typeof options === "function") {
    callback = options;
  } else if (typeof options === "object") {
    numbersEndpoint.path = numbersEndpoint.path + "?";
    for (var key in options) {
      numbersEndpoint.path =
        numbersEndpoint.path + key + "=" + options[key] + "&";
    }
  } else {
    sendError(callback, new Error(ERROR_MESSAGES.optionsNotAnObject));
    return;
  }
  sendRequest(numbersEndpoint, callback);
};

exports.searchNumbers = function(countryCode, pattern, callback) {
  if (!countryCode || countryCode.length !== 2) {
    sendError(callback, new Error(ERROR_MESSAGES.countrycode));
  } else {
    var searchEndpoint = getEndpoint("/number/search");
    searchEndpoint.path += "?country=" + countryCode;
    if (typeof pattern === "function") {
      callback = pattern;
    } else if (typeof pattern === "object") {
      searchEndpoint.path = searchEndpoint.path + "&";
      for (var arg in pattern) {
        searchEndpoint.path =
          searchEndpoint.path + arg + "=" + pattern[arg] + "&";
      }
    } else {
      searchEndpoint.path = searchEndpoint.path + "&pattern=" + pattern;
    }
    sendRequest(searchEndpoint, callback);
  }
};

exports.buyNumber = function(countryCode, msisdn, callback) {
  if (!countryCode || countryCode.length != 2) {
    sendError(callback, new Error(ERROR_MESSAGES.countrycode));
  } else if (!msisdn) {
    sendError(callback, new Error(ERROR_MESSAGES.msisdn));
  } else {
    var buyEndpoint = getEndpoint("/number/buy");
    buyEndpoint.path += "?country=" + countryCode + "&msisdn=" + msisdn;
    sendRequest(buyEndpoint, "POST", callback);
  }
};

exports.cancelNumber = function(countryCode, msisdn, callback) {
  if (!countryCode || countryCode.length !== 2) {
    sendError(callback, new Error(ERROR_MESSAGES.countrycode));
  } else if (!msisdn) {
    sendError(callback, new Error(ERROR_MESSAGES.msisdn));
  } else {
    var cancelEndpoint = getEndpoint("/number/cancel");
    cancelEndpoint.path += "?country=" + countryCode + "&msisdn=" + msisdn;
    sendRequest(cancelEndpoint, "POST", callback);
  }
};

exports.cancelNumber = function(countryCode, msisdn, callback) {
  if (!countryCode || countryCode.length !== 2) {
    sendError(callback, new Error(ERROR_MESSAGES.countrycode));
  } else if (!msisdn) {
    sendError(callback, new Error(ERROR_MESSAGES.msisdn));
  } else {
    var cancelEndpoint = getEndpoint("/number/cancel");
    cancelEndpoint.path += "?country=" + countryCode + "&msisdn=" + msisdn;
    sendRequest(cancelEndpoint, "POST", callback);
  }
};

exports.updateNumber = function(countryCode, msisdn, params, callback) {
  if (!countryCode || countryCode.length !== 2) {
    sendError(callback, new Error(ERROR_MESSAGES.countrycode));
  } else if (!msisdn) {
    sendError(callback, new Error(ERROR_MESSAGES.msisdn));
  } else {
    var updateEndpoint = getEndpoint("/number/update");
    updateEndpoint.path += "?country=" + countryCode + "&msisdn=" + msisdn;
    updateEndpoint.path = updateEndpoint.path + "&";
    for (var arg in params) {
      updateEndpoint.path =
        updateEndpoint.path + arg + "=" + encodeURIComponent(params[arg]) + "&";
    }
    sendRequest(updateEndpoint, "POST", callback);
  }
};

exports.getApplications = function(options, callback) {
  var endpoint = getEndpoint(applicationsEndpoint.path);
  endpoint.host = applicationsEndpoint.host;
  if (typeof options === "function") {
    callback = options;
  } else if (typeof options === "object") {
    endpoint.path += "?";
    for (var key in options) {
      endpoint.path += key + "=" + options[key] + "&";
    }
  } else {
    sendError(callback, new Error(ERROR_MESSAGES.optionsNotAnObject));
    return;
  }
  sendRequest(endpoint, callback);
};

exports.createApplication = function(
  name,
  type,
  answerUrl,
  eventUrl,
  options,
  callback
) {
  if (!name || name.length < 1) {
    sendError(callback, new Error(ERROR_MESSAGES.applicationName));
  } else if (!type) {
    sendError(callback, new Error(ERROR_MESSAGES.applicationType));
  } else if (!answerUrl) {
    sendError(callback, new Error(ERROR_MESSAGES.applicationAnswerUrl));
  } else if (!eventUrl) {
    sendError(callback, new Error(ERROR_MESSAGES.applicationEventUrl));
  } else {
    var createEndpoint = getEndpoint(applicationsEndpoint.path);
    createEndpoint.host = applicationsEndpoint.host;
    createEndpoint.path +=
      "?name=" +
      encodeURIComponent(name) +
      "&type=" +
      type +
      "&answer_url=" +
      answerUrl +
      "&event_url=" +
      eventUrl;
    for (var key in options) {
      createEndpoint.path += "&" + key + "=" + options[key];
    }
    sendRequest(createEndpoint, "POST", callback);
  }
};

exports.getApplication = function(appId, callback) {
  if (!appId || appId.length < 36) {
    sendError(callback, new Error(ERROR_MESSAGES.applicationId));
  } else {
    var showEndpoint = getEndpoint(applicationsEndpoint.path + "/" + appId);
    showEndpoint.host = applicationsEndpoint.host;
    sendRequest(showEndpoint, callback);
  }
};

exports.updateApplication = function(
  appId,
  name,
  type,
  answerUrl,
  eventUrl,
  options,
  callback
) {
  if (!appId || appId.length < 36) {
    sendError(callback, new Error(ERROR_MESSAGES.applicationId));
  } else if (!name || name.length < 1) {
    sendError(callback, new Error(ERROR_MESSAGES.applicationName));
  } else if (!type) {
    sendError(callback, new Error(ERROR_MESSAGES.applicationType));
  } else if (!answerUrl) {
    sendError(callback, new Error(ERROR_MESSAGES.applicationAnswerUrl));
  } else if (!eventUrl) {
    sendError(callback, new Error(ERROR_MESSAGES.applicationEventUrl));
  } else {
    var updateEndpoint = getEndpoint(applicationsEndpoint.path + "/" + appId);
    updateEndpoint.path +=
      "?name=" +
      encodeURIComponent(name) +
      "&type=" +
      type +
      "&answer_url=" +
      answerUrl +
      "&event_url=" +
      eventUrl;
    updateEndpoint.host = applicationsEndpoint.host;
    for (var key in options) {
      updateEndpoint.path =
        updateEndpoint.path + "&" + key + "=" + options[key];
    }
    sendRequest(updateEndpoint, "PUT", callback);
  }
};

exports.deleteApplication = function(appId, callback) {
  if (!appId || appId.length < 36) {
    sendError(callback, new Error(ERROR_MESSAGES.applicationId));
  } else {
    var deleteEndpoint = getEndpoint(applicationsEndpoint.path + "/" + appId);
    deleteEndpoint.host = applicationsEndpoint.host;
    sendRequest(deleteEndpoint, "DELETE", callback);
  }
};

exports.changePassword = function(newSecret, callback) {
  var settingsEndpoint = getEndpoint("/account/settings");
  settingsEndpoint.path += "?newSecret=" + encodeURIComponent(newSecret);
  sendRequest(settingsEndpoint, "POST", callback);
};

exports.changeMoCallbackUrl = function(newUrl, callback) {
  var settingsEndpoint = getEndpoint("/account/settings");
  settingsEndpoint.path += "?moCallBackUrl=" + encodeURIComponent(newUrl);
  sendRequest(settingsEndpoint, "POST", callback);
};

exports.changeDrCallbackUrl = function(newUrl, callback) {
  var settingsEndpoint = getEndpoint("/account/settings");
  settingsEndpoint.path += "?drCallBackUrl=" + encodeURIComponent(newUrl);
  sendRequest(settingsEndpoint, "POST", callback);
};

exports.verifyNumber = function(inputParams, callback) {
  if (!inputParams.number || !inputParams.brand) {
    sendError(callback, new Error(ERROR_MESSAGES.verifyValidation));
  } else {
    var vEndpoint = clone(verifyEndpoint);
    vEndpoint.path += "?" + querystring.stringify(inputParams);
    sendRequest(vEndpoint, callback);
  }
};

exports.checkVerifyRequest = function(inputParams, callback) {
  if (!inputParams.request_id || !inputParams.code) {
    sendError(callback, new Error(ERROR_MESSAGES.checkVerifyValidation));
  } else {
    var vEndpoint = clone(checkVerifyEndpoint);
    vEndpoint.path += "?" + querystring.stringify(inputParams);
    sendRequest(vEndpoint, callback);
  }
};

exports.controlVerifyRequest = function(inputParams, callback) {
  if (!inputParams.request_id || !inputParams.cmd) {
    sendError(callback, new Error(ERROR_MESSAGES.controlVerifyValidation));
  } else {
    var vEndpoint = clone(controlVerifyEndpoint);
    vEndpoint.path += "?" + querystring.stringify(inputParams);
    sendRequest(vEndpoint, callback);
  }
};

exports.searchVerifyRequest = function(requestIds, callback) {
  var requestIdParam = {};
  if (!requestIds) {
    sendError(callback, new Error(ERROR_MESSAGES.searchVerifyValidation));
  } else {
    if (Array.isArray(requestIds)) {
      if (requestIds.length === 1) {
        requestIdParam.request_id = requestIds;
      } else {
        requestIdParam.request_ids = requestIds;
      }
    } else {
      requestIdParam.request_id = requestIds;
    }
    var vEndpoint = clone(searchVerifyEndpoint);
    vEndpoint.path += "?" + querystring.stringify(requestIdParam);
    sendRequest(vEndpoint, callback);
  }
};

exports.numberInsight = function(inputParams, callback) {
  numberInsightAsync(inputParams, callback);
};

exports.numberInsightBasic = function(inputParams, callback) {
  numberInsightCommon(niBasicEndpoint, inputParams, callback);
};

exports.numberInsightStandard = function(inputParams, callback) {
  numberInsightCommon(niStandardEndpoint, inputParams, callback);
};

exports.numberInsightAdvanced = function(inputParams, callback) {
  numberInsightCommon(niAdvancedEndpoint, inputParams, callback);
};

exports.numberInsightAdvancedAsync = function(inputParams, callback) {
  numberInsightAsync(inputParams, callback);
};

function numberInsightAsync(inputParams, callback) {
  if (!inputParams.number || !inputParams.callback) {
    sendError(
      callback,
      new Error(ERROR_MESSAGES.numberInsightAdvancedValidation)
    );
  } else {
    var nEndpoint = clone(niEndpoint);
    nEndpoint.path += "?" + querystring.stringify(inputParams);
    sendRequest(nEndpoint, callback);
  }
}

function numberInsightCommon(endpoint, inputParams, callback) {
  if (validateNumber(inputParams, callback)) {
    var inputObj;
    if (typeof inputParams !== "object") {
      inputObj = { number: inputParams };
    } else {
      inputObj = inputParams;
    }
    var nEndpoint = clone(endpoint);
    nEndpoint.path += "?" + querystring.stringify(inputObj);
    sendRequest(nEndpoint, callback);
  }
}
function validateNumber(inputParams, callback) {
  if (typeof inputParams === "object" && !inputParams.number) {
    sendError(callback, new Error(ERROR_MESSAGES.numberInsightValidation));
    return false;
  } else if (
    typeof inputParams === "object" &&
    !numberPattern.test(inputParams.number)
  ) {
    sendError(callback, new Error(ERROR_MESSAGES.numberInsightPatternFailure));
    return false;
  } else if (
    typeof inputParams !== "object" &&
    (!inputParams || !numberPattern.test(inputParams))
  ) {
    sendError(callback, new Error(ERROR_MESSAGES.numberInsightPatternFailure));
    return false;
  }
  return true;
}

function sendVoiceMessage(voiceEndpoint, data, callback) {
  if (!data.to) {
    sendError(callback, new Error(ERROR_MESSAGES.to));
  } else {
    var endpoint = clone(voiceEndpoint);
    endpoint.path += "?" + querystring.stringify(data);
    _options.logger.info(
      "sending TTS message to " + data.to + " with message " + data.text
    );
    sendRequest(endpoint, "POST", function(err, apiResponse) {
      if (!err && apiResponse.status && apiResponse.status > 0) {
        sendError(callback, new Error(apiResponse["error-text"]), apiResponse);
      } else {
        if (callback) callback(err, apiResponse);
      }
    });
  }
}

exports.sendTTSMessage = function(recipient, message, opts, callback) {
  if (!message) {
    sendError(callback, new Error(ERROR_MESSAGES.msg));
  } else {
    if (!opts) {
      opts = {};
    }
    opts["to"] = recipient;
    opts["text"] = message;
    sendVoiceMessage(ttsEndpoint, opts, callback);
  }
};

exports.sendTTSPromptWithCapture = function(
  recipient,
  message,
  maxDigits,
  byeText,
  opts,
  callback
) {
  if (!message) {
    sendError(callback, new Error(ERROR_MESSAGES.msg));
  } else if (!maxDigits || isNaN(maxDigits) || maxDigits.length > 16) {
    sendError(callback, new Error(ERROR_MESSAGES.maxDigits));
  } else if (!byeText) {
    sendError(callback, new Error(ERROR_MESSAGES.byeText));
  } else {
    if (!opts) {
      opts = {};
    }
    opts["to"] = recipient;
    opts["text"] = message;
    opts["max_digits"] = maxDigits;
    opts["bye_text"] = byeText;
    sendVoiceMessage(ttsPromptEndpoint, opts, callback);
  }
};

exports.sendTTSPromptWithConfirm = function(
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
    sendError(callback, new Error(ERROR_MESSAGES.msg));
  } else if (!maxDigits || isNaN(maxDigits) || maxDigits.length > 16) {
    sendError(callback, new Error(ERROR_MESSAGES.maxDigits));
  } else if (!pinCode || pinCode.length !== maxDigits) {
    sendError(callback, new Error(ERROR_MESSAGES.pinCode));
  } else if (!byeText) {
    sendError(callback, new Error(ERROR_MESSAGES.byeText));
  } else if (!failedText) {
    sendError(callback, new Error(ERROR_MESSAGES.failedText));
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
    sendVoiceMessage(ttsPromptEndpoint, opts, callback);
  }
};

exports.call = function(recipient, answerUrl, opts, callback) {
  if (!answerUrl) {
    sendError(callback, new Error(ERROR_MESSAGES.answerUrl));
  } else {
    if (!opts) {
      opts = {};
    }
    opts["to"] = recipient;
    opts["answer_url"] = answerUrl;
    sendVoiceMessage(callEndpoint, opts, callback);
  }
};

function sendError(callback, err, returnData) {
  // Throw the error in case if there is no callback passed
  if (callback) {
    callback(err, returnData);
  } else {
    throw err;
  }
}

exports.getWithQuery = function(path, query, creds, opts, callback) {
  if (!query) {
    throw new Error('"query" is a required parameter');
  }

  var pathExt = "";
  if (typeof query === "string") {
    // single call Id
    pathExt = `/${query}`;
  } else if (typeof query === "object" && Object.keys(query).length > 0) {
    // filter
    pathExt = `?${querystring.stringify(query)}`;
  }

  var config = {
    host: "api.nexmo.com",
    path: `${path}${pathExt}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${creds.generateJwt()}`
    }
  };
  opts.httpClient.request(config, callback);
};

exports.setHost = function(aHost) {
  msgpath.host = aHost;
  shortcodePath.host = aHost;
  ttsEndpoint.host = aHost;
  ttsPromptEndpoint.host = aHost;
  callEndpoint.host = aHost;
  verifyEndpoint.host = aHost;
  checkVerifyEndpoint.host = aHost;
  controlVerifyEndpoint.host = aHost;
  searchVerifyEndpoint.host = aHost;
  niEndpoint.host = aHost;
  niBasicEndpoint.host = aHost;
  niStandardEndpoint.host = aHost;
  applicationsEndpoint.host = aHost;
};
