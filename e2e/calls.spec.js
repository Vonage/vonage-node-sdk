import chai, {
    expect
} from 'chai';

var Nexmo = require('../lib/Nexmo');
const config = require('./config');

describe('calls', () => {

  let nexmo;

  beforeEach(() => {
    nexmo = new Nexmo({
        apiKey: config.API_KEY,
        apiSecret: config.API_SECRET,
        privateKey: config.PRIVATE_KEY,
        applicationId: config.APP_ID
      },
      {debug: config.DEBUG}
    );
  });

  xit('should allow a call to be created', (done) => {
    console.log(config.TO_NUMBER);
    console.log(config.FROM_NUMBER);
    nexmo.message.sendSms(config.FROM_NUMBER, config.TO_NUMBER, 'testing');
    nexmo.calls.create({
        to: [{
          type: 'phone',
          number: config.TO_NUMBER
        }],
        from: {
          type: 'phone',
          number: config.FROM_NUMBER
        },
        answer_url: ['https://nexmo-community.github.io/ncco-examples/first_call_talk.json']
    }, (error, result) => {
      if(error) {
          done(error);
      }
      console.log(result);
      expect(result.status, 201);

      done();
    });
  });

});
