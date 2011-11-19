var https=require('https');
var querystring=require('querystring');

var headers = {'Content-Type':'application/x-www-form-urlencoded'};
var initialized = false;

exports.initialize = function(pkey,psecret) {
	var up = { username :pkey,
		   password :psecret}
	options.path='/sms/json'+'?'+querystring.stringify(up);
	initialized = true;
}
options= {
	host: 'rest.nexmo.com',
    	port: 443,
    	path: '',
    	method: 'GET',
    	headers: headers
};

exports.sendTextMessage = function(sender,recipient,message, callback) {
	exports.sendMessage({from:sender,to:recipient,text:message},callback);
}

exports.sendMessage = function(data, callback) {
	if (!initialized) {
		throw 'nexmo not initialized, call nexmo.initialize(username, password) first before sending message';
	}
	options.path=options.path+'&'+querystring.stringify(data);
	var request=https.request(options);
	request.end();
	request.on('response',function(response){ 
		response.setEncoding('utf8'); 
		response.on('data',function(chunk){ 
			console.log(chunk);
			if (callback) callback(JSON.parse(chunk));
		})
	});
}
