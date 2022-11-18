import { AuthenticationType, Client } from '@vonage/server-client'
import { Feature } from './enums/Feature'
import {
    NumbersAvailableList,
    NumbersOwnedFilter,
    NumbersOwnedList,
    NumbersOwnedNumber,
    NumbersEmptyResponse,
    NumbersUpdateParams,
    NumbersSearchFilter,
    NumbersParams,
} from './types'

const remapObjects = <T, O>(mapping, newObject: T, oldObject: O): T => {
    for (const key in mapping) {
        if (oldObject[mapping[key]]) {
            newObject[key] = oldObject[mapping[key]]
            delete oldObject[mapping[key]]
        }
    }
    newObject = { ...newObject, ...oldObject }
    return newObject
}

export class Numbers extends Client {
    protected authType = AuthenticationType.QUERY_KEY_SECRET

    public async buyNumber(
        params?: NumbersParams
    ): Promise<NumbersEmptyResponse> {
        const mapping = { target_api_key: 'targetApiKey' }
        const data = remapObjects(mapping, {}, params)
        const resp = await this.sendFormSubmitRequest<NumbersEmptyResponse>(
            `${this.config.restHost}/number/buy`,
            data
        )

        return {
            errorCode: resp.data['error-code'],
            errorCodeLabel: resp.data['error-code-label'],
        }
    }

    public async cancelNumber(
        params?: NumbersParams
    ): Promise<NumbersEmptyResponse> {
        const mapping = { target_api_key: 'targetApiKey' }
        const data = remapObjects(mapping, {}, params)
        const resp = await this.sendFormSubmitRequest<NumbersEmptyResponse>(
            `${this.config.restHost}/number/cancel`,
            data
        )

        return {
            errorCode: resp.data['error-code'],
            errorCodeLabel: resp.data['error-code-label'],
        }
    }

    public async getAvailableNumbers(
        filter?: NumbersSearchFilter
    ): Promise<NumbersAvailableList> {
        const mapping = {
            search_pattern: 'searchPattern',
        }
        const data: any = remapObjects(mapping, {}, filter)

        // API expects these as a CSV in a specific order
        if (data.features) {
            if (data.features.length === 1) {
                data.features = data.features.join()
            } else if (data.features.length === 2) {
                const newOrder = []
                if (data.features.includes(Feature.SMS)) {
                    newOrder.push(Feature.SMS)
                }
                if (data.features.includes(Feature.VOICE)) {
                    newOrder.push(Feature.VOICE)
                }
                if (data.features.includes(Feature.MMS)) {
                    newOrder.push(Feature.MMS)
                }
                data.features = newOrder.join(',')
            } else if (data.features.length === 3) {
                data.features = [Feature.SMS, Feature.MMS, Feature.VOICE].join(
                    ','
                )
            } else {
                throw new Error('Invalid number of features request')
            }
        }

        const resp = await this.sendGetRequest<NumbersAvailableList>(
            `${this.config.restHost}/number/search`,
            data
        )

        return resp.data
    }

    public async getOwnedNumbers(
        filter?: NumbersOwnedFilter
    ): Promise<NumbersOwnedList> {
        const mapping = {
            application_id: 'applicationId',
            has_application: 'hasApplication',
            search_pattern: 'searchPattern',
        }
        const data = remapObjects(mapping, {}, filter)
        const resp = await this.sendGetRequest<NumbersOwnedList>(
            `${this.config.restHost}/account/numbers`,
            data
        )
        return resp.data
    }

    public async updateNumber(
        params?: NumbersUpdateParams
    ): Promise<NumbersEmptyResponse> {
        const mapping = {
            app_id: 'applicationId',
        }
        const data = remapObjects(mapping, {}, params)
        const resp = await this.sendFormSubmitRequest<NumbersOwnedNumber>(
            `${this.config.restHost}/number/update`,
            data
        )

        return {
            errorCode: resp.data['error-code'],
            errorCodeLabel: resp.data['error-code-label'],
        }
    }
}
