import Jwt from '../src/Jwt';
import fs from 'fs';
import expect from 'expect.js';

describe('Jwt Object', function () {
	
	describe('.generate', function () {
		
		it('should throw an exception if the cert is not a Buffer', function() {
			var jwt = new Jwt();
			var generate = function() {
				jwt.generate('blah blah', 'application_id');
			};
			expect(generate).to.throwError();
		});
		
		it('should generate a JWT', function() {			
			var testPrivateKey = fs.readFileSync(__dirname + '/private-test.key');
			
			var jwt = new Jwt();
			var token = jwt.generate(testPrivateKey, 'app-id', new Date(2016, 9, 5).getTime(), 'jwt-id')
			
			expect(token).to.be.a('string');
		});
		
	})
	
});
