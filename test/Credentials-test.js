import chai, {
    expect
} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import fs from 'fs';

chai.use(sinonChai);

import JwtGenerator from '../lib/JwtGenerator';

import Credentials from '../lib/Credentials';

describe('Credentials Object', function() {

  it('should be possible to construct a Credential object', function() {
    var cred = Credentials.parse('KEY', 'SECRET');

    expect(cred).to.be.an.instanceof(Credentials);
  });

  it('should parse object literal into a Credential object', function() {
    var key = 'KEY';
    var secret = 'SECRET';
    var appId = 'app-id';
    var privateKey = __dirname + '/private-test.key';
    var obj = {
      apiKey: key,
      apiSecret: secret,
      applicationId: appId,
      privateKey: privateKey
    };
    var parsed = Credentials.parse(obj);

    expect(parsed).to.be.an.instanceof(Credentials);
    expect(parsed.apiKey).to.be.equal(key);
    expect(parsed.apiSecret).to.be.equal(secret);
    expect(parsed.applicationId).to.be.equal(appId);
    expect(parsed.privateKey).to.be.ok;
  });

  it('should throw an error when a privateKey is provided and the file does not exist', function() {
    var create = function() {
      new Credentials('KEY', 'SECRET', './no-key-here.key');
    };
    expect(create).to.throw(Error);
  });

  it('should read a private key from a file into a Buffer accessible via Credentials.privateKey', function() {
    var cred = new Credentials('KEY', 'SECRET', __dirname + '/private-test.key');
    expect(cred.privateKey).to.be.an.instanceof(Buffer);
  });

  it('should turn a private key string into a Buffer accessible via Credentials.privateKey', function() {
    var key = fs.readFileSync(__dirname + '/private-test.key');
    var cred = new Credentials('KEY', 'SECRET', key);
    expect(cred.privateKey).to.be.an.instanceof(Buffer);
  });

  it('should support passing a privateKey of type string', function() {
    var key =
`-----BEGIN PRIVATE KEY-----
blah blah blah
-----END PRIVATE KEY-----`;
    var cred = new Credentials('KEY', 'SECRET', key);
    expect(cred.privateKey).to.be.an.instanceof(Buffer);
  });

  it('should allow an applicationId to be provided upon construction', function() {
    var appId = 'some_app_id';
    var cred = new Credentials('KEY', 'SECRET', __dirname + '/private-test.key', appId);
    expect(cred.applicationId).to.equal(appId);
  });

  it('should allow a JWT to be generated using supplied application ID', function() {
    var stub = sinon.createStubInstance(JwtGenerator);

    var cred = new Credentials('KEY', 'SECRET', __dirname + '/private-test.key', 'app-id');
    cred._setJwtGenerator(stub);

    cred.generateJwt();

    expect(stub.generate).to.be.calledWith(cred.privateKey, {application_id: cred.applicationId});
  });

  it('should allow a JWT to be generated using an alternative application ID', function() {
    var stub = sinon.createStubInstance(JwtGenerator);

    var cred = new Credentials('KEY', 'SECRET', __dirname + '/private-test.key', 'app-id');
    cred._setJwtGenerator(stub);

    var altAppId = 'another-app-id';
    cred.generateJwt(altAppId);

    expect(stub.generate).to.be.calledWith(cred.privateKey, {application_id: altAppId});
  });

  it('should allow a JWT to be generated using an alternative private key', function() {
    var stub = sinon.createStubInstance(JwtGenerator);

    var cred = new Credentials('KEY', 'SECRET', __dirname + '/private-test.key', 'app-id');
    cred._setJwtGenerator(stub);

    var altAppId = 'another-app-id';
    cred.generateJwt(altAppId, 'ALTERNATIVE_KEY');

    expect(stub.generate).to.be.calledWith('ALTERNATIVE_KEY', {application_id: altAppId});
  });
});
