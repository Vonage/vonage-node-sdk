// Copyright 2020 Vonage
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as api from '../lib/sms'
import nock from 'nock'
import { Auth } from '@vonage/auth'

const BASE_URL = 'https://rest.nexmo.com'.replace(/\/+$/, '')

describe('SMS', () => {
    let client: api.SMS
    beforeEach(function () {
        client = new api.SMS(new Auth({ apiKey: '12345', apiSecret: 'ABCDE' }))
    })

    afterEach(function () {
        client = null
    })

    test('can send SMS using JSON', async () => {
        const resp = {
            'message-count': '1',
            messages: [
                {
                    to: '447700900000',
                    'message-id': '0A0000000123ABCD1',
                    status: '0',
                    'remaining-balance': '3.14159265',
                    'message-price': '0.03330000',
                    network: '12345',
                    'client-ref': 'my-personal-reference',
                    'account-ref': 'customer1234',
                },
            ],
        }
        nock(BASE_URL)
            .persist()
            .post('/sms/json', {
                api_key: '12345',
                api_secret: 'ABCDE',
                from: '11155512345',
                to: '447700900000',
                text: 'Sample SMS Text',
            })
            .reply(200, resp)

        const results = await client.send({
            to: '447700900000',
            from: '11155512345',
            text: 'Sample SMS Text',
        })
        expect(results['message-count']).toEqual('1')
    })
})
