var nexmo = require('./lib/nexmo');
nexmo.initialize(<KEY>,<SECRET>);
nexmo.sendTextMessage(<FROM_NUMBER>,<TO_NUMBER>,'testing',consolelog);
nexmo.sendMessage({from:<FROM_NUMBER>,to:<TO_NUMBER>,text:'testing'},consolelog);
function consolelog (err,messageResponse) {
	if (err) {
                console.log(err);
        } else {
                console.dir(messageResponse);
        }
}
nexmo.checkBalance(consolelog);
nexmo.getPricing('US',consolelog);
nexmo.getNumbers(consolelog);
nexmo.searchNumbers('US',consolelog);
nexmo.searchNumbers('US',303,consolelog);
nexmo.changePassword('nexmoapi',consolelog);

nexmo.sendTTSMessage = function(<TO_NUMBER>,'testing',{},consolelog);
nexmo.sendTTSPromptWithCapture(<TO_NUMBER>,'testing',<MAX_DIGITS>,'Goodbye',{},consolelog);
nexmo.sendTTSPromptWithConfirm(<TO_NUMBER>,'Enter your pin',<MAX_DIGITS>,'<PIN_CODE>','Goodbye','Wrong pin',{},consolelog);
nexmo.call(<TO_NUMBER>,<ANSWER_URL>,{},consolelog);