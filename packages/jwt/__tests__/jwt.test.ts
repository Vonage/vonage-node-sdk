import { tokenGenerate } from '../lib';
import { verify } from 'jsonwebtoken';
import fs from 'fs';

const applicationId = '12345';
const privateKey = fs.readFileSync(`${__dirname}/private.test.key`);
const ttl = 1800;
const subject = 'test';
const acl = {
    paths: {
        '/messages': {
            methods: ['POST', 'GET'],
            filters: {
                from: '447977271009',
            },
        },
        '/messages/*/': {
            methods: ['GET'],
            filters: {
                from: '447977271009',
            },
        },
    },
};

describe('Token Generator Method', () => {
    test('should throw if missing applicationId or privateKey', () => {
        expect(() => (<any>tokenGenerate)()).toThrow(
            'Missing applicationId or privateKey',
        );
    });

    test('should throw if applicationId not a string', () => {
        expect(() => (<any>tokenGenerate)(12345, privateKey)).toThrow(
            'applicationId must be string',
        );
    });

    test('should throw if privateKey not a string or buffer', () => {
        expect(() => (<any>tokenGenerate)(applicationId, 56789)).toThrow(
            'privateKey must be string or buffer',
        );
    });

    test('should return a valid JWT string', () => {
        const token = tokenGenerate(applicationId, privateKey);
        const decoded = verify(token, privateKey, {
            algorithms: ['RS256'],
        });
        expect(typeof token).toEqual('string');
        expect(decoded).toHaveProperty('iat');
        expect(decoded).toHaveProperty('jti');
        expect(decoded).toHaveProperty('exp');
        expect(decoded).toHaveProperty('application_id');
    });

    test('should accept and use options', () => {
        const token = tokenGenerate(applicationId, privateKey, {
            ttl,
            subject,
            acl,
        });
        const decoded = <any>verify(
            token,
            privateKey,
            { algorithms: ['RS256'] },
        );
        expect(decoded.exp).toEqual(decoded.iat + ttl);
        expect(decoded.sub).toEqual(subject);
        expect(decoded.acl).toMatchObject(acl);
    });
});
