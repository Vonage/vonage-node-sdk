import { ACCOUNT_ID, BASE_SYNC_RESPONSE } from '../common';

export default [
  {
    label: 'get voice WebSocket records',
    requests: [[
      '/v2/reports/records?product=WEBSOCKET-CALL&account_id=testKey',
      'GET',
    ]],
    responses: [[200,
      {
        ...BASE_SYNC_RESPONSE,
        product: 'WEBSOCKET-CALL',
        records: [{
          account_id: ACCOUNT_ID,
          id: 'ws-00000000-0000-0000-0000-000000000001',
          call_id: 'call-ws-00000000-0000-0000-0000-000000000001',
          currency: 'USD',
          date_end: '2024-01-07T00:05:00Z',
          date_start: '2024-01-07T00:00:00Z',
          duration: '300',
          price: '0.0100',
          status: 'completed',
          total_price: '0.0500',
        }],
      }]],
    clientMethod: 'getRecords',
    parameters: [{
      product: 'WEBSOCKET-CALL',
      accountId: ACCOUNT_ID,
    }],
    expected: {
      links: BASE_SYNC_RESPONSE._links,
      requestId: BASE_SYNC_RESPONSE.request_id,
      requestStatus: 'SUCCESS',
      receivedAt: '2024-01-01T00:00:00Z',
      itemsCount: 1,
      product: 'WEBSOCKET-CALL',
      records: [{
        accountId: ACCOUNT_ID,
        id: 'ws-00000000-0000-0000-0000-000000000001',
        callId: 'call-ws-00000000-0000-0000-0000-000000000001',
        currency: 'USD',
        dateEnd: '2024-01-07T00:05:00Z',
        dateStart: '2024-01-07T00:00:00Z',
        duration: '300',
        price: '0.0100',
        status: 'completed',
        totalPrice: '0.0500',
      }],
    },
  },
];
