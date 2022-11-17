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

import * as types from '../lib/types'
import nock from 'nock'
import { Auth } from '@vonage/auth'
import { Numbers } from '../lib/index'
import { Feature } from '../lib/enums/Feature'

const BASE_URL = 'https://rest.nexmo.com'.replace(/\/+$/, '')

describe('Numbers', () => {
    let client: Numbers

    beforeEach(function () {
        client = new Numbers(new Auth({ apiKey: '12345', apiSecret: 'ABCDE' }))
    })

    afterEach(function () {
        client = null
    })

    test('buyNumber()', async () => {
        nock(BASE_URL)
            .persist()
            .post(`/number/buy`, {
                api_key: '12345',
                api_secret: 'ABCDE',
                country: 'US',
                msisdn: '12345',
                target_api_key: '67890',
            })
            .reply(200, { 'error-code': '200', 'error-code-label': 'success' })

        const results = await client.buyNumber({
            country: 'US',
            msisdn: '12345',
            targetApiKey: '67890',
        })
        expect(results.errorCodeLabel).toEqual('success')
    })

    test('invalid credentials gets caught', async () => {
        client = new Numbers(
            new Auth({ apiKey: 'badkey', apiSecret: 'badsecret' })
        )
        nock(BASE_URL)
            .persist()
            .post(`/number/buy`, {
                api_key: 'badkey',
                api_secret: 'badsecret',
                country: 'US',
                msisdn: '12345',
                target_api_key: '67890',
            })
            .reply(401, {
                'error-code': '401',
                'error-code-label': 'authentication failed',
            })

        try {
            const results = await client.buyNumber({
                country: 'US',
                msisdn: '12345',
                targetApiKey: '67890',
            })
        } catch (e) {
            expect(e.code).toEqual('401')
        }
    })

    test('getOwnedNumbers()', async () => {
        const resp = {
            count: 1,
            numbers: [
                {
                    country: 'GB',
                    msisdn: '447700900000',
                    moHttpUrl: 'https://example.com/webhooks/inbound-sms',
                    type: 'mobile-lvn',
                    features: ['VOICE', 'SMS', 'MMS'],
                    messagesCallbackType: 'app',
                    messagesCallbackValue:
                        'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
                    voiceCallbackType: 'app',
                    voiceCallbackValue: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
                },
            ],
        }

        nock(BASE_URL)
            .get(`/account/numbers`)
            .query({ api_key: '12345', api_secret: 'ABCDE' })
            .reply(200, resp)

        const results = await client.getOwnedNumbers({})
        expect(results.count).toEqual(1)
        expect(results.numbers.length).toEqual(1)
        expect(results.numbers[0].country).toEqual(resp.numbers[0].country)
    })

    test('getAvailableNumbers()', async () => {
        const resp = {
            count: 1234,
            numbers: [
                {
                    country: 'GB',
                    msisdn: '447700900000',
                    type: 'mobile-lvn',
                    cost: '1.25',
                    features: ['VOICE', 'SMS', 'MMS'],
                },
            ],
        }

        nock(BASE_URL)
            .get(`/number/search`)
            .query({ api_key: '12345', api_secret: 'ABCDE', country: 'US' })
            .reply(200, resp)

        const results = await client.getAvailableNumbers({ country: 'US' })
        expect(results.count).toEqual(1234)
        expect(results.numbers.length).toEqual(1)
        expect(results.numbers[0].country).toEqual(resp.numbers[0].country)
    })

    test('Searching for number features joins correctly with 1 element', async () => {
        const resp = {
            count: 1234,
            numbers: [
                {
                    country: 'GB',
                    msisdn: '447700900000',
                    type: 'mobile-lvn',
                    cost: '1.25',
                    features: ['VOICE', 'SMS', 'MMS'],
                },
            ],
        }

        nock(BASE_URL)
            .get(`/number/search`)
            .query({
                api_key: '12345',
                api_secret: 'ABCDE',
                country: 'US',
                features: 'MMS',
            })
            .reply(200, resp)

        const results = await client.getAvailableNumbers({
            country: 'US',
            features: [Feature.MMS],
        })
        expect(results.count).toEqual(1234)
        expect(results.numbers.length).toEqual(1)
        expect(results.numbers[0].country).toEqual(resp.numbers[0].country)
    })

    test('Searching for number features joins correctly with 2 elements', async () => {
        const resp = {
            count: 1234,
            numbers: [
                {
                    country: 'GB',
                    msisdn: '447700900000',
                    type: 'mobile-lvn',
                    cost: '1.25',
                    features: ['VOICE', 'SMS', 'MMS'],
                },
            ],
        }

        nock(BASE_URL)
            .get(`/number/search`)
            .query({
                api_key: '12345',
                api_secret: 'ABCDE',
                country: 'US',
                features: 'VOICE,MMS',
            })
            .reply(200, resp)

        const results = await client.getAvailableNumbers({
            country: 'US',
            features: [Feature.MMS, Feature.VOICE],
        })
        expect(results.count).toEqual(1234)
        expect(results.numbers.length).toEqual(1)
        expect(results.numbers[0].country).toEqual(resp.numbers[0].country)
    })

    test('Searching for number features joins correctly with 3 elements', async () => {
        const resp = {
            count: 1234,
            numbers: [
                {
                    country: 'GB',
                    msisdn: '447700900000',
                    type: 'mobile-lvn',
                    cost: '1.25',
                    features: ['VOICE', 'SMS', 'MMS'],
                },
            ],
        }

        nock(BASE_URL)
            .get(`/number/search`)
            .query({
                api_key: '12345',
                api_secret: 'ABCDE',
                country: 'US',
                features: 'SMS,MMS,VOICE',
            })
            .reply(200, resp)

        const results = await client.getAvailableNumbers({
            country: 'US',
            features: [Feature.MMS, Feature.VOICE, Feature.SMS],
        })
        expect(results.count).toEqual(1234)
        expect(results.numbers.length).toEqual(1)
        expect(results.numbers[0].country).toEqual(resp.numbers[0].country)
    })

    test('cancelNumber()', async () => {
        nock(BASE_URL)
            .post(`/number/cancel`, {
                api_key: '12345',
                api_secret: 'ABCDE',
                country: 'US',
                msisdn: '12345',
                target_api_key: '67890',
            })
            .reply(200, { 'error-code': '200', 'error-code-label': 'success' })

        const results = await client.cancelNumber({
            country: 'US',
            msisdn: '12345',
            targetApiKey: '67890',
        })
        expect(results.errorCodeLabel).toEqual('success')
    })

    test('updateNumber()', async () => {
        nock(BASE_URL)
            .post(`/number/update`, {
                api_key: '12345',
                api_secret: 'ABCDE',
                country: 'US',
                msisdn: '12345',
                app_id: '123abc',
                voiceCallbackType: 'app',
                voiceCallbackValue: 'https://www.example.com/webhook',
                voiceStatusCallback: 'https://www.example.com/webhook/events',
            })
            .reply(200, { 'error-code': '200', 'error-code-label': 'success' })

        const results = await client.updateNumber({
            country: 'US',
            msisdn: '12345',
            applicationId: '123abc',
            voiceCallbackType: types.VoiceCallbackTypeEnum.App,
            voiceCallbackValue: 'https://www.example.com/webhook',
            voiceStatusCallback: 'https://www.example.com/webhook/events',
        })
        expect(results.errorCodeLabel).toEqual('success')
    })
})
