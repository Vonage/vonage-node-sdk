/*
The MIT License (MIT)

Copyright (c) 2011 Prabhu Velayutham

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

'use strict';

var https = require('https');
var http = require('http');
var querystring = require('querystring');

var headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'accept': 'application/json'
};
var initialized = false;
var username = '';
var password = '';
var msgpath = {host:'rest.nexmo.com',path:'/sms/json'};
var shortcodePath = {host:'rest.nexmo.com',path:'/sc/us/${type}/json'};
var ttsEndpoint = {host:'api.nexmo.com',path:'/tts/json'};
var ttsPromptEndpoint = {host:'api.nexmo.com',path:'/tts-prompt/json'};
var callEndpoint = {host:'rest.nexmo.com',path:'/call/json'};
var verifyEndpoint = {host:'api.nexmo.com',path:'/verify/json'};
var checkVerifyEndpoint = {host:'api.nexmo.com',path:'/verify/check/json'};
var controlVerifyEndpoint = {host:'api.nexmo.com',path:'/verify/control/json'};
var searchVerifyEndpoint = {host:'api.nexmo.com',path:'/verify/search/json'};
var niEndpoint = {host:'rest.nexmo.com',path:'/ni/json'};
var niBasicEndpoint = {host:'api.nexmo.com',path:'/number/format/json'};
var niStandardEndpoint = {host:'api.nexmo.com',path:'/number/lookup/json'};
var up = {};
var debugOn = false;
var port = 443;
var numberPattern = new RegExp("^[0-9 +()-]*$");

//Error message resources are maintained globally in one place for easy management
var ERROR_MESSAGES = {
    sender: 'Invalid from address',
    to: 'Invalid to address',
    msg: 'Invalid Text Message',
    msgParams: 'Invalid shortcode message parameters',
    countrycode: 'Invalid Country Code',
    msisdn: 'Invalid MSISDN passed',
    body: 'Invalid Body value in Binary Message',
    udh: 'Invalid udh value in Binary Message',
    title: 'Invalid title in WAP Push message',
    url: 'Invalid url in WAP Push message',
    maxDigits: 'Invalid max digits for TTS prompt',
    byeText: 'Invalid bye text for TTS prompt',
    pinCode: 'Invalid pin code for TTS confirm',
    failedText: 'Invalid failed text for TTS confirm',
    answerUrl: 'Invalid answer URL for call',
	verifyValidation:'Missing Mandatory fields (number and/or brand)',
	checkVerifyValidation:'Missing Mandatory fields (request_id and/or code)',
	controlVerifyValidation:'Missing Mandatory fields (request_id and/or cmd-command)',
	searchVerifyValidation:'Missing Mandatory fields (request_id or request_ids)',
	numberInsightAdvancedValidation:'Missing Mandatory fields (number and/or callback url)',
	numberInsightValidation:'Missing Mandatory field - number',
	numberInsightPatternFailure:'Number can contain digits and may include any or all of the following: white space, -,+, (, ).',
	optionsNotAnObject:'Options parameter should be a dictionary. Check the docs for valid properties for options',
    applicationName: 'Invalid argument: name',
    applicationType: 'Invalid argument: type (valid options: [voice])',
    applicationAnswerUrl: 'Invalid argument: answerUrl',
    applicationEventUrl: 'Invalid argument: eventUrl',
    applicationId: 'Invalid argument: appId'
};

// debugon is optional
exports.initialize = function(pkey, psecret, debugon) {
    if (!pkey || !psecret) {
        throw 'key and secret cannot be empty, set valid values';
    }
    username = pkey;
    password = psecret;
    up = {
        api_key: pkey,
        api_secret: psecret
    }
    debugOn = !debugon ? false : (String(debugon) === "false" ? false : true);
    initialized = true;
}

exports.sendBinaryMessage = function(sender, recipient, body, udh, callback) {
    if (!body) {
        sendError(callback, new Error(ERROR_MESSAGES.body));
    } else if (!udh) {
        sendError(callback, new Error(ERROR_MESSAGES.udh));
    } else {
        sendMessage({
            from: sender,
            to: recipient,
            type: 'binary',
            body: body,
            udh: udh
        }, callback);
    }
}

exports.sendWapPushMessage = function(sender, recipient, title, url, validity, callback) {
    if (!title) {
        sendError(callback, new Error(ERROR_MESSAGES.title));
    } else if (!url) {
        sendError(callback, new Error(ERROR_MESSAGES.url));
    } else {
        if (typeof validity == 'function') {
            callback = validity;
            validity = 86400000;
        }
        sendMessage({
            from: sender,
            to: recipient,
            type: 'wappush',
            title: title,
            validity: validity,
            url: url
        }, callback);
    }
}

exports.sendTextMessage = function(sender, recipient, message, opts, callback) {
    if (!message) {
        sendError(callback, new Error(ERROR_MESSAGES.msg));
    } else {
        if (!callback) {
	    	callback = opts;
            opts = {};
        }
        opts['from'] = sender;
        opts['to'] = recipient;
        opts['text'] = message;
        sendMessage(opts, callback);
    }
}

exports.sendMessage = function(opts, callback) {
        sendMessage(opts, callback);
}
function sendMessage(data, callback) {
    if (!data.from) {
        sendError(callback, new Error(ERROR_MESSAGES.sender));
    } else if (!data.to) {
        sendError(callback, new Error(ERROR_MESSAGES.to));
    } else {
        var path = clone(msgpath);
		path.path+= '?' + querystring.stringify(data);
        log('sending message from ' + data.from + ' to ' + data.to + ' with message ' + data.text);
        sendRequest(path, 'POST', function(err, apiResponse) {
            if (!err && apiResponse.status && apiResponse.messages[0].status > 0) {
                sendError(callback, new Error(apiResponse.messages[0]['error-text']), apiResponse);
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
    path.path = path.path.replace('${type}', type);
    Object.keys(messageParams).forEach(function(key) {
        opts[key] = messageParams[key];
    });
    opts.to = recipient;
    path.path+= '?' + querystring.stringify(opts);
    log('sending message from shortcode ' + type + ' to ' + recipient + ' with parameters ' + JSON.stringify(messageParams));
    sendRequest(path, 'POST', function(err, apiResponse) {
        if (!err && apiResponse.status && apiResponse.messages[0].status > 0) {
            sendError(callback, new Error(apiResponse.messages[0]['error-text']), apiResponse);
        } else {
            if (callback) callback(err, apiResponse);
        }
    });
}
exports.shortcodeAlert = function(recipient, messageParams, opts, callback) {
    sendViaShortcode('alert', recipient, messageParams, opts, callback);
}
exports.shortcode2FA = function(recipient, messageParams, opts, callback) {
    sendViaShortcode('2fa', recipient, messageParams, opts, callback);
}
exports.shortcodeMarketing = function(recipient, messageParams, opts, callback) {
    sendViaShortcode('marketing', recipient, messageParams, opts, callback);
}

function clone(a) {
   return JSON.parse(JSON.stringify(a));
}

function getEndpoint(action) {
    return {path:action};
}

function sendRequest(endpoint, method, callback) {
    if (!initialized) {
        throw 'nexmo not initialized, call nexmo.initialize(username, password) first before calling any nexmo API';
    }
    if (typeof method == 'function') {
        callback = method;
        method = 'GET';
    }
    if (method == 'POST' || method == 'DELETE')
        headers['Content-Length'] = 0; // Fix broken due ot 411 Content-Length error now sent by Nexmo API
    var options = {
        host: endpoint.host?endpoint.host:'rest.nexmo.com',
        port: port,
        path: endpoint.path + (endpoint.path.indexOf('?')>0?'&':'?') + querystring.stringify(up),
        method: method,
        headers: headers
    };
    log(options);
    var request;
	if (true) { // set to false to verify the request without sending the actual request
      if (options.port == 443) {
          request = https.request(options);
      } else {
          request = http.request(options);
      }
	    request.end();
	    var responseReturn = '';
	    request.on('response', function(response) {
	        response.setEncoding('utf8');
	        response.on('data', function(chunk) {
	            responseReturn += chunk;
	        });
	        response.on('end', function() {
	            log('response ended');
	            if (callback) {
	                var retJson = responseReturn;
	                var err = null;
                  if (method !== 'DELETE') {
                    try {
  	                    retJson = JSON.parse(responseReturn);
  	                } catch (parsererr) {
  	                    // ignore parser error for now and send raw response to client
  	                    log(parsererr);
  	                    log('could not convert API response to JSON, above error is ignored and raw API response is returned to client');
  						          log('Raw Error message from API ');
  						          log(responseReturn);
  	                    err = parsererr;
  	                }
                  }
                  callback(err, retJson);
	            }
	        })
	        response.on('close', function(e) {
	            log('problem with API request detailed stacktrace below ');
	            log(e);
	            callback(e);
	        });
	    });
	    request.on('error', function(e) {
	        log('problem with API request detailed stacktrace below ');
	        log(e);
	        callback(e);
	    });
	}
}

exports.checkBalance = function(callback) {
    var balanceEndpoint = getEndpoint('/account/get-balance');
    sendRequest(balanceEndpoint, callback);
}

exports.getPricing = function(countryCode, callback) {
    if (!countryCode || countryCode.length != 2) {
        sendError(callback, new Error(ERROR_MESSAGES.countrycode));
    } else {
        var pricingEndpoint = getEndpoint('/account/get-pricing/outbound');
		pricingEndpoint.path += '?country=' + countryCode;
        sendRequest(pricingEndpoint, callback);
    }
}

exports.getNumbers = function(options, callback) {
    var numbersEndpoint = getEndpoint('/account/numbers');
    if (typeof options == 'function') {
        callback = options;
    } else if (typeof options == 'object'){
        numbersEndpoint.path = numbersEndpoint.path + '?';
        for (var key in options){
            numbersEndpoint.path = numbersEndpoint.path + key + '=' + options[key] + '&'
        }
    } else {
        sendError(callback, new Error(ERROR_MESSAGES.optionsNotAnObject));
		return;
    }
	sendRequest(numbersEndpoint, callback);
}

exports.searchNumbers = function(countryCode, pattern, callback) {
    if (!countryCode || countryCode.length != 2) {
        sendError(callback, new Error(ERROR_MESSAGES.countrycode));
    } else {
        var searchEndpoint = getEndpoint('/number/search') ;
		searchEndpoint.path += '?country=' + countryCode
        if (typeof pattern == 'function') {
            callback = pattern;
        } else if (typeof pattern == 'object'){
            searchEndpoint.path = searchEndpoint.path + '&';
            for (var arg in pattern){
                searchEndpoint.path = searchEndpoint.path + arg + '=' + pattern[arg] + '&'
            }
        } else {
            searchEndpoint.path = searchEndpoint.path + '&pattern=' + pattern;
        }
        sendRequest(searchEndpoint, callback);
    }
}

exports.buyNumber = function(countryCode, msisdn, callback) {
    if (!countryCode || countryCode.length != 2) {
        sendError(callback, new Error(ERROR_MESSAGES.countrycode));
    } else if (!msisdn || msisdn.length < 10) { // check if MSISDN validation is correct for international numbers
        sendError(callback, new Error(ERROR_MESSAGES.msisdn));
    } else {
        var buyEndpoint = getEndpoint('/number/buy');
		buyEndpoint.path += '?country=' + countryCode + '&msisdn=' + msisdn;
        sendRequest(buyEndpoint, 'POST', callback);
    }
}

exports.cancelNumber = function(countryCode, msisdn, callback) {
    if (!countryCode || countryCode.length != 2) {
        sendError(callback, new Error(ERROR_MESSAGES.countrycode));
    } else if (!msisdn || msisdn.length < 10) {
        sendError(callback, new Error(ERROR_MESSAGES.msisdn));
    } else {
        var cancelEndpoint = getEndpoint('/number/cancel');
		cancelEndpoint.path += '?country=' + countryCode + '&msisdn=' + msisdn;
        sendRequest(cancelEndpoint, 'POST', callback);
    }
}

exports.cancelNumber = function(countryCode, msisdn, callback) {
    if (!countryCode || countryCode.length != 2) {
        sendError(callback, new Error(ERROR_MESSAGES.countrycode));
    } else if (!msisdn || msisdn.length < 10) {
        sendError(callback, new Error(ERROR_MESSAGES.msisdn));
    } else {
        var cancelEndpoint = getEndpoint('/number/cancel');
		cancelEndpoint.path += '?country=' + countryCode + '&msisdn=' + msisdn;
        sendRequest(cancelEndpoint, 'POST', callback);
    }
}

exports.updateNumber = function(countryCode, msisdn, params, callback){
    if (!countryCode || countryCode.length != 2) {
        sendError(callback, new Error(ERROR_MESSAGES.countrycode));
    } else if (!msisdn || msisdn.length < 10) {
        sendError(callback, new Error(ERROR_MESSAGES.msisdn));
    } else {
        var updateEndpoint = getEndpoint('/number/update');
	updateEndpoint.path += '?country=' + countryCode + '&msisdn=' + msisdn;
        updateEndpoint.path = updateEndpoint.path + '&';
        for (var arg in params){
            updateEndpoint.path = updateEndpoint.path + arg + '=' + params[arg] + '&'
        }
        sendRequest(updateEndpoint, 'POST', callback);
    }
}

exports.getApplications = function(options, callback) {
    var applicationsEndpoint = getEndpoint('/beta/account/applications');
    if (typeof options == 'function') {
        callback = options;
    } else if (typeof options == 'object'){
        applicationsEndpoint.path = applicationsEndpoint.path + '?';
        for (var key in options){
            applicationsEndpoint.path = applicationsEndpoint.path + key + '=' + options[key] + '&'
        }
    } else {
        sendError(callback, new Error(ERROR_MESSAGES.optionsNotAnObject));
  	    return;
    }
  sendRequest(applicationsEndpoint, callback);
}

exports.createApplication = function(name, type, answerUrl, eventUrl, options, callback) {
  if (!name || name.length < 1) {
      sendError(callback, new Error(ERROR_MESSAGES.applicationName));
  } else if (!type || type != 'voice') {
      sendError(callback, new Error(ERROR_MESSAGES.applicationType));
  } else if (!answerUrl) {
      sendError(callback, new Error(ERROR_MESSAGES.applicationAnswerUrl));
  } else if (!eventUrl) {
      sendError(callback, new Error(ERROR_MESSAGES.applicationEventUrl));
  } else {
      var createEndpoint = getEndpoint('/beta/account/applications');
      createEndpoint.path += '?name=' + encodeURIComponent(name) + '&type=' + type  + '&answer_url=' + answerUrl  + '&event_url=' + eventUrl;
      for (var key in options){
          createEndpoint.path = createEndpoint.path + key + '=' + options[key] + '&'
      }
      sendRequest(createEndpoint, 'POST', callback);
  }
}

exports.getApplication = function(appId, callback) {
  if (!appId || appId.length < 36) {
      sendError(callback, new Error(ERROR_MESSAGES.applicationId));
  } else {
      var showEndpoint = getEndpoint('/beta/account/applications/' + appId);
      sendRequest(showEndpoint, callback);
  }
}

exports.updateApplication = function(appId, name, type, answerUrl, eventUrl, options, callback) {
  if (!appId || appId.length < 36) {
      sendError(callback, new Error(ERROR_MESSAGES.applicationId));
  } else if (!name || name.length < 1) {
      sendError(callback, new Error(ERROR_MESSAGES.applicationName));
  } else if (!type || type != 'voice') {
      sendError(callback, new Error(ERROR_MESSAGES.applicationType));
  } else if (!answerUrl) {
      sendError(callback, new Error(ERROR_MESSAGES.applicationAnswerUrl));
  } else if (!eventUrl) {
      sendError(callback, new Error(ERROR_MESSAGES.applicationEventUrl));
  } else {
      var updateEndpoint = getEndpoint('/beta/account/applications/'+appId);
      updateEndpoint.path += '?name=' + encodeURIComponent(name) + '&type=' + type  + '&answer_url=' + answerUrl  + '&event_url=' + eventUrl;
      for (var key in options){
          updateEndpoint.path = updateEndpoint.path + key + '=' + options[key] + '&'
      }
      sendRequest(updateEndpoint, 'PUT', callback);
  }
}

exports.deleteApplication = function(appId, callback) {
  if (!appId || appId.length < 36) {
      sendError(callback, new Error(ERROR_MESSAGES.applicationId));
  } else {
      var deleteEndpoint = getEndpoint('/beta/account/applications/' + appId);
      sendRequest(deleteEndpoint, 'DELETE', callback);
  }
}


exports.changePassword = function(newSecret, callback) {
    var settingsEndpoint = getEndpoint('/account/settings');
	settingsEndpoint.path += '?newSecret=' + encodeURIComponent(newSecret);
    sendRequest(settingsEndpoint, 'POST', callback);
}

exports.changeMoCallbackUrl = function(newUrl, callback) {
    var settingsEndpoint = getEndpoint('/account/settings');
	settingsEndpoint.path  += '?moCallBackUrl=' + encodeURIComponent(newUrl);
    sendRequest(settingsEndpoint, 'POST', callback);
}

exports.changeDrCallbackUrl = function(newUrl, callback) {
    var settingsEndpoint = getEndpoint('/account/settings');
	settingsEndpoint.path  += '?drCallBackUrl=' + encodeURIComponent(newUrl);
    sendRequest(settingsEndpoint, 'POST', callback);
}

exports.verifyNumber = function(inputParams, callback) {
	if (!inputParams.number || !inputParams.brand ) {
		sendError(callback, new Error(ERROR_MESSAGES.verifyValidation));
    } else {
		var vEndpoint = clone(verifyEndpoint);
		vEndpoint.path += '?' + querystring.stringify(inputParams);
        sendRequest(vEndpoint, callback);
    }
}

exports.checkVerifyRequest = function(inputParams, callback) {
	if (!inputParams.request_id || !inputParams.code ) {
		sendError(callback, new Error(ERROR_MESSAGES.checkVerifyValidation));
    } else {
		var vEndpoint = clone(checkVerifyEndpoint);
		vEndpoint.path += '?' + querystring.stringify(inputParams);
        sendRequest(vEndpoint, callback);
    }
}

exports.controlVerifyRequest = function(inputParams, callback) {
	if (!inputParams.request_id || !inputParams.cmd ) {
		sendError(callback, new Error(ERROR_MESSAGES.controlVerifyValidation));
    } else {
		var vEndpoint = clone(controlVerifyEndpoint);
		vEndpoint.path += '?' + querystring.stringify(inputParams);
        sendRequest(vEndpoint, callback);
    }
}

exports.searchVerifyRequest = function(requestIds, callback) {
	var requestIdParam = {};
	if (!requestIds) {
		sendError(callback, new Error(ERROR_MESSAGES.searchVerifyValidation));
    } else {
		if (Array.isArray(requestIds) ) {
			if (requestIds.length ==1) {
				requestIdParam.request_id=requestIds;
			} else {
				requestIdParam.request_ids=requestIds;
			}
		} else {
			requestIdParam.request_id=requestIds;
		}
		var vEndpoint = clone(searchVerifyEndpoint);
		vEndpoint.path += '?' + querystring.stringify(requestIdParam);
        sendRequest(vEndpoint, callback);
    }
}

exports.numberInsight = function(inputParams, callback) {
	if (!inputParams.number || ! inputParams.callback) {
		sendError(callback, new Error(ERROR_MESSAGES.numberInsightAdvancedValidation));
    } else {
		var nEndpoint = clone(niEndpoint);
		nEndpoint.path += '?' + querystring.stringify(inputParams);
        sendRequest(nEndpoint, callback);
    }
}

exports.numberInsightBasic = function(inputParams, callback) {
	numberInsightCommon(niBasicEndpoint,inputParams,callback)
}

exports.numberInsightStandard = function(inputParams, callback) {
	numberInsightCommon(niStandardEndpoint,inputParams,callback)
}

function numberInsightCommon(endpoint,inputParams,callback) {
	if (validateNumber(inputParams,callback)){
		var inputObj;
		if (typeof inputParams != 'object') {
			inputObj = {number:inputParams};
		} else {
			inputObj = inputParams;
		}
		var nEndpoint = clone(endpoint);
		nEndpoint.path += '?' + querystring.stringify(inputObj);
	    sendRequest(nEndpoint, callback);
	}
}
function validateNumber(inputParams,callback) {
	if ((typeof inputParams == 'object') && !inputParams.number) {
			sendError(callback, new Error(ERROR_MESSAGES.numberInsightValidation));
			return false;
	} else if ((typeof inputParams == 'object') && !numberPattern.test(inputParams.number)) {
			sendError(callback, new Error(ERROR_MESSAGES.numberInsightPatternFailure));
			return false;
    } else if ((typeof inputParams != 'object') && (!inputParams || !numberPattern.test(inputParams))){
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
		endpoint.path += '?' + querystring.stringify(data);
        log('sending TTS message to ' + data.to + ' with message ' + data.text);
        sendRequest(endpoint, 'POST', function(err, apiResponse) {
            if (!err && apiResponse.status && apiResponse.status > 0) {
                sendError(callback, new Error(apiResponse['error-text']), apiResponse);
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
        opts['to'] = recipient;
        opts['text'] = message;
        sendVoiceMessage(ttsEndpoint, opts, callback);
    }
}

exports.sendTTSPromptWithCapture = function(recipient, message, maxDigits, byeText, opts, callback) {
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
        opts['to'] = recipient;
        opts['text'] = message;
        opts['max_digits'] = maxDigits;
        opts['bye_text'] = byeText;
        sendVoiceMessage(ttsPromptEndpoint, opts, callback);
    }
}

exports.sendTTSPromptWithConfirm = function(recipient, message, maxDigits, pinCode, byeText, failedText, opts, callback) {
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
        opts['to'] = recipient;
        opts['text'] = message;
        opts['max_digits'] = maxDigits;
        opts['pin_code'] = pinCode;
        opts['bye_text'] = byeText;
        opts['failed_text'] = failedText;
        sendVoiceMessage(ttsPromptEndpoint, opts, callback);
    }
}

exports.call = function(recipient, answerUrl, opts, callback) {
    if (!answerUrl) {
        sendError(callback, new Error(ERROR_MESSAGES.answerUrl));
    } else {
        if (!opts) {
            opts = {};
        }
        opts['to'] = recipient;
        opts['answer_url'] = answerUrl;
        sendVoiceMessage(callEndpoint, opts, callback);
    }
}

function sendError(callback, err, returnData) {
    // Throw the error in case if there is no callback passed
    if (callback) {
        callback(err, returnData);
    } else {
        throw err;
    }
}

//Logging in one place to make it east to move to logging library like winston later.
function log(logMsg) {
    if (logMsg instanceof Error) console.log(logMsg.stack);
    if (debugOn) {
        if (typeof logMsg == 'object') {
            console.dir(logMsg);
        } else {
            console.log(logMsg);
        }
    }
}

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
}

exports.setPort = function(aPort) {
  port = aPort;
}
