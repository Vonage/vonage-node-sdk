import { Auth } from '@vonage/auth'
import nock from 'nock'
import { NumberInsights } from '../lib/index'

const BASE_URL = 'https://api.nexmo.com'

describe('number-insights', () => {
    let client

    beforeEach(() => {
        client = new NumberInsights(
            new Auth({ apiKey: 'abcd', apiSecret: '1234' })
        )
    })

    afterEach(() => {
        client = null
    })

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
        }

        nock(BASE_URL)
            .persist()
            .get('/ni/basic/json')
            .query({
                api_key: 'abcd',
                api_secret: '1234',
                number: expectedResponse.international_format_number,
            })
            .reply(200, expectedResponse)

        const lookup = await client.basicLookup('447700900000')
        expect(lookup.status).toEqual(expectedResponse.status)
        expect(lookup.status_message).toEqual(expectedResponse.status_message)
        expect(lookup.request_id).toEqual(expectedResponse.request_id)
        expect(lookup.international_format_number).toEqual(
            expectedResponse.international_format_number
        )
        expect(lookup.national_format_number).toEqual(
            expectedResponse.national_format_number
        )
        expect(lookup.country_code).toEqual(expectedResponse.country_code)
        expect(lookup.country_code_iso3).toEqual(
            expectedResponse.country_code_iso3
        )
        expect(lookup.country_name).toEqual(expectedResponse.country_name)
        expect(lookup.country_prefix).toEqual(expectedResponse.country_prefix)
    })

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
        }

        nock(BASE_URL)
            .persist()
            .get('/ni/standard/json')
            .query({
                api_key: 'abcd',
                api_secret: '1234',
                number: expectedResponse.international_format_number,
            })
            .reply(200, expectedResponse)

        const lookup = await client.standardLookup('447700900000')
        expect(lookup.status).toEqual(expectedResponse.status)
        expect(lookup.status_message).toEqual(expectedResponse.status_message)
        expect(lookup.request_id).toEqual(expectedResponse.request_id)
        expect(lookup.international_format_number).toEqual(
            expectedResponse.international_format_number
        )
        expect(lookup.national_format_number).toEqual(
            expectedResponse.national_format_number
        )
        expect(lookup.country_code).toEqual(expectedResponse.country_code)
        expect(lookup.country_code_iso3).toEqual(
            expectedResponse.country_code_iso3
        )
        expect(lookup.country_name).toEqual(expectedResponse.country_name)
        expect(lookup.country_prefix).toEqual(expectedResponse.country_prefix)
        expect(lookup.request_price).toEqual(expectedResponse.request_price)
        expect(lookup.refund_price).toEqual(expectedResponse.refund_price)
        expect(lookup.remaining_balance).toEqual(
            expectedResponse.remaining_balance
        )
        expect(lookup.current_carrier).toEqual(expectedResponse.current_carrier)
        expect(lookup.original_carrier).toEqual(
            expectedResponse.original_carrier
        )
        expect(lookup.ported).toEqual(expectedResponse.ported)
        expect(lookup.caller_identity).toEqual(expectedResponse.caller_identity)
        expect(lookup.caller_name).toEqual(expectedResponse.caller_name)
        expect(lookup.last_name).toEqual(expectedResponse.last_name)
        expect(lookup.first_name).toEqual(expectedResponse.first_name)
        expect(lookup.caller_type).toEqual(expectedResponse.caller_type)
    })

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
        }

        nock(BASE_URL)
            .persist()
            .get('/ni/advanced/json')
            .query({
                api_key: 'abcd',
                api_secret: '1234',
                number: expectedResponse.international_format_number,
            })
            .reply(200, expectedResponse)

        const lookup = await client.advancedLookup('447700900000')
        expect(lookup.status).toEqual(expectedResponse.status)
        expect(lookup.status_message).toEqual(expectedResponse.status_message)
        expect(lookup.request_id).toEqual(expectedResponse.request_id)
        expect(lookup.international_format_number).toEqual(
            expectedResponse.international_format_number
        )
        expect(lookup.national_format_number).toEqual(
            expectedResponse.national_format_number
        )
        expect(lookup.country_code).toEqual(expectedResponse.country_code)
        expect(lookup.country_code_iso3).toEqual(
            expectedResponse.country_code_iso3
        )
        expect(lookup.country_name).toEqual(expectedResponse.country_name)
        expect(lookup.country_prefix).toEqual(expectedResponse.country_prefix)
        expect(lookup.request_price).toEqual(expectedResponse.request_price)
        expect(lookup.refund_price).toEqual(expectedResponse.refund_price)
        expect(lookup.remaining_balance).toEqual(
            expectedResponse.remaining_balance
        )
        expect(lookup.current_carrier).toEqual(expectedResponse.current_carrier)
        expect(lookup.original_carrier).toEqual(
            expectedResponse.original_carrier
        )
        expect(lookup.ported).toEqual(expectedResponse.ported)
        expect(lookup.caller_identity).toEqual(expectedResponse.caller_identity)
        expect(lookup.roaming).toEqual(expectedResponse.roaming)
        expect(lookup.lookup_outcome).toEqual(expectedResponse.lookup_outcome)
        expect(lookup.lookup_outcome_message).toEqual(
            expectedResponse.lookup_outcome_message
        )
        expect(lookup.valid_number).toEqual(expectedResponse.valid_number)
        expect(lookup.reachable).toEqual(expectedResponse.reachable)
        expect(lookup.real_time_data).toEqual(expectedResponse.real_time_data)
    })

    test('do an async advanced lookup', async () => {
        const expectedResponse = {
            request_id: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
            number: '447700900000',
            remaining_balance: '1.23456789',
            request_price: '0.01500000',
            status: 0,
            error_text: 'Success',
        }

        nock(BASE_URL)
            .persist()
            .get('/ni/advanced/async/json')
            .query({
                api_key: 'abcd',
                api_secret: '1234',
                number: expectedResponse.number,
                callback: 'https://test.com/lookup/handler',
            })
            .reply(200, expectedResponse)

        const lookup = await client.asyncAdvancedLookup(
            '447700900000',
            'https://test.com/lookup/handler'
        )
        expect(lookup.status).toEqual(expectedResponse.status)
        expect(lookup.request_id).toEqual(expectedResponse.request_id)
        expect(lookup.number).toEqual(expectedResponse.number)
        expect(lookup.remaining_balance).toEqual(
            expectedResponse.remaining_balance
        )
        expect(lookup.request_price).toEqual(expectedResponse.request_price)
        expect(lookup.error_text).toEqual(expectedResponse.error_text)
    })
})
