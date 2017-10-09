import JwtGenerator from '../src/JwtGenerator';
import fs from 'fs';
import expect from 'expect.js';
import jwt from 'jsonwebtoken';

describe('JwtGenerator Object', function() {

  describe('.generate', function() {

    it('should throw an exception if the cert is not a Buffer', function() {
      const generator = new JwtGenerator();
      const generate = function() {
        generator.generate('blah blah');
      };
      expect(generate).to.throwError();
    });

    it('should throw an exception if the claims is not a Object', function() {
      const generator = new JwtGenerator();
      const generate = function() {
        generator.generate('blah blah', 'application_id');
      };
      expect(generate).to.throwError();
    });

    it('should generate a JWT', function() {
      const testPrivateKey = fs.readFileSync(__dirname + '/private-test.key');

      const generator = new JwtGenerator();
      const token = generator.generate(testPrivateKey, {
        application_id: 'app-id',
        iat: new Date(2016, 9, 5).getTime()/1000
      });

      expect(token).to.be.a('string');
    });

    it('should add jti and iat claims by default', function() {
      const testPrivateKey = fs.readFileSync(__dirname + '/private-test.key');
      const testPublicKey = fs.readFileSync(__dirname + '/public-test.key');

      const generator = new JwtGenerator();
      const token = generator.generate(testPrivateKey);

      const decoded = jwt.verify(token, testPublicKey, {algorithms:['RS256']});

      expect(decoded.jti).to.be.ok();
      expect(decoded.iat).to.be.ok();
    });

    it('should be possible to add additional claims', function() {
      const testPrivateKey = fs.readFileSync(__dirname + '/private-test.key');
      const testPublicKey = fs.readFileSync(__dirname + '/public-test.key');

      const generator = new JwtGenerator();
      const appId = 'app-id';
      const randomValue = Math.random();
      const token = generator.generate(testPrivateKey, {
        application_id: appId,
        random: randomValue
      });

      const decoded = jwt.verify(token, testPublicKey, {algorithms:['RS256']});

      expect(decoded.application_id).to.be(appId);
      expect(decoded.random).to.be(randomValue);
    });

  });

});
