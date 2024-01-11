import { VerifyCheckResponse, VerifyCheck } from '../../lib/types';

export default [
  {
    label: 'check a verify request',
    request: [
      '/verify/check/json',
      'POST',
      {
        api_key: '12345',
        api_secret: 'ABCDE',
        request_id: 'abcdef0123456789abcdef0123456789',
        code: '1234',
      },
    ],
    response: [
      200,
            {
              request_id: 'abcdef0123456789abcdef0123456789',
              event_id: '0A00000012345678',
              status: '0',
              price: '0.10000000',
              currency: 'EUR',
              estimated_price_messages_sent: '0.03330000',
            } as VerifyCheckResponse,
    ],
    method: 'post',
    clientMethod: 'check',
    parameters: ['abcdef0123456789abcdef0123456789', '1234'],
    expected: {
      request_id: 'abcdef0123456789abcdef0123456789',
      requestId: 'abcdef0123456789abcdef0123456789',
      event_id: '0A00000012345678',
      eventId: '0A00000012345678',
      status: '0',
      price: '0.10000000',
      currency: 'EUR',
      estimated_price_messages_sent: '0.03330000',
      estimatedPriceMessagesSent: '0.03330000',
    } as VerifyCheck,
  },
];
