/*
The MIT License (MIT)

Copyright (c) 2011 Prabhu Velayutham

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
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
var ttsEndpoint = {host:'api.nexmo.com',path:'/tts/json'};
var ttsPromptEndpoint = {host:'api.nexmo.com',path:'/tts-prompt/json'};
var callEndpoint = {host:'rest.nexmo.com',path:'/call/json'};
var verifyEndpoint = {host:'api.nexmo.com',path:'/verify/json'};
var checkVerifyEndpoint = {host:'api.nexmo.com',path:'/verify/check/json'};
var searchVerifyEndpoint = {host:'api.nexmo.com',path:'/verify/search/json'};
var niEndpoint = {host:'rest.nexmo.com',path:'/ni/json'};
var up = {};
var useHttps = false;
var debugOn = false;

//Error message resources are maintained globally in one place for easy management
var ERROR_MESSAGES = {
    sender: 'Invalid from address',
    to: 'Invalid to address',
    msg: 'Invalid Text Message',
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
	searchVerifyValidation:'Missing Mandatory fields (request_id or request_ids)',
	numberInsightValidation:'Missing Mandatory fields (number and/or callback url)'
};

// protocol and debugon are optional
exports.initialize = function(pkey, psecret, protocol, debugon) {
    if (!pkey || !psecret) {
        throw 'key and secret cannot be empty, set valid values';
    }
    username = pkey;
    password = psecret;
    up = {
        api_key: pkey,
        api_secret: psecret
    }
    useHttps = protocol && protocol == 'https'; // default to http
    debugOn = debugon;
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
        if (!opts) {
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
        var path = msgpath;
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
    if (method == 'POST')
        headers['Content-Length'] = 0; // Fix broken due ot 411 Content-Length error now sent by Nexmo API
    options = {
        host: endpoint.host?endpoint.host:'rest.nexmo.com',
        port: 80,
        path: '',
        method: method,
        headers: headers
    };
    options.path = endpoint.path + (endpoint.path.indexOf('?')>0?'&':'?') + querystring.stringify(up);
    log(options);
    var request;
	if (true) { // set to false to verify the request without sending the actual request
	    if (useHttps) {
	        options.port = 443;
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

exports.getNumbers = function(callback) {
    var numbersEndpoint = getEndpoint('/account/numbers');
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
            for (arg in pattern){
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
		cancelEndpoint.path = + '?country=' + countryCode + '&msisdn=' + msisdn;
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
        updateEndpoint.path = updateEndpoint.path + '?';
        for (arg in params){
            updateEndpoint.path = updateEndpoint.path + arg + '=' + params[arg] + '&'
        }
        sendRequest(updateEndpoint, 'POST', callback);
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
		var vEndpoint = verifyEndpoint;
		vEndpoint.path += '?' + querystring.stringify(inputParams);
        sendRequest(vEndpoint, callback);
    }
}

exports.checkVerifyRequest = function(inputParams, callback) {
	if (!inputParams.request_id || !inputParams.code ) {
		sendError(callback, new Error(ERROR_MESSAGES.checkVerifyValidation));
    } else {
		var vEndpoint = checkVerifyEndpoint;
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
		var vEndpoint = searchVerifyEndpoint;
		vEndpoint.path += '?' + querystring.stringify(requestIdParam);
        sendRequest(vEndpoint, callback);
    }
}

exports.numberInsight = function(inputParams, callback) {
	if (!inputParams.number || ! inputParams.callback) {
		sendError(callback, new Error(ERROR_MESSAGES.numberInsightValidation));
    } else {
		var nEndpoint = niEndpoint;
		nEndpoint.path += '?' + querystring.stringify(inputParams);
        sendRequest(nEndpoint, callback);
    }
}

function sendVoiceMessage(voiceEndpoint, data, callback) {
    if (!data.to) {
        sendError(callback, new Error(ERROR_MESSAGES.to));
    } else {
        var endpoint = voiceEndpoint;
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
