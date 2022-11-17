import { Client } from '@vonage/server-client';
import {
    NumbersAvailableList,
    NumbersEmptyResponse,
    NumbersOwnedFilter,
    NumbersOwnedList,
    NumbersOwnedNumber,
    NumbersParams,
    NumbersSearchFilter,
    NumbersUpdateParams,
} from './types';

const remapObjects = <T, O>(mapping, newObject: T, oldObject: O): T => {
    for (const key in mapping) {
        if (oldObject[mapping[key]]) {
            newObject[key] = oldObject[mapping[key]];
            delete oldObject[mapping[key]];
        }
    }
    newObject = { ...newObject, ...oldObject };
    return newObject;
};

export class Numbers extends Client {
    j;

    public async buyNumber(
        params?: NumbersParams,
    ): Promise<NumbersEmptyResponse> {
        const mapping = { target_api_key: 'targetApiKey' };
        const data = remapObjects(mapping, {}, params);
        const resp = await this.sendPostRequest<NumbersEmptyResponse>(
            `${this.config.restHost}/number/buy`,
            data,
        );

        return {
            errorCode: resp.data['error-code'],
            errorCodeLabel: resp.data['error-code-label'],
        };
    }

    public async cancelNumber(
        params?: NumbersParams,
    ): Promise<NumbersEmptyResponse> {
        const mapping = { target_api_key: 'targetApiKey' };
        const data = remapObjects(mapping, {}, params);
        const resp = await this.sendPostRequest<NumbersEmptyResponse>(
            `${this.config.restHost}/number/cancel`,
            data,
        );

        return {
            errorCode: resp.data['error-code'],
            errorCodeLabel: resp.data['error-code-label'],
        };
    }

    public async getAvailableNumbers(
        filter?: NumbersSearchFilter,
    ): Promise<NumbersAvailableList> {
        const mapping = {
            search_pattern: 'searchPattern',
        };
        const data = remapObjects(mapping, {}, filter);
        const resp = await this.sendGetRequest<NumbersAvailableList>(
            `${this.config.restHost}/number/search`,
            data,
        );

        return resp.data;
    }

    public async getOwnedNumbers(
        filter?: NumbersOwnedFilter,
    ): Promise<NumbersOwnedList> {
        const mapping = {
            application_id: 'applicationId',
            has_application: 'hasApplication',
            search_pattern: 'searchPattern',
        };
        const data = remapObjects(mapping, {}, filter);
        const resp = await this.sendGetRequest<NumbersOwnedList>(
            `${this.config.restHost}/account/numbers`,
            data,
        );
        return resp.data;
    }

    public async updateNumber(
        params?: NumbersUpdateParams,
    ): Promise<NumbersEmptyResponse> {
        const mapping = {
            app_id: 'applicationId',
        };
        const data = remapObjects(mapping, {}, params);
        const resp = await this.sendPostRequest<NumbersOwnedNumber>(
            `${this.config.restHost}/number/update`,
            data,
        );

        return {
            errorCode: resp.data['error-code'],
            errorCodeLabel: resp.data['error-code-label'],
        };
    }
}
