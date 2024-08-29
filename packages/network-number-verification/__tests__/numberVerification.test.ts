import { VonageTest } from '../../../testHelpers';
import {
  NumberVerificationClient,
} from '../lib';
import { SDKTestCase, testPrivateKey } from '../../../testHelpers';


const testCases = [
  {
    label: 'exchange code for token',
    baseUrl: 'https://api-eu.vonage.com',
    clientMethod: 'verifyPhoneNumber',
    reqHeaders: {
      authorization: (value) => value === 'Bearer token',
    },
    client: new NumberVerificationClient(
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
        '/camara/number-verification/v031/verify',
        'POST',
        {
          phoneNumber: '447700900000',
        },
      ],
    ],
    responses: [
      [
        200,
        {
          devicePhoneNumberVerified: true,
        }
      ],
    ],
    parameters: [
      '447700900000',
      'token',
    ],
    generator: false,
    error: false,
    expected: true,
  },
] as SDKTestCase<NumberVerificationClient>[];

VonageTest([{
  name: 'Number Verification tests',
  tests: testCases,
}]);

