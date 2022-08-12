import { Auth } from '@vonage/auth';
import nock from 'nock';
import { ServiceType } from '../lib/enums/ServiceType';
import { Pricing } from '../lib/index'

const BASE_URL = 'https://rest.nexmo.com/'.replace(/\/+$/, '');

describe('pricing', () => {
  let client;

  beforeEach(() => {
      client = new Pricing(new Auth({ apiKey: 'abcd', apiSecret: '1234' }));
  });

  afterEach(() => {
      client = null;
  });

  test("do a country lookup", async () => {
    const expectedResponse = {
        "countryCode": "CA",
        "countryName": "Canada",
        "countryDisplayName": "Canada",
        "currency": "EUR",
        "defaultPrice": "0.00620000",
        "dialingPrefix": "1",
        "networks": [
          {
            "type": "mobile",
            "price": "0.00590000",
            "currency": "EUR",
            "mcc": "302",
            "mnc": "530",
            "networkCode": "302530",
            "networkName": "Keewaytinook Okimakanak"
          }
        ]
      };

    nock(BASE_URL)
      .persist()
      .get('/account/get-pricing/outbound/sms')
      .query({ api_key: 'abcd', api_secret: '1234', country: 'CA' })
      .reply(200, expectedResponse);

    const lookup = await client.listCountryPricing(ServiceType.SMS, 'CA')
    expect(lookup.countryCode).toEqual(expectedResponse.countryCode);
    expect(lookup.countryName).toEqual(expectedResponse.countryName);
    expect(lookup.countryDisplayName).toEqual(expectedResponse.countryDisplayName);
    expect(lookup.currency).toEqual(expectedResponse.currency);
    expect(lookup.defaultPrice).toEqual(expectedResponse.defaultPrice);
    expect(lookup.dialingPrefix).toEqual(expectedResponse.dialingPrefix);
    expect(lookup.networks).toEqual(expectedResponse.networks);
  });

  test("do all country lookup", async () => {
    const expectedResponse = {
        "count": "243",
        "countries": [
          {
            "countryName": "Canada",
            "countryDisplayName": "Canada",
            "currency": "EUR",
            "defaultPrice": "0.00620000",
            "dialingPrefix": "1",
            "networks": [
              {
                "type": "mobile",
                "price": "0.00590000",
                "currency": "EUR",
                "mcc": "302",
                "mnc": "530",
                "networkCode": "302530",
                "networkName": "Keewaytinook Okimakanak"
              }
            ]
          }
        ]
      };

    nock(BASE_URL)
      .persist()
      .get('/account/get-full-pricing/outbound/sms')
      .query({ api_key: 'abcd', api_secret: '1234'})
      .reply(200, expectedResponse);

    const lookup = await client.listAllCountriesPricing(ServiceType.SMS);
    expect(lookup.count).toEqual(expectedResponse.count);
    expect(lookup.countries).toEqual(expectedResponse.countries);
  });
  
  test("do prefix lookup", async () => {
    const expectedResponse = {
        "count": "243",
        "countries": [
          {
            "countryName": "Canada",
            "countryDisplayName": "Canada",
            "currency": "EUR",
            "defaultPrice": "0.00620000",
            "dialingPrefix": "1",
            "networks": [
              {
                "type": "mobile",
                "price": "0.00590000",
                "currency": "EUR",
                "mcc": "302",
                "mnc": "530",
                "networkCode": "302530",
                "networkName": "Keewaytinook Okimakanak"
              }
            ]
          }
        ]
      };

    nock(BASE_URL)
      .persist()
      .get('/account/get-prefix-pricing/outbound/sms')
      .query({ api_key: 'abcd', api_secret: '1234', prefix: "1"})
      .reply(200, expectedResponse);

    const lookup = await client.listPrefixPricing(ServiceType.SMS, "1");
    expect(lookup.count).toEqual(expectedResponse.count);
    expect(lookup.countries).toEqual(expectedResponse.countries);
  });
});
