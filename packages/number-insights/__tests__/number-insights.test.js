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
    const apiResponse = {
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
      .query({ number: '447700900000' })
      .reply(200, apiResponse);

    const lookup = await client.basicLookup('447700900000');
    assert.deepEqual(lookup.status, apiResponse.status);
    assert.deepEqual(lookup.statusMessage, apiResponse.status_message);
    assert.deepEqual(lookup.requestId, apiResponse.request_id);
    assert.deepEqual(lookup.internationalFormatNumber, apiResponse.international_format_number);
    assert.deepEqual(lookup.nationalFormatNumber, apiResponse.national_format_number);
    assert.deepEqual(lookup.countryCode, apiResponse.country_code);
    assert.deepEqual(lookup.countryCodeIso3, apiResponse.country_code_iso3);
    assert.deepEqual(lookup.countryName, apiResponse.country_name);
    assert.deepEqual(lookup.countryPrefix, apiResponse.country_prefix);
  });

  test('do a standard lookup', async () => {
    const apiResponse = {
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
      .query({ number: '447700900000' })
      .reply(200, apiResponse);

    const lookup = await client.standardLookup('447700900000');
    assert.deepEqual(lookup.status, apiResponse.status);
    assert.deepEqual(lookup.statusMessage, apiResponse.status_message);
    assert.deepEqual(lookup.requestId, apiResponse.request_id);
    assert.deepEqual(lookup.internationalFormatNumber, apiResponse.international_format_number);
    assert.deepEqual(lookup.nationalFormatNumber, apiResponse.national_format_number);
    assert.deepEqual(lookup.countryCode, apiResponse.country_code);
    assert.deepEqual(lookup.countryCodeIso3, apiResponse.country_code_iso3);
    assert.deepEqual(lookup.countryName, apiResponse.country_name);
    assert.deepEqual(lookup.countryPrefix, apiResponse.country_prefix);
    assert.deepEqual(lookup.requestPrice, apiResponse.request_price);
    assert.deepEqual(lookup.refundPrice, apiResponse.refund_price);
    assert.deepEqual(lookup.remainingBalance, apiResponse.remaining_balance);
    assert.deepEqual(lookup.currentCarrier.networkCode, apiResponse.current_carrier.network_code);
    assert.deepEqual(lookup.originalCarrier.networkCode, apiResponse.original_carrier.network_code);
    assert.deepEqual(lookup.ported, apiResponse.ported);
    assert.deepEqual(lookup.callerIdentity.callerType, apiResponse.caller_identity.caller_type);
    assert.deepEqual(lookup.callerName, apiResponse.caller_name);
    assert.deepEqual(lookup.lastName, apiResponse.last_name);
    assert.deepEqual(lookup.firstName, apiResponse.first_name);
    assert.deepEqual(lookup.callerType, apiResponse.caller_type);
  });

  test('do an advanced lookup', async () => {
    const apiResponse = {
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
      .query({ number: '447700900000' })
      .reply(200, apiResponse);

    const lookup = await client.advancedLookup('447700900000');
    assert.deepEqual(lookup.status, apiResponse.status);
    assert.deepEqual(lookup.statusMessage, apiResponse.status_message);
    assert.deepEqual(lookup.requestId, apiResponse.request_id);
    assert.deepEqual(lookup.internationalFormatNumber, apiResponse.international_format_number);
    assert.deepEqual(lookup.nationalFormatNumber, apiResponse.national_format_number);
    assert.deepEqual(lookup.countryCode, apiResponse.country_code);
    assert.deepEqual(lookup.countryCodeIso3, apiResponse.country_code_iso3);
    assert.deepEqual(lookup.countryName, apiResponse.country_name);
    assert.deepEqual(lookup.countryPrefix, apiResponse.country_prefix);
    assert.deepEqual(lookup.requestPrice, apiResponse.request_price);
    assert.deepEqual(lookup.refundPrice, apiResponse.refund_price);
    assert.deepEqual(lookup.remainingBalance, apiResponse.remaining_balance);
    assert.deepEqual(lookup.currentCarrier.networkCode, apiResponse.current_carrier.network_code);
    assert.deepEqual(lookup.originalCarrier.networkCode, apiResponse.original_carrier.network_code);
    assert.deepEqual(lookup.ported, apiResponse.ported);
    assert.deepEqual(lookup.callerIdentity.callerType, apiResponse.caller_identity.caller_type);
    assert.deepEqual(lookup.roaming.status, apiResponse.roaming.status);
    assert.deepEqual(lookup.roaming.roamingCountryCode, apiResponse.roaming.roaming_country_code);
    assert.deepEqual(lookup.lookupOutcome, apiResponse.lookup_outcome);
    assert.deepEqual(lookup.lookupOutcomeMessage, apiResponse.lookup_outcome_message);
    assert.deepEqual(lookup.validNumber, apiResponse.valid_number);
    assert.deepEqual(lookup.reachable, apiResponse.reachable);
    assert.deepEqual(lookup.realTimeData.activeStatus, apiResponse.real_time_data.active_status);
  });

  test('do an async advanced lookup', async () => {
    const apiResponse = {
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
        number: '447700900000',
        callback: 'https://test.com/lookup/handler',
      })
      .reply(200, apiResponse);

    const lookup = await client.asyncAdvancedLookup(
      '447700900000',
      'https://test.com/lookup/handler'
    );
    assert.deepEqual(lookup.status, apiResponse.status);
    assert.deepEqual(lookup.requestId, apiResponse.request_id);
    assert.deepEqual(lookup.number, apiResponse.number);
    assert.deepEqual(lookup.remainingBalance, apiResponse.remaining_balance);
    assert.deepEqual(lookup.requestPrice, apiResponse.request_price);
    assert.deepEqual(lookup.errorText, apiResponse.error_text);
  });
});
