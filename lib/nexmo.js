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
var msgpath;
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
    answerUrl: 'Invalid answer URL for call'
};

// protocol and debugon are optional
exports.initialize = function(pkey, psecret, protocol, debugon) {
    if (!pkey || !psecret) {
        throw 'key and secret cannot be empty, set valid values';
    }
    username = pkey;
    password = psecret;
    var up = {
        username: pkey,
        password: psecret
    }
    msgpath = '/sms/json' + '?' + querystring.stringify(up);
    ttsPath = '/tts/json' + '?' + querystring.stringify(up);
    ttsPromptPath = '/tts-prompt/json' + '?' + querystring.stringify(up);
    callPath = '/call/json' + '?' + querystring.stringify(up);
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
        var path = msgpath + '&' + querystring.stringify(data);
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

function getPath(action) {
    return action + username + '/' + password;
}

function sendRequest(path, method, callback) {
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
        host: 'rest.nexmo.com',
        port: 80,
        path: '',
        method: method,
        headers: headers
    };
    options.path = path;
    log(options);
    var request;
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

exports.checkBalance = function(callback) {
    var balancePath = getPath('/account/get-balance/');
    sendRequest(balancePath, callback);
}

exports.getPricing = function(countryCode, callback) {
    if (!countryCode || countryCode.length != 2) {
        sendError(callback, new Error(ERROR_MESSAGES.countrycode));
    } else {
        var pricingPath = getPath('/account/get-pricing/outbound/') + '/' + countryCode;
        sendRequest(pricingPath, callback);
    }
}

exports.getNumbers = function(callback) {
    var numbersPath = getPath('/account/numbers/');
    sendRequest(numbersPath, callback);
}

exports.searchNumbers = function(countryCode, pattern, callback) {
    if (!countryCode || countryCode.length != 2) {
        sendError(callback, new Error(ERROR_MESSAGES.countrycode));
    } else {
        var searchPath = getPath('/number/search/') + '/' + countryCode
        if (typeof pattern == 'function') {
            callback = pattern;
        } else if (typeof pattern == 'object'){
            searchPath = searchPath + '?';
            for (arg in pattern){
                searchPath = searchPath + arg + '=' + pattern[arg] + '&'
            }
        } else {
            searchPath = searchPath + '?pattern=' + pattern;
        }
        sendRequest(searchPath, callback);
    }
}

exports.buyNumber = function(countryCode, msisdn, callback) {
    if (!countryCode || countryCode.length != 2) {
        sendError(callback, new Error(ERROR_MESSAGES.countrycode));
    } else if (!msisdn || msisdn.length < 10) { // check if MSISDN validation is correct for international numbers
        sendError(callback, new Error(ERROR_MESSAGES.msisdn));
    } else {
        var buyPath = getPath('/number/buy/') + '/' + countryCode + '/' + msisdn;
        options.method = 'POST'
        sendRequest(buyPath, 'POST', callback);
    }
}

exports.cancelNumber = function(countryCode, msisdn, callback) {
    if (!countryCode || countryCode.length != 2) {
        sendError(callback, new Error(ERROR_MESSAGES.countrycode));
    } else if (!msisdn || msisdn.length < 10) {
        sendError(callback, new Error(ERROR_MESSAGES.msisdn));
    } else {
        var cancelPath = getPath('/number/cancel/') + '/' + countryCode + '/' + msisdn;
        sendRequest(cancelPath, 'POST', callback);
    }
}

exports.changePassword = function(newSecret, callback) {
    var settingsPath = getPath('/account/settings/') + '?newSecret=' + encodeURIComponent(newSecret);
    sendRequest(settingsPath, 'POST', callback);
}

exports.changeMoCallbackUrl = function(newUrl, callback) {
    var settingsPath = getPath('/account/settings/') + '?moCallBackUrl=' + encodeURIComponent(newUrl);
    sendRequest(settingsPath, 'POST', callback);
}

exports.changeDrCallbackUrl = function(newSecret, callback) {
    var settingsPath = getPath('/account/settings/') + '?drCallBackUrl=' + encodeURIComponent(newUrl);
    sendRequest(settingsPath, 'POST', callback);
}

function sendVoiceMessage(voiceEndpoint, data, callback) {
    if (!data.to) {
        sendError(callback, new Error(ERROR_MESSAGES.to));
    } else {
        var path = voiceEndpoint + '&' + querystring.stringify(data);
        log('sending TTS message to ' + data.to + ' with message ' + data.text);
        sendRequest(path, 'POST', function(err, apiResponse) {
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
        sendVoiceMessage(ttsPath, opts, callback);
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
        sendVoiceMessage(ttsPromptPath, opts, callback);
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
        sendVoiceMessage(ttsPromptPath, opts, callback);
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
        sendVoiceMessage(callPath, opts, callback);
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
