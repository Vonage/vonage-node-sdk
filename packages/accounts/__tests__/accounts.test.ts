import nock from 'nock';
import { Accounts } from '../lib/index';
import { Auth } from '@vonage/auth';

describe('accounts', () => {
    let client;

    beforeEach(() => {
        client = new Accounts(new Auth({ apiKey: 'abcd', apiSecret: '1234' }));
    });

    afterEach(() => {
        client = null;
    });

    test('get balance', async () => {
        const expectedResponse = {
            'value': 10.28,
            'autoReload': false,
        };

        nock('https://rest.nexmo.com')
            .persist()
            .get('/account/get-balance')
            .query({ api_key: 'abcd', api_secret: '1234' })
            .reply(200, expectedResponse);

        const lookup = await client.getBalance();
        expect(lookup.value).toEqual(expectedResponse.value);
        expect(lookup.autoReload).toEqual(expectedResponse.autoReload);
    });

    test('top up balance', async () => {
        const expectedResponse = {
            'error-code': '200',
            'error-code-label': 'success',
        };

        nock('https://rest.nexmo.com')
            .persist()
            .post('/account/top-up', /trx=8ef2447e69604f642ae59363aa5f781b/)
            .query({ api_key: 'abcd', api_secret: '1234' })
            .reply(200, expectedResponse);

        const lookup = await client.topUpBalance(
            '8ef2447e69604f642ae59363aa5f781b',
        );
        expect(lookup['error-code']).toEqual(expectedResponse['error-code']);
        expect(lookup['error-code-label'])
            .toEqual(expectedResponse['error-code-label']);
    });

    test('update callbacks', async () => {
        const expectedResponse = {
            'mo-callback-url': 'https://example.com/webhooks/inbound-sms',
            'dr-callback-url': 'https://example.com/webhooks/delivery-receipt',
            'max-outbound-request': 30,
            'max-inbound-request': 30,
            'max-calls-per-second': 30,
        };

        const callbacks = {
            moCallBackUrl: 'https://example.com/webhooks/inbound-sms',
            drCallBackUrl: 'https://example.com/webhooks/delivery-receipt',
        };
        const queryString = new URLSearchParams(callbacks);
        const re = new RegExp(queryString.toString(), 'g');

        nock('https://rest.nexmo.com')
            .persist()
            .post('/account/settings', re)
            .query({ api_key: 'abcd', api_secret: '1234' })
            .reply(200, expectedResponse);

        const lookup = await client.updateAccountCallbacks(callbacks);
        expect(lookup['mo-callback-url'])
            .toEqual(expectedResponse['mo-callback-url']);
        expect(lookup['dr-callback-url'])
            .toEqual(expectedResponse['dr-callback-url']);
    });
});
