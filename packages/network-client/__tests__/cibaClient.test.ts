import {
  NetworkClient,
  Purpose,
  Scope,
} from '../lib';
import { SDKTestCase, testPrivateKey } from '../../../testHelpers';
import { AuthenticationType } from '@vonage/server-client';
import { VonageTest } from '../../../testHelpers';

class CIBATestClient extends NetworkClient {
  protected authType?: AuthenticationType = AuthenticationType.CIBA;

  protected _purpose = Purpose.FRAUD_PREVENTION_AND_DETECTION;
  protected _scope = Scope.NUMBER_VERIFICATION_VERIFY_READ;

  async makeTestCIBARequest() {
    await this.sendGetRequest('https://api-eu.vonage.com/foo/bar');
  }
}

const testCases = [
  {
    label: 'make CIBA request',
    baseUrl: 'https://api-eu.vonage.com',
    clientMethod: 'makeTestCIBARequest',
    reqHeaders: {
      authorization: (value) => value.startsWith('Bearer '),
    },
    client: new CIBATestClient(
      {
        privateKey: testPrivateKey,
        applicationId: 'my-application',
        msisdn: '447700900000',
      },
    ),
    requests: [
      [
        '/oauth2/bc-authorize',
        'POST',
        {
          login_hint: 'tel:+447700900000',
          scope: `openid dpv:${Purpose.FRAUD_PREVENTION_AND_DETECTION}#${Scope.NUMBER_VERIFICATION_VERIFY_READ}`,
        },
      ],
      [
        '/oauth2/token',
        'POST',
        {
          auth_req_id: 'auth-req-id',
          grant_type: 'urn:openid:params:grant-type:ciba',
        },
      ],
      [
        '/foo/bar',
        'GET',
      ],
    ],
    responses: [
      [
        200,
        {
          auth_req_id: 'auth-req-id',
        }
      ],
      [
        200,
        {
          access_token: 'access',
          expires: new Date().getTime() * 1500
        }
      ],
      [
        204,
      ],
    ],
    generator: false,
    error: false,
    expected: undefined,
  },
  {
    label: 'error when getting request Id fails with 401',
    baseUrl: 'https://api-eu.vonage.com',
    clientMethod: 'makeTestCIBARequest',
    reqHeaders: {
      authorization: (value) => value.startsWith('Bearer '),
    },
    client: new CIBATestClient(
      {
        privateKey: testPrivateKey,
        applicationId: 'my-application',
        msisdn: '447700900000',
      },
    ),
    requests: [
      [
        '/oauth2/bc-authorize',
        'POST',
        {
          login_hint: 'tel:+447700900000',
          scope: `openid dpv:${Purpose.FRAUD_PREVENTION_AND_DETECTION}#${Scope.NUMBER_VERIFICATION_VERIFY_READ}`,
        },
      ],
    ],
    responses: [
      [
        401,
      ],
    ],
    generator: false,
    error: 'A 401 was returned when trying to get authorization. '
      + 'Some possible reasons for this:'
      + '- The application id or private key are invalid. '
      + '- You have not setup the Network API correctly for your application .',
    expected: undefined,
  },
  {
    label: 'error when getting request Id fails with 400',
    baseUrl: 'https://api-eu.vonage.com',
    clientMethod: 'makeTestCIBARequest',
    reqHeaders: {
      authorization: (value) => value.startsWith('Bearer '),
    },
    client: new CIBATestClient(
      {
        privateKey: testPrivateKey,
        applicationId: 'my-application',
        msisdn: '447700900000',
      },
    ),
    requests: [
      [
        '/oauth2/bc-authorize',
        'POST',
        {
          login_hint: 'tel:+447700900000',
          scope: `openid dpv:${Purpose.FRAUD_PREVENTION_AND_DETECTION}#${Scope.NUMBER_VERIFICATION_VERIFY_READ}`,
        },
      ],
    ],
    responses: [
      [
        400,
      ],
    ],
    generator: false,
    error: 'It appears you have not enabled the Network API for your account. '
      + 'Please contact your account manager to enable this feature. ',
    expected: undefined,
  },
  {
    label: 'error when getting request Id fails with 404',
    baseUrl: 'https://api-eu.vonage.com',
    clientMethod: 'makeTestCIBARequest',
    reqHeaders: {
      authorization: (value) => value.startsWith('Bearer '),
    },
    client: new CIBATestClient(
      {
        privateKey: testPrivateKey,
        applicationId: 'my-application',
        msisdn: '447700900000',
      },
    ),
    requests: [
      [
        '/oauth2/bc-authorize',
        'POST',
        {
          login_hint: 'tel:+447700900000',
          scope: `openid dpv:${Purpose.FRAUD_PREVENTION_AND_DETECTION}#${Scope.NUMBER_VERIFICATION_VERIFY_READ}`,
        },
      ],
    ],
    responses: [
      [
        404,
      ],
    ],
    generator: false,
    error: 'A 404 was returned when trying to get authorization. '
      + 'Some possible reasons for this:'
      + '- The network application is not setup correctly. '
      + '- The phone number is not associated with this network. ',
    expected: undefined,
  },
  {
    label: 'erro when getting token fails with 401',
    baseUrl: 'https://api-eu.vonage.com',
    clientMethod: 'makeTestCIBARequest',
    reqHeaders: {
      authorization: (value) => value.startsWith('Bearer '),
    },
    client: new CIBATestClient(
      {
        privateKey: testPrivateKey,
        applicationId: 'my-application',
        msisdn: '447700900000',
      },
    ),
    requests: [
      [
        '/oauth2/bc-authorize',
        'POST',
        {
          login_hint: 'tel:+447700900000',
          scope: `openid dpv:${Purpose.FRAUD_PREVENTION_AND_DETECTION}#${Scope.NUMBER_VERIFICATION_VERIFY_READ}`,
        },
      ],
      [
        '/oauth2/token',
        'POST',
        {
          auth_req_id: 'auth-req-id',
          grant_type: 'urn:openid:params:grant-type:ciba',
        },
      ],
    ],
    responses: [
      [
        200,
        {
          auth_req_id: 'auth-req-id',
        }
      ],
      [
        401,
      ],
    ],
    generator: false,
    error: 'Invalid credentials. Please check that the application id and private key are correct. '
      + 'This could also mean that you have not setup the Network API correctly for your application .',
    expected: undefined,
  },
  {
    label: 'erro when getting token fails with 400',
    baseUrl: 'https://api-eu.vonage.com',
    clientMethod: 'makeTestCIBARequest',
    reqHeaders: {
      authorization: (value) => value.startsWith('Bearer '),
    },
    client: new CIBATestClient(
      {
        privateKey: testPrivateKey,
        applicationId: 'my-application',
        msisdn: '447700900000',
      },
    ),
    requests: [
      [
        '/oauth2/bc-authorize',
        'POST',
        {
          login_hint: 'tel:+447700900000',
          scope: `openid dpv:${Purpose.FRAUD_PREVENTION_AND_DETECTION}#${Scope.NUMBER_VERIFICATION_VERIFY_READ}`,
        },
      ],
      [
        '/oauth2/token',
        'POST',
        {
          auth_req_id: 'auth-req-id',
          grant_type: 'urn:openid:params:grant-type:ciba',
        },
      ],
    ],
    responses: [
      [
        200,
        {
          auth_req_id: 'auth-req-id',
        }
      ],
      [
        400,
      ],
    ],
    generator: false,
    error:  'It appears you have not enabled the Network API for your account. '
      + 'Please contact your account manager to enable this feature. ',
    expected: undefined,
  }
] as SDKTestCase<CIBATestClient>[];

VonageTest([{
  name: 'CIBA tests',
  tests: testCases,
}]);

