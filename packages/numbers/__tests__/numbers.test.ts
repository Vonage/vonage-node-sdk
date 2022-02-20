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

import * as api from "../lib/numbers"
import * as types from '../lib/types';
import nock from 'nock';

const config: types.NumbersClassParameters = {}
const BASE_URL = "https://rest.nexmo.com".replace(/\/+$/, "");



describe("Numbers", () => {
    let client: api.Numbers
    beforeEach(function () {
        client = new api.Numbers({ apiKey: '12345', apiSecret: 'ABCDE' })
    });

    afterEach(function () {
        client = null
    });

    test("buyNumber()", async () => {

        nock(BASE_URL)
            .post(`/number/buy`, { apiKey: "12345", apiSecret: "ABCDE", country: "US", msisdn: "12345", targetApiKey: "67890" })
            .reply(200);

        let results = await client.buyNumber({ country: 'US', msisdn: '12345', targetApiKey: '67890' });
        expect(results.type).toEqual('success');

        nock(BASE_URL)
            .post(`/number/buy`, { apiKey: "12345", apiSecret: "ABCDE", country: "US", msisdn: "12345", targetApiKey: "67890" })
            .reply(400);

        results = await client.buyNumber({ country: 'US', msisdn: '12345', targetApiKey: '67890' });
        expect(results.type).toEqual('error');

    })

    test("getOwnedNumbers()", async () => {

        nock(BASE_URL)
            .get(`/account/numbers`)
            .query({ api_key: '12345', api_secret: 'ABCDE' })
            .reply(200);

        const results = await client.getOwnedNumbers({});
        expect(results.type).toEqual('success');

    })

    test("getAvailableNumbers()", async () => {

        nock(BASE_URL)
            .get(`/number/search`)
            .query({ api_key: '12345', api_secret: 'ABCDE' })
            .reply(200);

        const results = await client.getAvailableNumbers();
        expect(results.type).toEqual('success');

    })

    test("cancelNumber()", async () => {

        nock(BASE_URL)
            .post(`/number/cancel`, { apiKey: "12345", apiSecret: "ABCDE", country: "US", msisdn: "12345", targetApiKey: "67890" })
            .reply(200);

        const results = await client.cancelNumber({ country: 'US', msisdn: '12345', targetApiKey: '67890' });
        expect(results.type).toEqual('success');

    })

    test("updateNumber()", async () => {

        nock(BASE_URL)
            .post(`/number/update`, {
                apiKey: "12345",
                apiSecret: "ABCDE",
                country: "US",
                msisdn: "12345",
                appId: "123abc",
                voiceCallbackType: "app",
                voiceCallbackValue: "https://www.example.com/webhook",
                voiceStatusCallback: "https://www.example.com/webhook/events"
            })
            .reply(200);

        const results = await client.updateNumber({
            country: "US",
            msisdn: "12345",
            appId: "123abc",
            voiceCallbackType: types.VoiceCallbackTypeEnum.App,
            voiceCallbackValue: "https://www.example.com/webhook",
            voiceStatusCallback: "https://www.example.com/webhook/events"
        });
        expect(results.type).toEqual('success');

    })
})

