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
		
		it('should generate the expected JWT', function() {
			var expectedToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0NzU2MjIwMDAwMDAsImFwcGxpY2F0aW9uX2lkIjoiYXBwLWlkIiwianRpIjoiand0LWlkIn0.SEAvUWa_7iXStz6Sz0IKjTGmEt9wR5JpKHDrmZScVbWnlo4_4JzneuOzkH9kTcxJGBwmDJw33aALw5ZprsGbDtnk4ZzXPdM_ESX6Yg6UQTSHaM7RRL4ce-aXIqRAf2s-X-XMGjQeClpGJo1VIQndmerXBacGVuPjK2_4ads4DY9Dvsx6h3PktewLO1IwzgFm94W_dD-Wle_vOFGT_8m_kV8fXkzpH-AKgxFALDnzZADiM3tVwECsC2dOK6JLwZ_YhSM421lonUkWhNt6WWfaZ_eVbbo-BuE6NuTch6xKQoH6XxC1jqKPsX0k-xREBkyHMCF-IpOgsSeeESvZ48NRgw';
			
			var testPrivateKey = fs.readFileSync(__dirname + '/private-test.key');
			
			var jwt = new Jwt();
			var token = jwt.generate(testPrivateKey, 'app-id', new Date(2016, 9, 5).getTime(), 'jwt-id')
			
			expect(token).to.be(expectedToken);
		});
		
	})
	
});
