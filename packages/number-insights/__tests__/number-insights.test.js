import { Auth } from '@vonage/auth';
import nock from 'nock';
import { NumberInsights } from '../lib/index.js';
import { describe, test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';

const BASE_URL = 'https://api.nexmo.com';

describe('number-insights', () => {
  let client;

  beforeEach(() => {
    client = new NumberInsights(
      new Auth({ apiKey: 'abcd', apiSecret: '1234' })
    );
  });

  test('do a basic lookup', async () => {
    const expectedResponse = {
      status: 0,
      status_message: 'Success',
      request_id: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      international_format_number: '447700900000',
      national_format_number: '07700 900000',
      country_code: 'GB',
      country_code_iso3: 'GBR',
      country_name: 'United Kingdom',
      country_prefix: '44',
    };

    nock(BASE_URL)
      .persist()
      .get('/ni/basic/json')
      .basicAuth({user: 'abcd', pass: '1234'})
      .query({
        number})
      .reply(200, expectedResponse);

    const lookup = await client.basicLookup('447700900000');
    assert.deepEqual(lookup.status, expectedResponse.status);
    assert.deepEqual(lookup.status_message, expectedResponse.status_message);
    assert.deepEqual(lookup.request_id, expectedResponse.request_id);
    assert.deepEqual(lookup.international_format_number, 
      expectedResponse.international_format_number
    );
    assert.deepEqual(lookup.national_format_number, 
      expectedResponse.national_format_number
    );
    assert.deepEqual(lookup.country_code, expectedResponse.country_code);
    assert.deepEqual(lookup.country_code_iso3, 
      expectedResponse.country_code_iso3
    );
    assert.deepEqual(lookup.country_name, expectedResponse.country_name);
    assert.deepEqual(lookup.country_prefix, expectedResponse.country_prefix);
  });

  test('do a standard lookup', async () => {
    const expectedResponse = {
      status: 0,
      status_message: 'Success',
      request_id: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      international_format_number: '447700900000',
      national_format_number: '07700 900000',
      country_code: 'GB',
      country_code_iso3: 'GBR',
      country_name: 'United Kingdom',
      country_prefix: '44',
      request_price: '0.04000000',
      refund_price: '0.01500000',
      remaining_balance: '1.23456789',
      current_carrier: {
        network_code: '12345',
        name: 'Acme Inc',
        country: 'GB',
        network_type: 'mobile',
      },
      original_carrier: {
        network_code: '12345',
        name: 'Acme Inc',
        country: 'GB',
        network_type: 'mobile',
      },
      ported: 'not_ported',
      caller_identity: {
        caller_type: 'consumer',
        caller_name: 'John Smith',
        first_name: 'John',
        last_name: 'Smith',
      },
      caller_name: 'John Smith',
      last_name: 'Smith',
      first_name: 'John',
      caller_type: 'consumer',
    };

    nock(BASE_URL)
      .persist()
      .get('/ni/standard/json')
      .basicAuth({user: 'abcd', pass: '1234'})
      .query({
        number})
      .reply(200, expectedResponse);

    const lookup = await client.standardLookup('447700900000');
    assert.deepEqual(lookup.status, expectedResponse.status);
    assert.deepEqual(lookup.status_message, expectedResponse.status_message);
    assert.deepEqual(lookup.request_id, expectedResponse.request_id);
    assert.deepEqual(lookup.international_format_number, 
      expectedResponse.international_format_number
    );
    assert.deepEqual(lookup.national_format_number, 
      expectedResponse.national_format_number
    );
    assert.deepEqual(lookup.country_code, expectedResponse.country_code);
    assert.deepEqual(lookup.country_code_iso3, 
      expectedResponse.country_code_iso3
    );
    assert.deepEqual(lookup.country_name, expectedResponse.country_name);
    assert.deepEqual(lookup.country_prefix, expectedResponse.country_prefix);
    assert.deepEqual(lookup.request_price, expectedResponse.request_price);
    assert.deepEqual(lookup.refund_price, expectedResponse.refund_price);
    assert.deepEqual(lookup.remaining_balance, 
      expectedResponse.remaining_balance
    );
    assert.deepEqual(lookup.current_carrier, expectedResponse.current_carrier);
    assert.deepEqual(lookup.original_carrier, expectedResponse.original_carrier);
    assert.deepEqual(lookup.ported, expectedResponse.ported);
    assert.deepEqual(lookup.caller_identity, expectedResponse.caller_identity);
    assert.deepEqual(lookup.caller_name, expectedResponse.caller_name);
    assert.deepEqual(lookup.last_name, expectedResponse.last_name);
    assert.deepEqual(lookup.first_name, expectedResponse.first_name);
    assert.deepEqual(lookup.caller_type, expectedResponse.caller_type);
  });

  test('do an advanced lookup', async () => {
    const expectedResponse = {
      status: 0,
      status_message: 'Success',
      request_id: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      international_format_number: '447700900000',
      national_format_number: '07700 900000',
      country_code: 'GB',
      country_code_iso3: 'GBR',
      country_name: 'United Kingdom',
      country_prefix: '44',
      request_price: '0.04000000',
      refund_price: '0.01500000',
      remaining_balance: '1.23456789',
      current_carrier: {
        network_code: '12345',
        name: 'Acme Inc',
        country: 'GB',
        network_type: 'mobile',
      },
      original_carrier: {
        network_code: '12345',
        name: 'Acme Inc',
        country: 'GB',
        network_type: 'mobile',
      },
      ported: 'not_ported',
      roaming: {
        status: 'roaming',
        roaming_country_code: 'US',
        roaming_network_code: '12345',
        roaming_network_name: 'Acme Inc',
      },
      caller_identity: {
        caller_type: 'consumer',
        caller_name: 'John Smith',
        first_name: 'John',
        last_name: 'Smith',
      },
      lookup_outcome: 0,
      lookup_outcome_message: 'Success',
      valid_number: 'valid',
      reachable: 'reachable',
      real_time_data: {
        active_status: 'true',
        handset_status: 'On',
      },
    };

    nock(BASE_URL)
      .persist()
      .get('/ni/advanced/json')
      .basicAuth({user: 'abcd', pass: '1234'})
      .query({
        number})
      .reply(200, expectedResponse);

    const lookup = await client.advancedLookup('447700900000');
    assert.deepEqual(lookup.status, expectedResponse.status);
    assert.deepEqual(lookup.status_message, expectedResponse.status_message);
    assert.deepEqual(lookup.request_id, expectedResponse.request_id);
    assert.deepEqual(lookup.international_format_number, 
      expectedResponse.international_format_number
    );
    assert.deepEqual(lookup.national_format_number, 
      expectedResponse.national_format_number
    );
    assert.deepEqual(lookup.country_code, expectedResponse.country_code);
    assert.deepEqual(lookup.country_code_iso3, 
      expectedResponse.country_code_iso3
    );
    assert.deepEqual(lookup.country_name, expectedResponse.country_name);
    assert.deepEqual(lookup.country_prefix, expectedResponse.country_prefix);
    assert.deepEqual(lookup.request_price, expectedResponse.request_price);
    assert.deepEqual(lookup.refund_price, expectedResponse.refund_price);
    assert.deepEqual(lookup.remaining_balance, 
      expectedResponse.remaining_balance
    );
    assert.deepEqual(lookup.current_carrier, expectedResponse.current_carrier);
    assert.deepEqual(lookup.original_carrier, expectedResponse.original_carrier);
    assert.deepEqual(lookup.ported, expectedResponse.ported);
    assert.deepEqual(lookup.caller_identity, expectedResponse.caller_identity);
    assert.deepEqual(lookup.roaming, expectedResponse.roaming);
    assert.deepEqual(lookup.lookup_outcome, expectedResponse.lookup_outcome);
    assert.deepEqual(lookup.lookup_outcome_message, 
      expectedResponse.lookup_outcome_message
    );
    assert.deepEqual(lookup.valid_number, expectedResponse.valid_number);
    assert.deepEqual(lookup.reachable, expectedResponse.reachable);
    assert.deepEqual(lookup.real_time_data, expectedResponse.real_time_data);
  });

  test('do an async advanced lookup', async () => {
    const expectedResponse = {
      request_id: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      number: '447700900000',
      remaining_balance: '1.23456789',
      request_price: '0.01500000',
      status: 0,
      error_text: 'Success',
    };

    nock(BASE_URL)
      .persist()
      .get('/ni/advanced/async/json')
      .basicAuth({user: 'abcd', pass: '1234'})
      .query({
        number: 'https://test.com/lookup/handler',
      })
      .reply(200, expectedResponse);

    const lookup = await client.asyncAdvancedLookup(
      '447700900000',
      'https://test.com/lookup/handler'
    );
    assert.deepEqual(lookup.status, expectedResponse.status);
    assert.deepEqual(lookup.request_id, expectedResponse.request_id);
    assert.deepEqual(lookup.number, expectedResponse.number);
    assert.deepEqual(lookup.remaining_balance, 
      expectedResponse.remaining_balance
    );
    assert.deepEqual(lookup.request_price, expectedResponse.request_price);
    assert.deepEqual(lookup.error_text, expectedResponse.error_text);
  });
});
