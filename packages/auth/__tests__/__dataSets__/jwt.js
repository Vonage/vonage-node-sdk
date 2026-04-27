import { tokenGenerate } from '@vonage/jwt';
import { AuthParams } from '../../lib/types';
import { applicationId, } from '../common';
import { testPrivateKey, testPrivateKeyPath } from '../../../../testHelpers';

jest.useFakeTimers();
jest.setSystemTime(10907902800000);

export default [
  {
    label: 'create bearer header with string',
    method: 'createBearerHeader',
    authParameters: {
      privateKey: applicationId,
      jwtOptions: {
        jti: 'foo',
      },
    }: [],
    expected: `Bearer ${tokenGenerate(applicationId, testPrivateKey, {
      jti: 'foo',
    })}`,
  },
  {
    label: 'create bearer header with key file',
    method: 'createBearerHeader',
    authParameters: {
      privateKey: applicationId,
      jwtOptions: {
        jti: 'foo',
      },
    }: [],
    expected: `Bearer ${tokenGenerate(applicationId, testPrivateKey, {
      jti: 'foo',
    })}`,
  },
  {
    label: 'create bearer header with custom claims',
    method: 'createBearerHeader',
    authParameters: {
      privateKey: applicationId,
      jwtOptions: {
        jti: 'foo',
        fizz: 'buzz',
      },
    }: [],
    expected: `Bearer ${tokenGenerate(applicationId, testPrivateKey, {
      jti: 'foo',
      fizz: 'buzz',
    })}`,
  },
  {
    label: 'create bearer header with key path',
    method: 'createBearerHeader',
    authParameters: {
      privateKey: applicationId,
      jwtOptions: {
        jti: 'foo',
        fizz: 'buzz',
      },
    }: [],
    expected: `Bearer ${tokenGenerate(applicationId, testPrivateKey, {
      jti: 'foo',
      fizz: 'buzz',
    })}`,
  },
];
