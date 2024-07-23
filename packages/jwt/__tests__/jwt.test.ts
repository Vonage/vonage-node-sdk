import { tokenGenerate, verifySignature } from '../lib';
import jwt from 'jsonwebtoken';
import {
  MissingApplicationIdError,
  MissingPrivateKeyError,
  InvalidPrivateKeyError,
  InvalidApplicationIdError,
  ACL,
} from '../lib';
import { testPrivateKey } from '../../../testHelpers';

const applicationId = '12345';
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
} as ACL;

describe('Token Generator', () => {
  test('Will throw when missing applicationId', () => {
    // eslint-disable-next-line
    // @ts-ignore
    expect(() => tokenGenerate()).toThrow(new MissingApplicationIdError());
  });

  test('Will throw when missing privateKey', () => {
    // eslint-disable-next-line
    // @ts-ignore
    expect(() => tokenGenerate('app-id')).toThrow(new MissingPrivateKeyError());
  });

  test('Will throw when applicationId not a string', () => {
    // eslint-disable-next-line
    // @ts-ignore
    expect(() => tokenGenerate(12345, testPrivateKey)).toThrow(
      new InvalidApplicationIdError(),
    );
  });

  test('Will throw when privateKey not a string or buffer', () => {
    // eslint-disable-next-line
    // @ts-ignore
    expect(() => tokenGenerate(applicationId, 56789)).toThrow(
      new InvalidPrivateKeyError(),
    );
  });

  test('Can return a valid JWT string', () => {
    const token = tokenGenerate(applicationId, testPrivateKey);
    const decoded = jwt.verify(token, testPrivateKey, { algorithms: ['RS256'] });
    expect(typeof token).toBe('string');
    expect(decoded).toHaveProperty('iat');
    expect(decoded).toHaveProperty('jti');
    expect(decoded).toHaveProperty('exp');
    expect(decoded).toHaveProperty('application_id');
  });

  test('Can return a valid JWT string with private key as string', () => {
    const token = tokenGenerate(applicationId, testPrivateKey.toString());
    const decoded = jwt.verify(token, testPrivateKey, { algorithms: ['RS256'] });
    expect(typeof token).toBe('string');
    expect(decoded).toHaveProperty('iat');
    expect(decoded).toHaveProperty('jti');
    expect(decoded).toHaveProperty('exp');
    expect(decoded).toHaveProperty('application_id');
  });

  test('Can accept and use options', () => {
    const token = tokenGenerate(applicationId, testPrivateKey, {
      ttl,
      subject,
      acl,
    });

    const decoded = jwt.verify(token, testPrivateKey, { algorithms: ['RS256'] });
    expect((decoded as jwt.JwtPayload).exp).toEqual(Number((decoded as jwt.JwtPayload).iat) + ttl);
    expect((decoded as jwt.JwtPayload).sub).toEqual(subject);
    expect((decoded as jwt.JwtPayload)).not.toHaveProperty('ttl');
    expect((decoded as jwt.JwtPayload).acl).toMatchObject(acl);
  });

  test('Can Verify signature', () => {
    const token = tokenGenerate(applicationId, testPrivateKey, {
      ttl,
      subject,
      acl,
    });

    // eslint-disable-next-line
    expect(verifySignature(token, testPrivateKey)).toEqual(true);
  });

  test('Will not validate with invalid key', () => {
    const token = tokenGenerate(applicationId, testPrivateKey, {
      ttl,
      subject,
      acl,
    });

    // eslint-disable-next-line
    expect(verifySignature(token, 'fizz-buzz')).toEqual(false);
  });

  test('Will not validate with invalid JWT token', () => {
    const token = jwt.sign({}, 'fizzBuzz');

    // eslint-disable-next-line
    expect(verifySignature(token, testPrivateKey)).toEqual(false);
  });

  test('Will not validate with non JWT token', () => {
    // eslint-disable-next-line
    expect(verifySignature('fizz-buzz', testPrivateKey)).toEqual(false);
  });
});
