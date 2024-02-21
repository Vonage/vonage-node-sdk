import { tokenGenerate } from '@vonage/jwt';
import { AuthParams } from '../../lib/types/index';
import { applicationId, privateKeyString, privateKeyPath } from '../common';
import { readFileSync } from 'fs';

jest.useFakeTimers({
  now: 10907902800000,
});

export default [
  {
    label: 'create bearer header with private string',
    method: 'createBearerHeader',
    authParameters: {
      privateKey: privateKeyString,
      applicationId: applicationId,
      jwtOptions: {
        jti: 'foo',
      },
    } as AuthParams,
    parameters: [],
    expected: `Bearer ${tokenGenerate(applicationId, privateKeyString, {
      jti: 'foo',
    })}`,
  },
  {
    label: 'create bearer header with private key file',
    method: 'createBearerHeader',
    authParameters: {
      privateKey: readFileSync(privateKeyPath),
      applicationId: applicationId,
      jwtOptions: {
        jti: 'foo',
      },
    } as AuthParams,
    parameters: [],
    expected: `Bearer ${tokenGenerate(applicationId, privateKeyString, {
      jti: 'foo',
    })}`,
  },
  {
    label: 'create bearer header with custom claims',
    method: 'createBearerHeader',
    authParameters: {
      privateKey: readFileSync(privateKeyPath),
      applicationId: applicationId,
      jwtOptions: {
        jti: 'foo',
        fizz: 'buzz',
      },
    } as AuthParams,
    parameters: [],
    expected: `Bearer ${tokenGenerate(applicationId, privateKeyString, {
      jti: 'foo',
      fizz: 'buzz',
    })}`,
  },
  {
    label: 'create bearer header with private key path',
    method: 'createBearerHeader',
    authParameters: {
      privateKey: privateKeyPath,
      applicationId: applicationId,
      jwtOptions: {
        jti: 'foo',
        fizz: 'buzz',
      },
    } as AuthParams,
    parameters: [],
    expected: `Bearer ${tokenGenerate(applicationId, privateKeyString, {
      jti: 'foo',
      fizz: 'buzz',
    })}`,
  },
];
