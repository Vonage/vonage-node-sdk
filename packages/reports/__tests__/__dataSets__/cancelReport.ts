import { ACCOUNT_ID, BASE_ASYNC_RESPONSE, REPORT_ID } from './common';

export default [
  {
    label: 'cancel a report',
    requests: [[`/v2/reports/${REPORT_ID}`, 'DELETE']],
    responses: [[200,
      {
        ...BASE_ASYNC_RESPONSE,
        request_status: 'ABORTED',
      }]],
    clientMethod: 'cancelReport',
    parameters: [REPORT_ID],
    expected: {
      links: BASE_ASYNC_RESPONSE._links,
      requestId: REPORT_ID,
      requestStatus: 'ABORTED',
      receiveTime: '2024-01-01T00:00:00Z',
      startTime: '2024-01-01T00:00:01Z',
      itemsCount: 0,
      product: 'SMS',
      accountId: ACCOUNT_ID,
      dateStart: '2024-01-01T00:00:00Z',
      dateEnd: '2024-02-01T00:00:00Z',
    },
  },
];
