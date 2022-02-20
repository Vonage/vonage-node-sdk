
import { Auth, AuthInterface } from '@vonage/auth';
import { request } from "@vonage/vetch";
import {
    NumbersResponse,
    NumbersError,
    NumbersOwnedFilter,
    NumbersOwnedListResponse,
    NumbersOwnedNumber,
    NumbersAvailableListResponse,
    NumbersUpdateParams,
    NumbersSearchFilter,
    NumbersClassParameters,
    NumbersSuccess,
    NumbersParams
} from './types';


const runRequest = async <T>(options: NumbersClassParameters): Promise<NumbersResponse<T>> => {
    try {
        let result = await request(options);
        return { type: 'success', ...result } as NumbersSuccess<T>;
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

export const NumbersAPI_FP = (options?: NumbersClassParameters) => {
    return {
        buyNumber(params: NumbersParams): Promise<NumbersResponse<NumbersOwnedNumber> | NumbersError> {
            const localVetchOptions = NumbersParamCreator(options).buyNumber(params);
            return runRequest<NumbersOwnedNumber>(localVetchOptions);
        },
        cancelNumber(params?: NumbersParams): Promise<NumbersResponse<NumbersOwnedListResponse> | NumbersError> {
            const localVetchOptions = NumbersParamCreator(options).cancelNumber(params);
            return runRequest<NumbersOwnedListResponse>(localVetchOptions);
        },
        getAvailableNumbers(filter?: NumbersSearchFilter): Promise<NumbersResponse<NumbersAvailableListResponse> | NumbersError> {
            const localVetchOptions = NumbersParamCreator(options).getAvailableNumbers(filter);
            return runRequest<NumbersAvailableListResponse>(localVetchOptions);
        },
        getOwnedNumbers(filter?: NumbersOwnedFilter): Promise<NumbersResponse<NumbersOwnedListResponse> | NumbersError> {
            const localVetchOptions = NumbersParamCreator(options).getOwnedNumbers(filter);
            return runRequest<NumbersOwnedListResponse>(localVetchOptions);
        },
        updateNumber(params?: NumbersUpdateParams): Promise<NumbersResponse<NumbersOwnedNumber> | NumbersError> {
            const localVetchOptions = NumbersParamCreator(options).updateNumber(params);
            return runRequest<NumbersOwnedListResponse>(localVetchOptions);
        },
    }
}

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
        return NumbersAPI_FP(this.config).buyNumber(params);
    }
    public cancelNumber(params?: NumbersParams) {
        return NumbersAPI_FP(this.config).cancelNumber(params);
    }
    public getAvailableNumbers(filter?: NumbersSearchFilter) {
        return NumbersAPI_FP(this.config).getAvailableNumbers(filter);
    }
    public getOwnedNumbers(filter?: NumbersOwnedFilter) {
        return NumbersAPI_FP(this.config).getOwnedNumbers(filter);
    }
    public updateNumber(params?: NumbersUpdateParams) {
        return NumbersAPI_FP(this.config).updateNumber(params);
    }
}