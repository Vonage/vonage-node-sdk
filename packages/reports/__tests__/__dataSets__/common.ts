export const REPORT_ID = 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab';
export const ACCOUNT_ID = 'testKey';

export const BASE_SYNC_RESPONSE = {
  _links: {
    self: { href: 'https://api.nexmo.com/v2/reports/records' },
  },
  request_id: REPORT_ID,
  request_status: 'SUCCESS',
  received_at: '2024-01-01T00:00:00Z',
  items_count: 1,
};

export const BASE_ASYNC_RESPONSE = {
  _links: {
    self: { href: `https://api.nexmo.com/v2/reports/${REPORT_ID}` },
  },
  request_id: REPORT_ID,
  request_status: 'PENDING',
  receive_time: '2024-01-01T00:00:00Z',
  start_time: '2024-01-01T00:00:01Z',
  items_count: 0,
  product: 'SMS',
  account_id: ACCOUNT_ID,
  date_start: '2024-01-01T00:00:00Z',
  date_end: '2024-02-01T00:00:00Z',
};
