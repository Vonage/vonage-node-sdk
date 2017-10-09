import chai, {
    expect
} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import fs from 'fs';

chai.use(sinonChai);

import Nexmo from '../lib/Nexmo';
import CallsResource from '../lib/CallsResource';

describe('Nexmo definition', () => {

  describe('.generateJwt', () => {
    it('should expose a generateJwt function', () => {
      expect(Nexmo.generateJwt).to.be.a('function');
    });

    it('should throw an exception if privateKey file does not exist', () => {
      const create = function() {
        Nexmo.generateJwt('./no-key-here.key');
      };
      expect(create).to.throw(Error);
    });

    it('should create a JWT with a private key (file path) [static]', () => {
      const token = Nexmo.generateJwt(__dirname + '/private-test.key');
      expect(token).to.be.a('string');
    });

    it('should create a JWT with a private key (Buffer) [static]', () => {
      const fileBuffer = fs.readFileSync(__dirname + '/private-test.key');
      const token = Nexmo.generateJwt(fileBuffer);
      expect(token).to.be.a('string');
    });

  });

});

describe('Nexmo Object instance', function() {

  it('should expose a credentials object', function() {
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    });
    expect(nexmo.credentials).to.be.a('object');
  });

  it('should expose a message object', function() {
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    });
    expect(nexmo.message).to.be.a('object');
  });

  it('should expose a voice object', function() {
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    });
    expect(nexmo.voice).to.be.a('object');
  });

  it('should expose a number object', function() {
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    });
    expect(nexmo.number).to.be.a('object');
  });

  it('should expose a verify object', function() {
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    });
    expect(nexmo.verify).to.be.a('object');
  });

  it('should expose a numberInsight object', function() {
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    });
    expect(nexmo.numberInsight).to.be.a('object');
  });

  it('should expose a app object', function() {
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    });
    expect(nexmo.app).to.be.a('object');
  });

  it('should expose a applications object', function() {
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    });
    expect(nexmo.applications).to.be.a('object');
  });

  it('should alias apps to applications object', function() {
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    });
    expect(nexmo.applications).to.equal(nexmo.app);
  });

  it('should expose a account object', function() {
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    });
    expect(nexmo.account).to.be.a('object');
  });

  it('should expose a calls object', function() {
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    });
    expect(nexmo.calls).to.be.an.instanceOf(CallsResource);
  });

  it('should expose a files object', function() {
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    });
    expect(nexmo.files).to.be.a('object');
  });

  it('should allow options to be passed', function() {
    const initializedSpy = sinon.spy();
    const options = {
      nexmoOverride: {
        initialize: initializedSpy
      },
      appendToUserAgent: 'EXT',
      debug: true
    };
    new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    }, options);
    expect(initializedSpy.calledWith('test', 'test', options)).to.be.true;
  });

  it('should have debug turned off by default', function() {
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    });
    expect(nexmo.options.debug).to.be.false;
  });

  it('should allow a custom logger to be set', function() {
    const logger = {
      info: function() {},
      error: function() {},
      warn: function() {}
    };
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    }, {
      logger: logger
    });
    expect(nexmo.options.logger).to.equal(logger);
  });

  it('should allow a debug option to be set', function() {
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    }, {
      debug: true
    });
    expect(nexmo.options.debug).to.be.true;
  });

  it('should have a default user agent in the form LIBRARY-NAME/LIBRARY-VERSION/LANGUAGE-VERSION', function() {
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    });
    expect(nexmo.options.userAgent).to.match(/^nexmo-node\/[\d.]* node\/[\d.]*$/);
  });

  it('should append to the user agent when a appendToUserAgent option is passed', function() {
    const options = {
      appendToUserAgent: 'nexmo-cli/1.0.0'
    };
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test'
    }, options);
    expect(nexmo.options.userAgent).to.match(/nexmo-node\/[\d.]* node\/[\d.]* nexmo-cli\/1\.0\.0/);
  });

  it('should create a JWT', () => {
    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test',
      privateKey: __dirname + '/private-test.key',
      application_id: 'app-id'
    });
    const token = nexmo.generateJwt();
    expect(token).to.be.a('string');
  });

  it('should create same JWT as static function', () => {
    const iat = parseInt(Date.now()/1000, 10);
    const jti = 'some_jti';
    const appId = 'app_id';
    const privateKey = __dirname + '/private-test.key';

    const expectedJwt = Nexmo.generateJwt(
      privateKey,
      {
        'application_id': appId,
        'iat': iat,
        'jti': jti
      }
    );

    const nexmo = new Nexmo({
      apiKey: 'test',
      apiSecret: 'test',
      privateKey: privateKey,
      applicationId: appId
    });
    const token = nexmo.generateJwt({'iat': iat,'jti': jti});
    expect(token).to.equal(expectedJwt);
  });

});
