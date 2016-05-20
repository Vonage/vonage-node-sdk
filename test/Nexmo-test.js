import Nexmo from '../lib/Nexmo';
import expect from 'expect.js'

describe('Nexmo Object instance', function () {
  
  it('should expose a sms object', function () {
    var nexmo = new Nexmo({apiKey:'test', apiSecret:'test'});
    expect(nexmo.sms).to.be.a('object');
  });
  
  it('should expose a voice object', function () {
    var nexmo = new Nexmo({apiKey:'test', apiSecret:'test'});
    expect(nexmo.voice).to.be.a('object');
  });
  
  it('should expose a number object', function () {
    var nexmo = new Nexmo({apiKey:'test', apiSecret:'test'});
    expect(nexmo.number).to.be.a('object');
  });
  
  it('should expose a verify object', function () {
    var nexmo = new Nexmo({apiKey:'test', apiSecret:'test'});
    expect(nexmo.verify).to.be.a('object');
  });
  
  it('should expose a numberInsight object', function () {
    var nexmo = new Nexmo({apiKey:'test', apiSecret:'test'});
    expect(nexmo.numberInsight).to.be.a('object');
  });
    
  it('should expose a app object', function () {
    var nexmo = new Nexmo({apiKey:'test', apiSecret:'test'});
    expect(nexmo.app).to.be.a('object');
  });
  
  it('should expose a account object', function () {
    var nexmo = new Nexmo({apiKey:'test', apiSecret:'test'});
    expect(nexmo.account).to.be.a('object');
  });
  
});
