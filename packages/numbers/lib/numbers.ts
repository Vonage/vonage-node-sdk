
import { Auth, AuthInterface } from '@vonage/auth';
import { request, ResponseTypes } from "@vonage/vetch";
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
    NumbersParams
} from './types';


const runRequest = async <T>(options: NumbersClassParameters): Promise<NumbersResponse<T>> => {
    let result = await request<T>(options);
    return result;
}

const BASE_URL = "https://rest.nexmo.com".replace(/\/+$/, "");

export const NumbersParamCreator = function (options?: NumbersClassParameters) {
    return {
        buyNumber(params?: NumbersParams) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/number/buy`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['data'] = options.auth.getQueryParams(params);
            localVetchOptions['method'] = 'POST';
            return localVetchOptions;
        },
        cancelNumber(params?: NumbersParams) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/number/cancel`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['data'] = options.auth.getQueryParams(params);
            localVetchOptions['method'] = 'POST';
            return localVetchOptions;
        },
        getAvailableNumbers(filter?: NumbersSearchFilter) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/number/search`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['params'] = options.auth.getQueryParams(filter);
            return localVetchOptions;
        },
        getOwnedNumbers(filter?: NumbersOwnedFilter) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/account/numbers`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['params'] = options.auth.getQueryParams(filter);
            return localVetchOptions;
        },
        updateNumber(params?: NumbersUpdateParams) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/number/update`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['data'] = options.auth.getQueryParams(params);
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
            opts['auth'] = new Auth({ apiKey: opts.apiKey, apiSecret: opts.apiSecret, file: opts.file });
            opts['baseUrl'] = opts.baseUrl || BASE_URL;
            opts['responseType'] = opts.responseType || ResponseTypes.json;
            this.config = opts;
        }
    }
};

export class Numbers extends BaseAPI {

    public buyNumber(params?: NumbersParams) {
        const localVetchOptions = NumbersParamCreator(this.config).buyNumber(params);
        return runRequest<NumbersEmptyResponse>(localVetchOptions);
    }
    public cancelNumber(params?: NumbersParams) {
        const localVetchOptions = NumbersParamCreator(this.config).cancelNumber(params);
        return runRequest<NumbersEmptyResponse>(localVetchOptions);
    }
    public getAvailableNumbers(filter?: NumbersSearchFilter) {
        const localVetchOptions = NumbersParamCreator(this.config).getAvailableNumbers(filter);
        return runRequest<NumbersAvailableList>(localVetchOptions);
    }
    public getOwnedNumbers(filter?: NumbersOwnedFilter) {
        const localVetchOptions = NumbersParamCreator(this.config).getOwnedNumbers(filter);
        return runRequest<NumbersOwnedList>(localVetchOptions);

    }
    public updateNumber(params?: NumbersUpdateParams) {
        const localVetchOptions = NumbersParamCreator(this.config).updateNumber(params);
        return runRequest<NumbersOwnedNumber>(localVetchOptions);
    }
}