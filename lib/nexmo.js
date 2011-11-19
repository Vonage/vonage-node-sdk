var https=require('https');
var http=require('http');
var querystring=require('querystring');

var headers = {'Content-Type':'application/x-www-form-urlencoded','accept':'application/json'};
var initialized = false;
var username='';
var password='';
var msgpath;

exports.initialize = function(pkey,psecret) {
	username = pkey;
	password=psecret;
	var up = { username :pkey,
		   password :psecret}
	msgpath='/sms/json'+'?'+querystring.stringify(up);
	initialized = true;
}

exports.sendTextMessage = function(sender,recipient,message, callback) {
	exports.sendMessage({from:sender,to:recipient,text:message},callback);
}

exports.sendMessage = function(data, callback) {
	var path=msgpath+'&'+querystring.stringify(data);
	sendRequest(path,callback);
}
function getPath(action) {
	return action+username+'/'+password;
}
function sendRequest(path,method,callback) {
	if (!initialized) {
		throw 'nexmo not initialized, call nexmo.initialize(username, password) first before calling any nexmo API';
	}
	if (typeof method == 'function') {
		callback = method;
		method='GET';
	}
	options= {
		host: 'rest.nexmo.com',
    		port: 80,
    		path: '',
    		method: method,
    		headers: headers
	};
	options.path=path;
	console.dir(options);
	var request=http.request(options);
	request.end();
	request.on('response',function(response){ 
		response.setEncoding('utf8'); 
		response.on('data',function(chunk){ 
			if (callback) {
				var retJson=chunk;
				try {
				   retJson = JSON.parse(chunk);
				} catch (err) {
					// ignore parser error for now
				}
				callback(retJson);
			}
		})
	});
}
exports.checkBalance = function (callback) {
	var balancePath=getPath('/account/get-balance/');
	sendRequest(balancePath,callback);
}
exports.getPricing = function (countryCode, callback) {
	var pricingPath=getPath('/account/get-pricing/outbound/')+'/'+countryCode;
	sendRequest(pricingPath,callback);
}
exports.getNumbers = function (callback) {
	var numbersPath=getPath('/account/numbers/');
	sendRequest(numbersPath,callback);
}
exports.searchNumbers = function (countryCode,pattern, callback) {
	var searchPath=getPath('/number/search/')+'/'+countryCode
	if (typeof pattern == 'function') {
		callback = pattern;
	} else {
		searchPath=searchPath+'?pattern='+pattern;
	}
	sendRequest(searchPath,callback);
}
exports.buyNumber = function (countryCode,msisdn, callback) {
	var buyPath=getPath('/number/buy/')+'/'+countryCode+'/'+msisdn;
	options.method='POST'
	sendRequest(buyPath,'POST',callback);
}
exports.cancelNumber = function (countryCode,msisdn, callback) {
	var cancelPath=getPath('/number/cancel/')+'/'+countryCode+'/'+msisdn;
	sendRequest(cancelPath,'POST',callback);
}
exports.changePassword = function(newSecret,callback) {
	var settingsPath=getPath('/account/settings/')+'?newSecret='+encodeURIComponent(newSecret);
	sendRequest(settingsPath,'POST',callback);
}
exports.changeMoCallbackUrl = function(newUrl,callback) {
	var settingsPath=getPath('/account/settings/')+'?moCallBackUrl='+encodeURIComponent(newUrl);
	sendRequest(settingsPath,'POST',callback);
}
exports.changeDrCallbackUrl = function(newSecret,callback) {
	var settingsPath=getPath('/account/settings/')+'?drCallBackUrl='+encodeURIComponent(newUrl);
	sendRequest(settingsPath,'POST',callback);
}
