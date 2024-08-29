import {
  Purpose,
  Scope,
} from '@vonage/network-client';
import { SIMSwap } from '../lib';
import { SDKTestCase, testPrivateKey } from '../../../testHelpers';
import { VonageTest } from '../../../testHelpers';

const testCases = [
  {
    label: 'check for sim swap',
    baseUrl: 'https://api-eu.vonage.com',
    clientMethod: 'checkSwapSim',
    reqHeaders: {
      authorization: (value) => value.startsWith('Bearer '),
    },
    client: new SIMSwap(
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
          scope: `openid dpv:${Purpose.FRAUD_PREVENTION_AND_DETECTION}#${Scope.CHECK_SIM_SWAP}`,
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
        '/camara/sim-swap/v040/check',
        'POST',
        {
          phoneNumber: '447700900000',
        }
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
        200,
        {
          swapped: true,

        }
      ],
    ],
    parameters: [
      {
        phoneNumber: '447700900000',
      }
    ],
    generator: false,
    error: false,
    expected: true,
  },
] as SDKTestCase<SIMSwap>[];

VonageTest([{
  name: 'SIM Swap tests',
  tests: testCases,
}]);

