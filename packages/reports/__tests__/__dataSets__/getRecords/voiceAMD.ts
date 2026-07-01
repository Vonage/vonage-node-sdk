import { ACCOUNT_ID, BASE_SYNC_RESPONSE } from '../common';

export default [
  {
    label: 'get voice AMD records',
    requests: [[
      '/v2/reports/records?product=AMD&account_id=testKey',
      'GET',
    ]],
    responses: [[200,
      {
        ...BASE_SYNC_RESPONSE,
        product: 'AMD',
        records: [{
          account_id: ACCOUNT_ID,
          id: 'amd-00000000-0000-0000-0000-000000000001',
          amd_beep_detection_result: true,
          amd_detection_result: 'machine',
          amd_result_sent: 'TRUE',
          amd_user_defined_beep_timeout: 45,
          amd_user_defined_behavior: 'continue',
          amd_user_defined_mode: 'detect_beep',
          call_id: 'call-amd-00000000-0000-0000-0000-000000000001',
          currency: 'USD',
          end_time: '2024-01-06T00:00:08Z',
          start_time: '2024-01-06T00:00:00Z',
          total_price: '0.0045',
        }],
      }]],
    clientMethod: 'getRecords',
    parameters: [{
      product: 'AMD',
      accountId: ACCOUNT_ID,
    }],
    expected: {
      links: BASE_SYNC_RESPONSE._links,
      requestId: BASE_SYNC_RESPONSE.request_id,
      requestStatus: 'SUCCESS',
      receivedAt: '2024-01-01T00:00:00Z',
      itemsCount: 1,
      product: 'AMD',
      records: [{
        accountId: ACCOUNT_ID,
        id: 'amd-00000000-0000-0000-0000-000000000001',
        amdBeepDetectionResult: true,
        amdDetectionResult: 'machine',
        amdResultSent: 'TRUE',
        amdUserDefinedBeepTimeout: 45,
        amdUserDefinedBehavior: 'continue',
        amdUserDefinedMode: 'detect_beep',
        callId: 'call-amd-00000000-0000-0000-0000-000000000001',
        currency: 'USD',
        endTime: '2024-01-06T00:00:08Z',
        startTime: '2024-01-06T00:00:00Z',
        totalPrice: '0.0045',
      }],
    },
  },
];
