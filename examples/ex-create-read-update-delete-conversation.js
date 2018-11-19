module.exports = function(callback, config) {

  var Promise = require('bluebird');

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
      apiKey: config.API_KEY,
      apiSecret: config.API_SECRET,
      applicationId: config.APP_ID,
      privateKey: config.PRIVATE_KEY
    },
    {debug: config.DEBUG}
  );

  var conversations = Promise.promisifyAll(nexmo.conversations);

  var tempConversationName = new Date().getTime();
  console.log('Creating Conversation', tempConversationName);

  conversations.createAsync({display_name: tempConversationName})
    .then(function(createResp) {
      console.log('Getting Conversation', tempConversationName);
      return conversations.getAsync(createResp.id);
    })
    .then(function(getResp) {
      console.log('Getting Conversations', tempConversationName);
      return conversations.getAsync(undefined);
    })
    // .then(function(getResp) {
    //   console.log('Updating Conversation', tempConversationName);
    //   return conversations.updateAsync(getResp.id, {display_name: new Date().getTime()});
    // })
    // .then(function(updateResp) {
    //   console.log('Deleting Conversation', tempConversationName);
    //   return conversations.deleteAsync(updateResp.id);
    // })
    .then(function(deleteResp) {
      console.log('Conversation Deleted');
      callback(null, deleteResp);
    })
    .catch(callback);
};
