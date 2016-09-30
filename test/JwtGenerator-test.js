import JwtGenerator from '../src/JwtGenerator';
import fs from 'fs';
import expect from 'expect.js';

describe('JwtGenerator Object', function() {

    describe('.generate', function() {

        it('should throw an exception if the cert is not a Buffer', function() {
            var generator = new JwtGenerator();
            var generate = function() {
                generator.generate('blah blah', 'application_id');
            };
            expect(generate).to.throwError();
        });

        it('should generate a JWT', function() {
            var testPrivateKey = fs.readFileSync(__dirname + '/private-test.key');

            var generator = new JwtGenerator();
            var token = generator.generate(testPrivateKey, 'app-id', new Date(2016, 9, 5).getTime(), 'jwt-id');

            expect(token).to.be.a('string');
        });

    });

});
