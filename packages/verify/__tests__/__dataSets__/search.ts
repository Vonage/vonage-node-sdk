import { apiKey, apiSecret } from '../../../../testHelpers';
import {
  VerifySearchResponse,
  VerifySearchErrorResponse,
  VerifySearchError,
  SearchStatus,
  SearchCheckStatus,
  SearchEventTypes,
} from '../../lib';

const params = new URLSearchParams({
  api_key: apiKey,
  api_secret: apiSecret,
  request_id: 'abcdef0123456789abcdef0123456789',
});

const response = {
  request_id: 'abcdef0123456789abcdef0123456789',
  account_id: '0A00000012345678',
  status: SearchStatus.SUCCESS,
  number: '12128675309',
  price: '0.10000000',
  currency: 'EUR',
  sender_id: 'mySenderId',
  date_submitted: '2020-01-01 12:00:00',
  date_finalized: '2020-01-01 12:00:00',
  first_event_date: '2020-01-01 12:00:00',
  last_event_date: '2020-01-01 12:00:00',
  checks: [
    {
      date_received: '2020-01-01 12:00:00',
      code: '987654',
      status: SearchCheckStatus.INVALID,
      ip_address: '20.73.345.200',
    },
  ],
  events: [
    {
      type: SearchEventTypes.TTS,
      id: '47402bc5-2e87-4e19-8cb5-c03d5f23949f',
    },
  ],
  estimated_price_messages_sent: '0.03330000',
} as VerifySearchResponse;

export default [
  {
    label: 'search for a request',
    request: [`/verify/search/json?${params.toString()}`, 'GET'],
    response: [200, response],
    method: 'get',
    clientMethod: 'search',
    parameters: ['abcdef0123456789abcdef0123456789'],
    expected: {
      request_id: 'abcdef0123456789abcdef0123456789',
      requestId: 'abcdef0123456789abcdef0123456789',
      account_id: '0A00000012345678',
      accountId: '0A00000012345678',
      status: SearchStatus.SUCCESS,
      number: '12128675309',
      price: '0.10000000',
      currency: 'EUR',
      sender_id: 'mySenderId',
      senderId: 'mySenderId',
      date_submitted: '2020-01-01 12:00:00',
      dateSubmitted: '2020-01-01 12:00:00',
      date_finalized: '2020-01-01 12:00:00',
      dateFinalized: '2020-01-01 12:00:00',
      first_event_date: '2020-01-01 12:00:00',
      firstEventDate: '2020-01-01 12:00:00',
      last_event_date: '2020-01-01 12:00:00',
      lastEventDate: '2020-01-01 12:00:00',
      checks: [
        {
          date_received: '2020-01-01 12:00:00',
          dateReceived: '2020-01-01 12:00:00',
          code: '987654',
          status: SearchCheckStatus.INVALID,
          ip_address: '20.73.345.200',
          ipAddress: '20.73.345.200',
        },
      ],
      events: [
        {
          type: SearchEventTypes.TTS,
          id: '47402bc5-2e87-4e19-8cb5-c03d5f23949f',
        },
      ],
      estimated_price_messages_sent: '0.03330000',
      estimatedPriceMessagesSent: '0.03330000',
    }
  },
  {
    label: 'search for a request with error',
    request: [`/verify/search/json?${params.toString()}`, 'GET'],
    response: [
      200,
            {
              request_id: 'abcdef0123456789abcdef0123456789',
              status: SearchStatus.FAILED,
              error_text: 'Your user entered an incorrect code more than three times.',
            } as VerifySearchErrorResponse,
    ],
    method: 'get',
    clientMethod: 'search',
    parameters: ['abcdef0123456789abcdef0123456789'],
    expected: {
      request_id: 'abcdef0123456789abcdef0123456789',
      requestId: 'abcdef0123456789abcdef0123456789',
      status: SearchStatus.FAILED,
      error_text:
                'Your user entered an incorrect code more than three times.',
      errorText:
                'Your user entered an incorrect code more than three times.',
    } as VerifySearchError,
  },
];
