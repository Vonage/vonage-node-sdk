import { Auth, AuthInterface, AuthSignedParams, AuthQueryParams } from '@vonage/auth';
import { tokenGenerate } from '@vonage/jwt';
import { request, ResponseTypes } from "@vonage/vetch";
import { MessageObject } from './interfaces/MessageObject';
import { MessagesResponse } from './interfaces/MessageResponse';
import { MessagesSendResponse } from './types';
import { MessagesClassParameters } from './types/MessageClassParameters';

export const BASE_URL = " https://api.nexmo.com/v1/messages".replace(/\/+$/, "");

const runRequest = async <T>(options: any, config: any): Promise<MessagesResponse<T>> => {
    let result = await request<T>(options);
    return result;
}

const _getAuthMethod = <T>(options: MessagesClassParameters, params: T): AuthSignedParams | AuthQueryParams => {
    return options.auth.signature
        ? options.auth.createSignatureHash<T>(params)
        : options.auth.getQueryParams<T>(params)
}

const stripUndefined = (obj) => {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            obj[key] = stripUndefined(obj[key]);
        } else if (!obj[key]) {
            delete obj[key];
        }
    }

    return obj;
}

export const MessagesParamCreator = function (options: MessagesClassParameters) {
    return {
        send(params: any) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            if (options.applicationId && options.privateKey) {
                localVetchOptions['headers'] = Object.assign({}, options.headers, { 'Authorization': 'Bearer ' + tokenGenerate(options.applicationId, options.privateKey) });
            }
            localVetchOptions['data'] = _getAuthMethod(options, params);
            localVetchOptions['method'] = 'POST';

            localVetchOptions['data'] = stripUndefined(localVetchOptions['data']);

            return localVetchOptions;
        }
    }
}

export class Messages {
    protected config: MessagesClassParameters;
    protected auth: AuthInterface;
    protected baseUrl: string;

    constructor(opts?: MessagesClassParameters) {
        if (opts) {
            opts['auth'] = new Auth({ apiKey: opts.apiKey, apiSecret: opts.apiSecret, privateKey: opts.privateKey, applicationId: opts.applicationId, signature: opts.signature });
            opts['baseUrl'] = opts.baseUrl || BASE_URL;
            opts['responseType'] = opts.responseType || ResponseTypes.json;
            this.config = opts;
        }
    }

    public async send(message: MessageObject) {
        const localVetchOptions = MessagesParamCreator(this.config).send(message);
        const resp = await runRequest<MessagesSendResponse>(localVetchOptions, this.config);

        return resp.data;
    }
}