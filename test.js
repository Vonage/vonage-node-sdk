var nexmo = require('./lib/nexmo');
nexmo.initialize(<KEY>,<SECRET>);
nexmo.sendTextMessage(<FROM_NUMBER>,<TO_NUMBER>,'testing');
nexmo.sendMessage({from:<FROM_NUMBER>,to:<TO_NUMBER>,text:'testing'},consolelog);
function consolelog (messageResponse) {
        console.dir(messageResponse);
}
nexmo.checkBalance(consolelog);
nexmo.getPricing('US',consolelog);
nexmo.getNumbers(consolelog);
nexmo.searchNumbers('US',consolelog);
nexmo.searchNumbers('US',303,consolelog);
nexmo.changePassword('nexmoapi',consolelog);
