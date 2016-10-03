import uuid from 'uuid';
import jwt from 'jsonwebtoken';

class JwtGenerator {
    /**
     * Generate a JSON Web Token (JWT) for the application with the given
     * `applicationId`.
     *
     * @returns {String} the generated token
     */
    generate(cert, applicationId, issuedAt = Date.now(), jwtIdClaim = uuid.v1()) {
        if (!cert instanceof Buffer) {
            throw new Error('cert must be of type Buffer');
        }

        var toSign = {
            'iat': issuedAt,
            'application_id': applicationId,
            'jti': jwtIdClaim
        };

        var token = jwt.sign(toSign, cert, {
            algorithm: 'RS256'
        });
        return token;
    }
}

module.exports = JwtGenerator;
