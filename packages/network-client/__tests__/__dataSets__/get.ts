import { NetworkClient } from '../../lib';
import { SDKTestCase, testPrivateKey } from '../../../../testHelpers';
import { SIMSwap } from '../../../network-sim-swap/lib';

export default [
  {
    label: 'retrieve all conversations',
    client: new SIMSwap(
      {
        privateKey: testPrivateKey,
        applicationId: 'my-application',
        msisdn: '447700900000',
      },
    ) as unknown as NetworkClient,
    requests: [
      [`/v1/conversations`, 'GET'],
    ],
    responses: [
      [
        200,
        {},
      ],
    ],
    clientMethod: 'foo',
    parameters: [],
    generator: false,
    error: false,
    expected: [],
  } as SDKTestCase,
] 
