import nock from 'nock';
import { Accounts } from '../lib/index.js';
import { Auth } from '@vonage/auth';
import { describe, test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';

describe('accounts', () => {
  let client;

  beforeEach(() => {
    client = new Accounts(new Auth({ apiKey: 'abcd', apiSecret: '1234' }));
  });

  test('get balance', async () => {
    const expectedResponse = {
      'value': 10.28,
      'autoReload': false,
    };

    nock('https://rest.nexmo.com', {
      reqheaders: {
        'authorization': 'Basic YWJjZDoxMjM0',
      }
    })
      .persist()
      .get('/account/get-balance')
      .reply(200, expectedResponse);

    const lookup = await client.getBalance();
    assert.deepEqual(lookup.value, expectedResponse.value);
    assert.deepEqual(lookup.autoReload, expectedResponse.autoReload);
  });

  test('top up balance', async () => {
    const expectedResponse = {
      'error-code': '200',
      'error-code-label': 'success',
    };

    nock('https://rest.nexmo.com', {
      reqheaders: {
        'authorization': 'Basic YWJjZDoxMjM0',
      }
    })
      .persist()
      .post('/account/top-up', /trx=8ef2447e69604f642ae59363aa5f781b/)
      .reply(200, expectedResponse);

    const lookup = await client.topUpBalance(
      '8ef2447e69604f642ae59363aa5f781b',
    );
    assert.deepEqual(lookup.errorCode, expectedResponse['error-code']);
    assert.deepEqual(lookup.errorCodeLabel, expectedResponse['error-code-label']);
  });

  test('update callbacks', async () => {
    const expectedResponse = {
      'dr-callback-url': 'https://example.com/webhooks/delivery-receipt',
      'mo-callback-url': 'https://example.com/webhooks/inbound-sms',
      'max-outbound-request': 30,
      'max-inbound-request': 30,
      'max-calls-per-second': 30,
    };

    const callbacks = {
      drCallbackUrl: 'https://example.com/webhooks/delivery-receipt',
      moCallbackUrl: 'https://example.com/webhooks/inbound-sms',
    };

    // After kebabCaseObjectKeys: { 'dr-callback-url': ..., 'mo-callback-url': ... }
    const kebabCallbacks = {
      'dr-callback-url': callbacks.drCallbackUrl,
      'mo-callback-url': callbacks.moCallbackUrl,
    };
    const queryString = new URLSearchParams(kebabCallbacks);
    const re = new RegExp(queryString.toString(), 'g');

    nock('https://rest.nexmo.com', {
      reqheaders: {
        'authorization': 'Basic YWJjZDoxMjM0',
      }
    })
      .persist()
      .post('/account/settings', re)
      .reply(200, expectedResponse);

    const lookup = await client.updateAccountCallbacks(callbacks);
    assert.deepEqual(lookup.moCallbackUrl, expectedResponse['mo-callback-url']);
    assert.deepEqual(lookup.drCallbackUrl, expectedResponse['dr-callback-url']);
    assert.deepEqual(lookup.maxOutboundRequest, expectedResponse['max-outbound-request']);
    assert.deepEqual(lookup.maxInboundRequest, expectedResponse['max-inbound-request']);
    assert.deepEqual(lookup.maxCallsPerSecond, expectedResponse['max-calls-per-second']);
  });
});
