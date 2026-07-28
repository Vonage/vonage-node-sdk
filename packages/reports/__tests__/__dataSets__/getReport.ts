import { ACCOUNT_ID, BASE_ASYNC_RESPONSE, REPORT_ID } from './common';

export default [
  {
    label: 'get report with PENDING status',
    requests: [[`/v2/reports/${REPORT_ID}`, 'GET']],
    responses: [[200, { ...BASE_ASYNC_RESPONSE, request_status: 'PENDING' }]],
    clientMethod: 'getReport',
    parameters: [REPORT_ID],
    expected: {
      links: BASE_ASYNC_RESPONSE._links,
      requestId: REPORT_ID,
      requestStatus: 'PENDING',
      receiveTime: '2024-01-01T00:00:00Z',
      startTime: '2024-01-01T00:00:01Z',
      itemsCount: 0,
      product: 'SMS',
      accountId: ACCOUNT_ID,
      dateStart: '2024-01-01T00:00:00Z',
      dateEnd: '2024-02-01T00:00:00Z',
    },
  },
  {
    label: 'get report with SUCCESS status',
    requests: [[`/v2/reports/${REPORT_ID}`, 'GET']],
    responses: [[200,
      {
        ...BASE_ASYNC_RESPONSE,
        _links: {
          self: { href: `https://api.nexmo.com/v2/reports/${REPORT_ID}` },
          download_report: {
            href: `https://api.nexmo.com/v2/reports/${REPORT_ID}/download`,
          },
        },
        request_status: 'SUCCESS',
        items_count: 1000,
      }]],
    clientMethod: 'getReport',
    parameters: [REPORT_ID],
    expected: {
      links: {
        self: { href: `https://api.nexmo.com/v2/reports/${REPORT_ID}` },
        downloadReport: {
          href: `https://api.nexmo.com/v2/reports/${REPORT_ID}/download`,
        },
      },
      requestId: REPORT_ID,
      requestStatus: 'SUCCESS',
      receiveTime: '2024-01-01T00:00:00Z',
      startTime: '2024-01-01T00:00:01Z',
      itemsCount: 1000,
      product: 'SMS',
      accountId: ACCOUNT_ID,
      dateStart: '2024-01-01T00:00:00Z',
      dateEnd: '2024-02-01T00:00:00Z',
    },
  },
  {
    label: 'get report with FAILED status',
    requests: [[`/v2/reports/${REPORT_ID}`, 'GET']],
    responses: [[200, { ...BASE_ASYNC_RESPONSE, request_status: 'FAILED' }]],
    clientMethod: 'getReport',
    parameters: [REPORT_ID],
    expected: {
      links: BASE_ASYNC_RESPONSE._links,
      requestId: REPORT_ID,
      requestStatus: 'FAILED',
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
