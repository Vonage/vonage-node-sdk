import { tokenGenerate } from '../lib';
import { verify } from 'jsonwebtoken';
import { readFileSync } from 'fs';
import {
  MissingApplicationIdError,
  MissingPrivateKeyError,
  InvalidPrivateKeyError,
  InvalidApplicationIdError,
} from '../lib/errors/index';

const applicationId = '12345';
const privateKey = readFileSync(`${__dirname}/private.test.key`);
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

describe('Token Generator', () => {
  test('Will throw when missing applicationId', () => {
    // eslint-disable-next-line
        // @ts-ignore
    expect(() => tokenGenerate()).toThrow(new MissingApplicationIdError());
  });

  test('Will throw when missing privateKey', () => {
    // eslint-disable-next-line
        // @ts-ignore
    expect(() => tokenGenerate('app-id')).toThrow(
      new MissingPrivateKeyError(),
    );
  });

  test('Will throw when applicationId not a string', () => {
    // eslint-disable-next-line
        // @ts-ignore
    expect(() => tokenGenerate(12345, privateKey)).toThrow(
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
    const token = tokenGenerate(applicationId, privateKey);
    const decoded = verify(token, privateKey, { algorithms: ['RS256'] });
    expect(typeof token).toEqual('string');
    expect(decoded).toHaveProperty('iat');
    expect(decoded).toHaveProperty('jti');
    expect(decoded).toHaveProperty('exp');
    expect(decoded).toHaveProperty('application_id');
  });

  test('Can return a valid JWT string with private key as string', () => {
    const token = tokenGenerate(applicationId, privateKey.toString());
    const decoded = verify(token, privateKey, { algorithms: ['RS256'] });
    expect(typeof token).toEqual('string');
    expect(decoded).toHaveProperty('iat');
    expect(decoded).toHaveProperty('jti');
    expect(decoded).toHaveProperty('exp');
    expect(decoded).toHaveProperty('application_id');
  });

  test('Can accept and use options', () => {
    const token = tokenGenerate(applicationId, privateKey, {
      ttl,
      subject,
      acl,
    });
    const decoded = verify(token, privateKey, { algorithms: ['RS256'] });
    expect(decoded.exp).toEqual(decoded.iat + ttl);
    expect(decoded.sub).toEqual(subject);
    expect(decoded).not.toHaveProperty('ttl');
    expect(decoded.acl).toMatchObject(acl);
  });
});
