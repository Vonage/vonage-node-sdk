import Nexmo from '../lib/Nexmo';
import expect from 'expect.js'

describe('Nexmo Object instance', function () {
  it('should expose a sms object', function () {
    var nexmo = new Nexmo({key:'test', secret:'test'});
    expect(nexmo.sms).to.be.a('object');
  });
});
