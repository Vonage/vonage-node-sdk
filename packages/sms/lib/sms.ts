
import { Auth, AuthInterface, AuthSignedParams, AuthQueryParams } from '@vonage/auth';
import { request, ResponseTypes } from "@vonage/vetch";
import {
    SMSEmptyResponse,
    SMSResponse,
    SMSClassParameters,
    SMSParams,
    SMSGeneralResponse
} from './types';




const runRequest = async <T>(options: SMSClassParameters, config: SMSClassParameters): Promise<SMSResponse<T>> => {
    let result = await request<T>(options);
    return result;
}

const _getAuthMethod = <T>(options: SMSClassParameters, params: T): AuthSignedParams | AuthQueryParams => {
    return options.auth.signature
        ? options.auth.createSignatureHash<T>(params)
        : options.auth.getQueryParams<T>(params)
}


const BASE_URL = "https://rest.nexmo.com".replace(/\/+$/, "");

export const SMSParamCreator = function (options?: SMSClassParameters) {
    return {
        send(params: SMSParams) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/sms/json`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            // localVetchOptions['data'] = Object.assign({}, options.auth, params);
            localVetchOptions['data'] = _getAuthMethod<SMSParams>(options, params);
            localVetchOptions['method'] = 'POST';
            return localVetchOptions;
        }

    };
};


export class BaseAPI {
    protected config: SMSClassParameters;
    protected auth: AuthInterface;
    protected baseUrl: string;

    constructor(opts?: SMSClassParameters) {
        if (opts) {
            opts['auth'] = new Auth({ apiKey: opts.apiKey, apiSecret: opts.apiSecret, privateKey: opts.privateKey, signature: opts.signature });
            opts['baseUrl'] = opts.baseUrl || BASE_URL;
            opts['responseType'] = opts.responseType || ResponseTypes.json;
            this.config = opts;
        }
    }
};

export class SMS extends BaseAPI {
    public async send(params?: SMSParams) {
        const localVetchOptions = SMSParamCreator(this.config).send(params);
        const resp = await runRequest<SMSGeneralResponse>(localVetchOptions, this.config);

        return {
            'message-count': resp.data['message-count'],
            messages: resp.data.messages
        };
    }
}