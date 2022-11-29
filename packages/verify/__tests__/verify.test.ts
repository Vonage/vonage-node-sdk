import { PSD2, Verification, Verify } from '../lib/index'
import nock from 'nock'
import { Auth } from '@vonage/auth'

const BASE_URL = 'https://api.nexmo.com'.replace(/\/+$/, '')

describe('Verify', () => {
    let client
    beforeEach(function () {
        client = new Verify(new Auth({ apiKey: '12345', apiSecret: 'ABCDE' }))
    })

    afterEach(function () {
        client = null
    })

    test('can check a verify request', async () => {
        const resp = {
            request_id: 'abcdef0123456789abcdef0123456789',
            event_id: '0A00000012345678',
            status: '0',
            price: '0.10000000',
            currency: 'EUR',
            estimated_price_messages_sent: '0.03330000',
        }
        nock(BASE_URL)
            .persist()
            .post('/verify/check/json', {
                api_key: '12345',
                api_secret: 'ABCDE',
                request_id: 'abcdef0123456789abcdef0123456789',
                code: '1234',
            })
            .reply(200, resp)

        const results = await client.check(
            'abcdef0123456789abcdef0123456789',
            '1234'
        )
        expect(results['event_id']).toEqual('0A00000012345678')
    })

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
        }
        nock(BASE_URL)
            .persist()
            .get('/verify/search/json')
            .query({
                api_key: '12345',
                api_secret: 'ABCDE',
                request_id: 'abcdef0123456789abcdef0123456789',
            })
            .reply(200, resp)

        const results = await client.search('abcdef0123456789abcdef0123456789')
        expect(results['sender_id']).toEqual('mySenderId')
    })

    test('can cancel a verify request', async () => {
        const resp = {
            status: '0',
            command: 'cancel',
        }
        nock(BASE_URL)
            .persist()
            .post('/verify/control/json', {
                api_key: '12345',
                api_secret: 'ABCDE',
                request_id: 'abcdef0123456789abcdef0123456789',
                cmd: 'cancel',
            })
            .reply(200, resp)

        const results = await client.cancel('abcdef0123456789abcdef0123456789')
        expect(results['status']).toEqual('0')
    })

    test('can trigger the next event in a verify request', async () => {
        const resp = {
            status: '0',
            command: 'trigger_next_event',
        }
        nock(BASE_URL)
            .persist()
            .post('/verify/control/json', {
                api_key: '12345',
                api_secret: 'ABCDE',
                request_id: 'abcdef0123456789abcdef0123456789',
                cmd: 'trigger_next_event',
            })
            .reply(200, resp)

        const results = await client.trigger('abcdef0123456789abcdef0123456789')
        expect(results['status']).toEqual('0')
    })

    test('can request a verification', async () => {
        const resp = {
            request_id: 'abcdef0123456789abcdef0123456789',
            status: '0',
        }
        nock(BASE_URL)
            .persist()
            .post('/verify/json', {
                api_key: '12345',
                api_secret: 'ABCDE',
                number: '15556661234',
                brand: 'Acme Inc',
            })
            .reply(200, resp)

        const results = await client.start(new Verification('15556661234', 'Acme Inc'))
        expect(results['status']).toEqual('0')
    })

    test('can request a PSD2 request', async () => {
        const resp = {
            request_id: 'abcdef0123456789abcdef0123456789',
            status: '0',
        }
        nock(BASE_URL)
            .persist()
            .post('/verify/psd2/json', {
                api_key: '12345',
                api_secret: 'ABCDE',
                number: '15556661234',
                payee: 'Acme Inc',
                amount: '10.50',
            })
            .reply(200, resp)

        const results = await client.start(
            new PSD2('15556661234', 'Acme Inc', '10.50')
        )
        expect(results['status']).toEqual('0')
    })
})
