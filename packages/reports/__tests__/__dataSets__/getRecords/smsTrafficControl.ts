import { ACCOUNT_ID, BASE_SYNC_RESPONSE } from '../common';

export default [
  {
    label: 'get SMS Traffic Control records',
    requests: [[
      '/v2/reports/records?product=SMS-TRAFFIC-CONTROL&account_id=testKey',
      'GET',
    ]],
    responses: [[200,
      {
        ...BASE_SYNC_RESPONSE,
        product: 'SMS-TRAFFIC-CONTROL',
        records: [{
          account_id: ACCOUNT_ID,
          id: 'traffic-00000000-0000-0000-0000-000000000001',
          message_id: 'msg-traffic-0001',
          queue_duration: '250',
          queued_time: '2024-01-13T00:00:00Z',
          status: 'queued',
        }],
      }]],
    clientMethod: 'getRecords',
    parameters: [{
      product: 'SMS-TRAFFIC-CONTROL',
      accountId: ACCOUNT_ID,
    }],
    expected: {
      links: BASE_SYNC_RESPONSE._links,
      requestId: BASE_SYNC_RESPONSE.request_id,
      requestStatus: 'SUCCESS',
      receivedAt: '2024-01-01T00:00:00Z',
      itemsCount: 1,
      product: 'SMS-TRAFFIC-CONTROL',
      records: [{
        accountId: ACCOUNT_ID,
        id: 'traffic-00000000-0000-0000-0000-000000000001',
        messageId: 'msg-traffic-0001',
        queueDuration: '250',
        queuedTime: '2024-01-13T00:00:00Z',
        status: 'queued',
      }],
    },
  },
];
