import { Auth } from '@vonage/auth';
import nock from 'nock';
import { ServiceType, Pricing } from '../lib/index.js';
import { describe, test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';

const BASE_URL = 'https://rest.nexmo.com/'.replace(/\/+$/, '');

describe('pricing', () => {
  let client;

  beforeEach(() => {
    client = new Pricing(new Auth({ apiKey: 'abcd', apiSecret: '1234' }));
  });

  test('do a country lookup', async () => {
    const expectedResponse = {
      countryCode: 'CA',
      countryName: 'Canada',
      countryDisplayName: 'Canada',
      currency: 'EUR',
      defaultPrice: '0.00620000',
      dialingPrefix: '1',
      networks: [
        {
          type: 'mobile',
          price: '0.00590000',
          currency: 'EUR',
          mcc: '302',
          mnc: '530',
          networkCode: '302530',
          networkName: 'Keewaytinook Okimakanak',
        },
      ],
    };

    nock(BASE_URL, {
      reqheaders: {
        'authorization': 'Basic YWJjZDoxMjM0',
      }
    })
      .persist()
      .get('/account/get-pricing/outbound/sms')
      .query({ country: 'CA' })
      .reply(200, expectedResponse);

    const lookup = await client.listCountryPricing(ServiceType.SMS, 'CA');
    assert.deepEqual(lookup.countryCode, expectedResponse.countryCode);
    assert.deepEqual(lookup.countryName, expectedResponse.countryName);
    assert.deepEqual(lookup.countryDisplayName, 
      expectedResponse.countryDisplayName,
    );
    assert.deepEqual(lookup.currency, expectedResponse.currency);
    assert.deepEqual(lookup.defaultPrice, expectedResponse.defaultPrice);
    assert.deepEqual(lookup.dialingPrefix, expectedResponse.dialingPrefix);
    assert.deepEqual(lookup.networks, expectedResponse.networks);
  });

  test('do all country lookup', async () => {
    const expectedResponse = {
      count: '243',
      countries: [
        {
          countryName: 'Canada',
          countryDisplayName: 'Canada',
          currency: 'EUR',
          defaultPrice: '0.00620000',
          dialingPrefix: '1',
          networks: [
            {
              type: 'mobile',
              price: '0.00590000',
              currency: 'EUR',
              mcc: '302',
              mnc: '530',
              networkCode: '302530',
              networkName: 'Keewaytinook Okimakanak',
            },
          ],
        },
      ],
    };

    nock(BASE_URL, {
      reqheaders: {
        'authorization': 'Basic YWJjZDoxMjM0',
      }
    })
      .persist()
      .get('/account/get-full-pricing/outbound/sms')
      .reply(200, expectedResponse);

    const lookup = await client.listAllCountriesPricing(ServiceType.SMS);
    assert.deepEqual(lookup.count, expectedResponse.count);
    assert.deepEqual(lookup.countries, expectedResponse.countries);
  });

  test('do prefix lookup', async () => {
    const expectedResponse = {
      count: '243',
      countries: [
        {
          countryName: 'Canada',
          countryDisplayName: 'Canada',
          currency: 'EUR',
          defaultPrice: '0.00620000',
          dialingPrefix: '1',
          networks: [
            {
              type: 'mobile',
              price: '0.00590000',
              currency: 'EUR',
              mcc: '302',
              mnc: '530',
              networkCode: '302530',
              networkName: 'Keewaytinook Okimakanak',
            },
          ],
        },
      ],
    };

    nock(BASE_URL, {
      reqheaders: {
        'authorization': 'Basic YWJjZDoxMjM0',
      }
    })
      .persist()
      .get('/account/get-prefix-pricing/outbound/sms')
      .query({ prefix: '1' })
      .reply(200, expectedResponse);

    const lookup = await client.listPrefixPricing(ServiceType.SMS, '1');
    assert.deepEqual(lookup.count, expectedResponse.count);
    assert.deepEqual(lookup.countries, expectedResponse.countries);
  });
});
