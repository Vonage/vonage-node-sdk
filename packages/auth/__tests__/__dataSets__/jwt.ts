import { jest } from '@jest/globals';
import { tokenGenerate } from '@vonage/jwt';
import { AuthParams } from '../../lib/types';
import { applicationId, } from '../common';
import { testPrivateKey, testPrivateKeyPath } from '../../../../testHelpers';

jest.useFakeTimers({
  now: 10907902800000,
});

export default [
  {
    label: 'create bearer header with private string',
    method: 'createBearerHeader',
    authParameters: {
      privateKey: testPrivateKey,
      applicationId: applicationId,
      jwtOptions: {
        jti: 'foo',
      },
    } as AuthParams,
    parameters: [],
    expected: `Bearer ${tokenGenerate(applicationId, testPrivateKey, {
      jti: 'foo',
    })}`,
  },
  {
    label: 'create bearer header with private key file',
    method: 'createBearerHeader',
    authParameters: {
      privateKey: testPrivateKeyPath,
      applicationId: applicationId,
      jwtOptions: {
        jti: 'foo',
      },
    } as AuthParams,
    parameters: [],
    expected: `Bearer ${tokenGenerate(applicationId, testPrivateKey, {
      jti: 'foo',
    })}`,
  },
  {
    label: 'create bearer header with custom claims',
    method: 'createBearerHeader',
    authParameters: {
      privateKey: testPrivateKeyPath,
      applicationId: applicationId,
      jwtOptions: {
        jti: 'foo',
        fizz: 'buzz',
      },
    } as AuthParams,
    parameters: [],
    expected: `Bearer ${tokenGenerate(applicationId, testPrivateKey, {
      jti: 'foo',
      fizz: 'buzz',
    })}`,
  },
  {
    label: 'create bearer header with private key path',
    method: 'createBearerHeader',
    authParameters: {
      privateKey: testPrivateKeyPath,
      applicationId: applicationId,
      jwtOptions: {
        jti: 'foo',
        fizz: 'buzz',
      },
    } as AuthParams,
    parameters: [],
    expected: `Bearer ${tokenGenerate(applicationId, testPrivateKey, {
      jti: 'foo',
      fizz: 'buzz',
    })}`,
  },
];
