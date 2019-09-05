module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

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

    if (Nexmo.generateSignature("md5hash", config.SIGNATURE_SECRET, params) === params.sig) {
      console.log("Valid signature");
    } else {
      console.log("Invalid signature"
    );
    }
    console.log(params)

    response.status(204).send()
  }

  app.listen(3000)

};
