import Nexmo from '../lib/Nexmo';
import expect from 'expect.js'
import sinon from 'sinon';

describe('Nexmo Object instance', function () {

  it('should expose a credentials object', function () {
    var nexmo = new Nexmo({apiKey:'test', apiSecret:'test'});
    expect(nexmo.credentials).to.be.a('object');
  });
  
  it('should expose a message object', function () {
    var nexmo = new Nexmo({apiKey:'test', apiSecret:'test'});
    expect(nexmo.message).to.be.a('object');
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
  
  it('should allow options to be passed', function () {
    var initializedSpy = sinon.spy();
    var options = {
      nexmoOverride: {
        initialize: initializedSpy
      },
      appendToUserAgent: 'EXT',
      debug: true
    };
    var nexmo = new Nexmo({apiKey:'test', apiSecret:'test'}, options);
    expect( initializedSpy.calledWith('test', 'test', options) ).to.be.ok();
  });

  it('should have debug turned off by default', function () {
    var nexmo = new Nexmo({apiKey:'test', apiSecret:'test'});
    expect( nexmo.options.debug ).to.be(false);
  });

  it('should allow a debug option to be set', function () {
    var nexmo = new Nexmo({apiKey:'test', apiSecret:'test'}, { debug: true });
    expect( nexmo.options.debug ).to.be(true);
  });
  
  it('should have a default user agent in the form LIBRARY-NAME/LIBRARY-VERSION/LANGUAGE-VERSION', function () {
    var nexmo = new Nexmo({apiKey:'test', apiSecret:'test'});
    expect( nexmo.options.userAgent ).to.match(/.*\/.*\/.*$/);
  });

  it('should append to the user agent when a appendToUserAgent option is passed', function () {
    var options = {
      appendToUserAgent: 'EXT'
    };
    var nexmo = new Nexmo({apiKey:'test', apiSecret:'test'}, options);
    expect( nexmo.options.userAgent ).to.match(/\/EXT$/);
  });
  
});
