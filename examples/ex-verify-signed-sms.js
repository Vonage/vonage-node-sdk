module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
    apiKey: config.API_KEY,
    apiSecret: config.API_SECRET,
    signatureSecret: config.SIGNATURE_SECRET,
    signatureMethod: "md5hash"
  }, {
    debug: config.DEBUG
  });

  const app = require('express')()
  const bodyParser = require('body-parser')

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app
    .route('/webhooks/inbound-message')
    .get(handleInboundSms)
    .post(handleInboundSms)

  function handleInboundSms(request, response) {
    const params = Object.assign(request.query, request.body)

    if (nexmo.generateSignature(params) === params.sig) {
      console.log("Valid signature");
    } else {
      console.log("Invalid signature");
    }
    console.log(params)

    response.status(204).send()
  }

  app.listen(3000)

};
