
import { Auth, AuthInterface } from '@vonage/auth';
import { request, ResponseTypes } from "@vonage/vetch";
import { unset } from 'lodash';
import {
    NumbersResponse,
    NumbersAvailableList,
    NumbersOwnedFilter,
    NumbersOwnedList,
    NumbersOwnedNumber,
    NumbersEmptyResponse,
    NumbersUpdateParams,
    NumbersSearchFilter,
    NumbersClassParameters,
    NumbersParams,
    NumbersQueryParams,
    NumbersQueryOwnedFilter,
    NumbersQuerySearchFilter,
    NumbersQueryUpdateParams
} from './types';


const runRequest = async <T>(options: NumbersClassParameters): Promise<NumbersResponse<T>> => {
    let result = await request<T>(options);
    return result;
}

const remapObjects = <T, O>(mapping, newObject: T, oldObject: O): T => {
    for (const key in mapping) {
        if (oldObject[mapping[key]]) {
            newObject[key] = oldObject[mapping[key]];
            delete oldObject[mapping[key]]
        }
    }
    newObject = { ...newObject, ...oldObject };
    return newObject;
}

const BASE_URL = "https://rest.nexmo.com".replace(/\/+$/, "");

export const NumbersParamCreator = function (options?: NumbersClassParameters) {
    return {
        buyNumber(params?: NumbersParams) {
            const mapping = { 'target_api_key': 'targetApiKey' };
            let data: NumbersQueryParams = {
                country: params.country,
                msisdn: params.msisdn
            };
            data = remapObjects(mapping, data, params);

            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/number/buy`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['data'] = options.auth.getQueryParams(data);
            localVetchOptions['method'] = 'POST';
            return localVetchOptions;
        },
        cancelNumber(params?: NumbersParams) {
            const mapping = { 'target_api_key': 'targetApiKey' };
            let data: NumbersQueryParams = {
                country: params.country,
                msisdn: params.msisdn
            };
            data = remapObjects(mapping, data, params);

            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/number/cancel`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['data'] = options.auth.getQueryParams(data);
            localVetchOptions['method'] = 'POST';
            return localVetchOptions;
        },
        getAvailableNumbers(filter?: NumbersSearchFilter) {
            const mapping = {
                "search_pattern": "searchPattern"
            };
            let data: NumbersQuerySearchFilter = { country: filter.country };
            data = remapObjects(mapping, data, filter);

            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/number/search`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['params'] = options.auth.getQueryParams(data);
            return localVetchOptions;
        },
        getOwnedNumbers(filter?: NumbersOwnedFilter) {
            const mapping = {
                'application_id': 'applicationId',
                'has_application': 'hasApplication',
                'search_pattern': 'searchPattern',
            }
            let data: NumbersQueryOwnedFilter = {};
            data = remapObjects(mapping, data, filter);

            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/account/numbers`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['params'] = options.auth.getQueryParams(data);
            return localVetchOptions;
        },
        updateNumber(params?: NumbersUpdateParams) {
            const mapping = {
                'app_id': 'appId',
            }
            let data: NumbersQueryUpdateParams = {
                country: params.country,
                msisdn: params.msisdn,
            };
            data = remapObjects(mapping, data, params);

            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/number/update`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['data'] = options.auth.getQueryParams(data);
            localVetchOptions['method'] = 'POST';
            return localVetchOptions;
        },
    };
};

export class BaseAPI {
    protected config: NumbersClassParameters;
    protected auth: AuthInterface;
    protected baseUrl: string;

    constructor(opts?: NumbersClassParameters) {
        if (opts) {
            opts['auth'] = new Auth({ apiKey: opts.apiKey, apiSecret: opts.apiSecret, privateKey: opts.privateKey });
            opts['baseUrl'] = opts.baseUrl || BASE_URL;
            opts['responseType'] = opts.responseType || ResponseTypes.json;
            this.config = opts;
        }
    }
};

export class Numbers extends BaseAPI {

    public async buyNumber(params?: NumbersParams) {
        const localVetchOptions = NumbersParamCreator(this.config).buyNumber(params);
        const resp = await runRequest<NumbersEmptyResponse>(localVetchOptions);

        return {
            errorCode: resp.data['error-code'],
            errorCodeLabel: resp.data['error-code-label']
        };
    }
    public async cancelNumber(params?: NumbersParams) {
        const localVetchOptions = NumbersParamCreator(this.config).cancelNumber(params);
        const resp = await runRequest<NumbersEmptyResponse>(localVetchOptions);

        return {
            errorCode: resp.data['error-code'],
            errorCodeLabel: resp.data['error-code-label']
        };
    }
    public async getAvailableNumbers(filter?: NumbersSearchFilter) {
        const localVetchOptions = NumbersParamCreator(this.config).getAvailableNumbers(filter);
        const resp = await runRequest<NumbersAvailableList>(localVetchOptions);

        const data: NumbersAvailableList = {
            count: resp.data.count,
            numbers: resp.data.numbers,
        };
        return data;
    }
    public async getOwnedNumbers(filter?: NumbersOwnedFilter) {
        const localVetchOptions = NumbersParamCreator(this.config).getOwnedNumbers(filter);
        const resp = await runRequest<NumbersOwnedList>(localVetchOptions);

        const data: NumbersOwnedList = {
            count: resp.data.count,
            numbers: resp.data.numbers,
        };
        return data;
    }
    public async updateNumber(params?: NumbersUpdateParams) {
        const localVetchOptions = NumbersParamCreator(this.config).updateNumber(params);
        const resp = await runRequest<NumbersOwnedNumber>(localVetchOptions);

        return {
            errorCode: resp.data['error-code'],
            errorCodeLabel: resp.data['error-code-label']
        };
    }
}