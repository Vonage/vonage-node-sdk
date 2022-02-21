
import { Auth, AuthInterface } from '@vonage/auth';
import { request, Vetch } from "@vonage/vetch";
import {
    NumbersError,
    NumbersResponse,
    NumbersAvailableListResponse,
    NumbersOwnedFilter,
    NumbersOwnedListResponse,
    NumbersOwnedNumberResponse,
    NumbersEmptyResponse,
    NumbersUpdateParams,
    NumbersSearchFilter,
    NumbersClassParameters,
    NumbersParams,
    NumbersPromise
} from './types';


const runRequest = async <T extends NumbersResponse>(options: NumbersClassParameters): NumbersPromise<T, NumbersError> => {
    try {
        let result = await request(options);
        return { type: 'success', ...result } as unknown as T;
    } catch (error) {
        return { type: 'error', ...error } as NumbersError;
    }
}

const BASE_URL = "https://rest.nexmo.com".replace(/\/+$/, "");

export const NumbersParamCreator = function (options?: NumbersClassParameters) {
    return {
        buyNumber(params?: NumbersParams) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/number/buy`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['data'] = Object.assign({}, options.auth, params);
            localVetchOptions['method'] = 'POST';
            return localVetchOptions;
        },
        cancelNumber(params?: NumbersParams) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/number/cancel`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['data'] = Object.assign({}, options.auth, params);
            localVetchOptions['method'] = 'POST';
            return localVetchOptions;
        },
        getAvailableNumbers(filter?: NumbersSearchFilter) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/number/search`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['params'] = Object.assign({}, options.auth.getQueryParams(), filter);
            return localVetchOptions;
        },
        getOwnedNumbers(filter?: NumbersOwnedFilter) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/account/numbers`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['params'] = Object.assign({}, options.auth.getQueryParams(), filter);
            return localVetchOptions;
        },
        updateNumber(params?: NumbersUpdateParams) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/number/update`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['data'] = Object.assign({}, options.auth, params);
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
        return runRequest<NumbersAvailableListResponse>(localVetchOptions);
    }
    public getOwnedNumbers(filter?: NumbersOwnedFilter) {
        const localVetchOptions = NumbersParamCreator(this.config).getOwnedNumbers(filter);
        return runRequest<NumbersOwnedListResponse>(localVetchOptions);

    }
    public updateNumber(params?: NumbersUpdateParams) {
        const localVetchOptions = NumbersParamCreator(this.config).updateNumber(params);
        return runRequest<NumbersOwnedNumberResponse>(localVetchOptions);
    }
}