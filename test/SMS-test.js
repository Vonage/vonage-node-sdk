import SMS from '../src/SMS';
import expect from 'expect.js'

describe('SMS Object', function () {
  it('should expose sendTextMessage function', function () {
    var sms = new SMS({key:'test', secret:'test'});
    expect(sms.sendTextMessage).to.be.a('function');
  });
});
