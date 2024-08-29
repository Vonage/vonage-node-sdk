import { VonageTest } from '../../../testHelpers';
import {
  NetworkClient,
  Purpose,
  Scope,
} from '../lib';
import { SDKTestCase, testPrivateKey } from '../../../testHelpers';
import { AuthenticationType } from '@vonage/server-client';

class OAUTHTestClient extends NetworkClient {
  protected authType?: AuthenticationType = AuthenticationType.OAUTH2;

  protected _purpose = Purpose.FRAUD_PREVENTION_AND_DETECTION;
  protected _scope = Scope.NUMBER_VERIFICATION_VERIFY_READ;

  async makeTestRequest() {
    await this.sendGetRequest('https://api-eu.vonage.com/foo/bar');
  }
}

const testCases = [
  {
    label: 'exchange code for token',
    baseUrl: 'https://api-eu.vonage.com',
    clientMethod: 'exchangeCodeForToken',
    reqHeaders: {
      authorization: (value) => value.startsWith('Bearer '),
    },
    client: new OAUTHTestClient(
      {
        privateKey: testPrivateKey,
        applicationId: 'my-application',
        msisdn: '447700900000',
      },
      {
        redirectUri: 'https://example.com',
      }
    ),
    requests: [
      [
        '/oauth2/token',
        'POST',
        {
          code: 'code',
          grant_type: 'authorization_code',
          redirect_uri: 'https://example.com',
        },
      ],
    ],
    responses: [
      [
        200,
        {
          access_token: 'token',
          token_type: 'Bearer',
          expires_in: 3600,
        }
      ],
    ],
    parameters: [
      'code',
    ],
    generator: false,
    error: false,
    expected: {
      accessToken: 'token',
      tokenType: 'Bearer',
      expiresIn: 3600,
    }
  },
  {
    label: 'build ODIC URL',
    baseUrl: 'https://api-eu.vonage.com',
    clientMethod: 'buildOIDCURL',
    reqHeaders: {},
    client: new OAUTHTestClient(
      {
        privateKey: testPrivateKey,
        applicationId: 'my-application',
        msisdn: '447700900000',
      },
      {
        redirectUri: 'https://example.com',
      }
    ),
    requests: [],
    responses: [],
    parameters: [],
    generator: false,
    error: false,
    expected: 'https://oidc.idp.vonage.com/oauth2/auth?client_id=my-application&response_type=code&scope=openid+dpv%3AFraudPreventionAndDetection%23number-verification-verify-read&redirect_uri=https%3A%2F%2Fexample.com&login_hint=tel%3A%2B447700900000'
  },
  {
    label: 'build ODIC URL with state',
    baseUrl: 'https://api-eu.vonage.com',
    clientMethod: 'buildOIDCURL',
    reqHeaders: {},
    client: new OAUTHTestClient(
      {
        privateKey: testPrivateKey,
        applicationId: 'my-application',
        msisdn: '447700900000',
      },
      {
        redirectUri: 'https://example.com',
      }
    ),
    requests: [],
    responses: [],
    parameters: [
      'code',
    ],
    generator: false,
    error: false,
    expected: 'https://oidc.idp.vonage.com/oauth2/auth?client_id=my-application&response_type=code&scope=openid+dpv%3AFraudPreventionAndDetection%23number-verification-verify-read&redirect_uri=https%3A%2F%2Fexample.com&login_hint=tel%3A%2B447700900000&state=code'
  },
  {
    label: 'error when missing application id',
    baseUrl: 'https://api-eu.vonage.com',
    clientMethod: 'buildOIDCURL',
    reqHeaders: {},
    client: new OAUTHTestClient(
      {
        privateKey: testPrivateKey,
        msisdn: '447700900000',
      },
      {
        redirectUri: 'https://example.com',
      }
    ),
    requests: [],
    responses: [],
    parameters: [
      'code',
    ],
    generator: false,
    error: 'Missing application id',
  },
  {
    label: 'error when missing redirectUri id',
    baseUrl: 'https://api-eu.vonage.com',
    clientMethod: 'buildOIDCURL',
    reqHeaders: {},
    client: new OAUTHTestClient(
      {
        privateKey: testPrivateKey,
        applicationId: 'my-application',
        msisdn: '447700900000',
      },
    ),
    requests: [],
    responses: [],
    parameters: [
      'code',
    ],
    generator: false,
    error: 'You must set the redirectUri in the config',
  },
  {
    label: 'error when missing redirectUri',
    baseUrl: 'https://api-eu.vonage.com',
    clientMethod: 'exchangeCodeForToken',
    client: new OAUTHTestClient(
      {
        privateKey: testPrivateKey,
        applicationId: 'my-application',
        msisdn: '447700900000',
      },
    ),
    requests: [],
    responses: [],
    parameters: [],
    generator: false,
    error: 'You must set the redirectUri in the config',
  },
  {
    label: 'error when 401 response',
    baseUrl: 'https://api-eu.vonage.com',
    clientMethod: 'exchangeCodeForToken',
    reqHeaders: {
      authorization: (value) => value.startsWith('Bearer '),
    },
    client: new OAUTHTestClient(
      {
        privateKey: testPrivateKey,
        applicationId: 'my-application',
        msisdn: '447700900000',
      },
      {
        redirectUri: 'https://example.com',
      }
    ),
    requests: [
      [
        '/oauth2/token',
        'POST',
        {
          code: 'code',
          grant_type: 'authorization_code',
          redirect_uri: 'https://example.com',
        },
      ],
    ],
    responses: [
      [
        401
      ],
    ],
    parameters: [
      'code',
    ],
    generator: false,
    error: 'Invalid credentials. Please check that the application id and private key are correct. '
      + 'This could also mean that you have not setup the Network API correctly for your application .',
  },
  {
    label: 'error when 400 response',
    baseUrl: 'https://api-eu.vonage.com',
    clientMethod: 'exchangeCodeForToken',
    reqHeaders: {
      authorization: (value) => value.startsWith('Bearer '),
    },
    client: new OAUTHTestClient(
      {
        privateKey: testPrivateKey,
        applicationId: 'my-application',
        msisdn: '447700900000',
      },
      {
        redirectUri: 'https://example.com',
      }
    ),
    requests: [
      [
        '/oauth2/token',
        'POST',
        {
          code: 'code',
          grant_type: 'authorization_code',
          redirect_uri: 'https://example.com',
        },
      ],
    ],
    responses: [
      [
        400
      ],
    ],
    parameters: [
      'code',
    ],
    generator: false,
    error: 'It appears you have not enabled the Network API for your account. '
      + 'Please contact your account manager to enable this feature. ',
  },
  {
    label: 'error when missing access token',
    baseUrl: 'https://api-eu.vonage.com',
    clientMethod: 'makeTestRequest',
    reqHeaders: {},
    client: new OAUTHTestClient(
      {
        privateKey: testPrivateKey,
        applicationId: 'my-application',
        msisdn: '447700900000',
      },
      {
        redirectUri: 'https://example.com',
      }
    ),
    requests: [
    ],
    responses: [
    ],
    parameters: [
      'code',
    ],
    generator: false,
    error: 'No access token is available'
  },
] as SDKTestCase<OAUTHTestClient>[];

VonageTest([{
  name: 'OAUTH tests',
  tests: testCases,
}]);

