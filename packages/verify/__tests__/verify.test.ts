import { PSD2, Verification, Verify } from '../lib/index';
import nock from 'nock';
import { Auth } from '@vonage/auth';

const BASE_URL = 'https://api.nexmo.com'.replace(/\/+$/, '');

describe('Verify', () => {
  let client;

  beforeEach(function () {
    client = new Verify(new Auth({ apiKey: '12345', apiSecret: 'ABCDE' }));
  });

  afterEach(function () {
    client = null;
  });

  test('can check a verify request', async () => {
    const resp = {
      request_id: 'abcdef0123456789abcdef0123456789',
      event_id: '0A00000012345678',
      status: '0',
      price: '0.10000000',
      currency: 'EUR',
      estimated_price_messages_sent: '0.03330000',
    };
    nock(BASE_URL)
      .persist()
      .post('/verify/check/json', {
        api_key: '12345',
        api_secret: 'ABCDE',
        request_id: 'abcdef0123456789abcdef0123456789',
        code: '1234',
      })
      .reply(200, resp);

    const results = await client.check(
      'abcdef0123456789abcdef0123456789',
      '1234',
    );
    expect(results['event_id']).toEqual('0A00000012345678');
  });

  test('can search for a verify request', async () => {
    const resp = {
      request_id: 'abcdef0123456789abcdef0123456789',
      account_id: 'abcdef01',
      status: 'IN PROGRESS',
      number: '447700900000',
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
          status: 'abc123',
          ip_address: '123.0.0.255',
        },
      ],
      events: [
        {
          type: 'abc123',
          id: 'abc123',
        },
      ],
      estimated_price_messages_sent: '0.03330000',
    };
    nock(BASE_URL)
      .persist()
      .get('/verify/search/json')
      .query({
        api_key: '12345',
        api_secret: 'ABCDE',
        request_id: 'abcdef0123456789abcdef0123456789',
      })
      .reply(200, resp);

    const results = await client.search('abcdef0123456789abcdef0123456789');
    expect(results['sender_id']).toEqual('mySenderId');
  });

  test('can cancel a verify request', async () => {
    const resp = {
      status: '0',
      command: 'cancel',
    };
    nock(BASE_URL)
      .persist()
      .post('/verify/control/json', {
        api_key: '12345',
        api_secret: 'ABCDE',
        request_id: 'abcdef0123456789abcdef0123456789',
        cmd: 'cancel',
      })
      .reply(200, resp);

    const results = await client.cancel('abcdef0123456789abcdef0123456789');
    expect(results['status']).toEqual('0');
  });

  test('can trigger the next event in a verify request', async () => {
    const resp = {
      status: '0',
      command: 'trigger_next_event',
    };
    nock(BASE_URL)
      .persist()
      .post('/verify/control/json', {
        api_key: '12345',
        api_secret: 'ABCDE',
        request_id: 'abcdef0123456789abcdef0123456789',
        cmd: 'trigger_next_event',
      })
      .reply(200, resp);

    const results = await client.trigger('abcdef0123456789abcdef0123456789');
    expect(results['status']).toEqual('0');
  });

  const startVerifyCases = [
    [
      ['15556661234', 'Acme Inc'],
      {
        api_key: '12345',
        api_secret: 'ABCDE',
        number: '15556661234',
        brand: 'Acme Inc',
      },
      { request_id: 'abcdef0123456789abcdef0123456789', status: '0' },
    ],
    [
      ['15556661234', 'Acme Inc', 'US', null, 4],
      {
        api_key: '12345',
        api_secret: 'ABCDE',
        number: '15556661234',
        brand: 'Acme Inc',
        country: 'US',
        code_length: 4,
      },
      { request_id: 'abcdef0123456789abcdef0123456789', status: '0' },
    ],
    [
      ['15556661234', 'Acme Inc', 'US', null, 4],
      {
        api_key: '12345',
        api_secret: 'ABCDE',
        number: '15556661234',
        brand: 'Acme Inc',
        country: 'US',
        code_length: 4,
      },
      { request_id: 'abcdef0123456789abcdef0123456789', status: '0' },
    ],
    [
      [
        '15556661234',
        'Acme Inc',
        'US',
        'VERIFY',
        4,
        'en-us',
        3600,
        900,
        5,
      ],
      {
        api_key: '12345',
        api_secret: 'ABCDE',
        number: '15556661234',
        brand: 'Acme Inc',
        country: 'US',
        code_length: 4,
        sender_id: 'VERIFY',
        lg: 'en-us',
        pin_expiry: 3600,
        next_event_wait: 900,
        workflow_id: 5,
      },
      { request_id: 'abcdef0123456789abcdef0123456789', status: '0' },
    ],
  ];

  test.each(startVerifyCases)(
    'given %p and %p, can request a verification %p',
    async (objectData, expectedBody, expectedResponse) => {
      nock(BASE_URL)
        .persist()
        .post('/verify/json', expectedBody)
        .reply(200, expectedResponse);

      const results = await client.start(new Verification(...objectData));
      expect(results['status']).toEqual('0');
    },
  );

  const startVerifyPSD2Cases = [
    [
      ['15556661234', 'Acme Inc', 10.5],
      {
        api_key: '12345',
        api_secret: 'ABCDE',
        number: '15556661234',
        payee: 'Acme Inc',
        amount: 10.5,
      },
      { request_id: 'abcdef0123456789abcdef0123456789', status: '0' },
    ],
    [
      ['15556661234', 'Acme Inc', 10.5, 'US', 4, 'en-us', 3600, 900, 5],
      {
        api_key: '12345',
        api_secret: 'ABCDE',
        number: '15556661234',
        payee: 'Acme Inc',
        amount: 10.5,
        country: 'US',
        code_length: 4,
        lg: 'en-us',
        pin_expiry: 3600,
        next_event_wait: 900,
        workflow_id: 5,
      },
      { request_id: 'abcdef0123456789abcdef0123456789', status: '0' },
    ],
  ];

  test.each(startVerifyPSD2Cases)(
    'given %p and %p, can request a psd2 verification %p',
    async (objectData, expectedBody, expectedResponse) => {
      nock(BASE_URL)
        .persist()
        .post('/verify/psd2/json', expectedBody)
        .reply(200, expectedResponse);

      const results = await client.start(new PSD2(...objectData));
      expect(results['status']).toEqual('0');
    },
  );
});
