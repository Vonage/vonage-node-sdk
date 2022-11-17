import * as api from '../lib/sms';
import nock from 'nock';
import { Auth } from '@vonage/auth';

const BASE_URL = 'https://rest.nexmo.com'.replace(/\/+$/, '');

describe('SMS', () => {
    let client: api.SMS;

    beforeEach(function() {
        client = new api.SMS(new Auth({ apiKey: '12345', apiSecret: 'ABCDE' }));
    });

    afterEach(function() {
        client = null;
    });

    test('can send SMS using JSON', async () => {
        const resp = {
            'message-count': '1',
            'messages': [
                {
                    'to': '447700900000',
                    'message-id': '0A0000000123ABCD1',
                    'status': '0',
                    'remaining-balance': '3.14159265',
                    'message-price': '0.03330000',
                    'network': '12345',
                    'client-ref': 'my-personal-reference',
                    'account-ref': 'customer1234',
                },
            ],
        };
        nock(BASE_URL)
            .persist()
            .post('/sms/json', {
                api_key: '12345',
                api_secret: 'ABCDE',
                from: '11155512345',
                to: '447700900000',
                text: 'Sample SMS Text',
            })
            .reply(200, resp);

        const results = await client.send({
            to: '447700900000',
            from: '11155512345',
            text: 'Sample SMS Text',
        });
        expect(results['message-count']).toEqual('1');
    });
});
