module.exports = function(callback, config) {

  var Promise = require('bluebird');
  
  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
      apiKey: config.API_KEY, 
      apiSecret: config.API_SECRET
    },
    {debug: config.DEBUG}
  );
    
  var app = Promise.promisifyAll(nexmo.app);
  
  var tempAppName = new Date().getTime(); 
  console.log('Creating App', tempAppName);

  app.createAsync(tempAppName, 'voice', 'https://v1uxw2scimhr.runscope.net', 'https://v1uxw2scimhr.runscope.net', null)
    .then(function(createResp) {
      console.log('Updating App', tempAppName);
      return app.updateAsync(createResp.id, tempAppName, 'voice', 'https://v1uxw2scimhr.runscope.net', 'https://v1uxw2scimhr.runscope.net', null);
    })
    .then(function(updateResp) {
      console.log('Deleting App', tempAppName);
      return app.deleteAsync(updateResp.id);
    })
    .then(function(deleteResp) {
      console.log('App Deleted');
      callback(null, deleteResp);
    })
    .catch(callback);
};
