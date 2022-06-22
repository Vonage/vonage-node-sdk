import { Auth, AuthQueryParams, AuthSignedParams } from "@vonage/auth";
import { request, ResponseTypes } from "@vonage/vetch";
import { Command } from "./enums/Command";
import { PSD2Request } from "./interfaces/PSD2Request";
import { VerifyCheckResponse } from "./interfaces/Response/VerifyCheckResponse";
import { VerifyControlResponse } from "./interfaces/Response/VerifyControlResponse";
import { VoiceResponse } from "./interfaces/Response/VerifyResponse";
import { VerifySearchResponse } from "./interfaces/Response/VerifySearchResponse";
import { VerificationRequest } from "./interfaces/VerificationRequest";
import { VerifyClassParameters } from "./types/VerifyClassParameters";

export const BASE_URL = " https://api.nexmo.com/".replace(/\/+$/, "");

const runRequest = async <T>(options: any, config: any): Promise<VoiceResponse<T>> => {
    let result = await request<T>(options);
    return result;
}

export const VerifyParamCreator = function(options: VerifyClassParameters) {
    return {
        check(requestId: string, code: string) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/verify/check/json`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['data'] = Object.assign(
                {},
                {
                    api_secret: options.auth.apiSecret,
                    api_key: options.auth.apiKey,
                    request_id: requestId,
                    code: code
                }
            );
            localVetchOptions['method'] = 'POST';
            return localVetchOptions;
        },
        control(requestId: string, command: Command) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/verify/control/json`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['data'] = Object.assign(
                {},
                {
                    api_secret: options.auth.apiSecret,
                    api_key: options.auth.apiKey,
                    request_id: requestId,
                    cmd: command
                }
            );
            localVetchOptions['method'] = 'POST';
            return localVetchOptions;
        },
        search(requestId: string) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/verify/search/json`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['params'] = Object.assign(
                {},
                {
                    api_secret: options.auth.apiSecret,
                    api_key: options.auth.apiKey,
                    request_id: requestId,
                }
            );
            localVetchOptions['method'] = 'GET';
            return localVetchOptions;
        },
        startPSD2(request: PSD2Request) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/verify/psd2/json`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['data'] = Object.assign(
                {},
                {
                    api_secret: options.auth.apiSecret,
                    api_key: options.auth.apiKey,
                },
                request
            );
            localVetchOptions['method'] = 'POST';
            return localVetchOptions;
        },
        startVerification(request: VerificationRequest) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/verify/json`;
            localVetchOptions['headers'] = Object.assign({}, options.headers);
            localVetchOptions['data'] = Object.assign(
                {},
                {
                    api_secret: options.auth.apiSecret,
                    api_key: options.auth.apiKey,
                },
                request
            );
            localVetchOptions['method'] = 'POST';
            return localVetchOptions;
        }
    }
}

export class Verify {
    protected config: VerifyClassParameters;

    constructor(opts?: VerifyClassParameters) {
        if (opts) {
            opts['auth'] = new Auth({ apiKey: opts.apiKey, apiSecret: opts.apiSecret, signature: opts.signature });
            opts['baseUrl'] = opts.baseUrl || BASE_URL;
            opts['responseType'] = opts.responseType || ResponseTypes.json;
            this.config = opts;
        }
    }

    public async cancel(requestId: string) {
        const localVetchOptions = VerifyParamCreator(this.config).control(requestId, Command.CANCEL);
        const resp = await runRequest<VerifyControlResponse>(localVetchOptions, this.config);

        return resp.data;
    }

    public async check(requestId: string, code: string) {
        const localVetchOptions = VerifyParamCreator(this.config).check(requestId, code);
        const resp = await runRequest<VerifyCheckResponse>(localVetchOptions, this.config);

        return resp.data;
    }

    public async search(requestId: string) {
        const localVetchOptions = VerifyParamCreator(this.config).search(requestId);
        const resp = await runRequest<VerifySearchResponse>(localVetchOptions, this.config);

        return resp.data;
    }

    public async start(request: VerificationRequest | PSD2Request) {
        if ('payee' in request) {
            const localVetchOptions = VerifyParamCreator(this.config).startPSD2(request);
            const resp = await runRequest<VerifyCheckResponse>(localVetchOptions, this.config);
            return resp.data;
        } else {
            const localVetchOptions = VerifyParamCreator(this.config).startVerification(request);
            const resp = await runRequest<VerifyCheckResponse>(localVetchOptions, this.config);
            return resp.data;
        }
    }

    public async trigger(requestId: string) {
        const localVetchOptions = VerifyParamCreator(this.config).control(requestId, Command.TRIGGER_NEXT_EVENT);
        const resp = await runRequest<VerifyControlResponse>(localVetchOptions, this.config);

        return resp.data;
    }
}