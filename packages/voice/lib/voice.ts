import { Auth } from "@vonage/auth";
import { tokenGenerate } from "@vonage/jwt";
import { request, ResponseTypes } from "@vonage/vetch";
import { URLTransfer, NCCOTransfer, Action, TalkAction } from "./ncco";
import { CallCreateResponse, CallDetailResponse, CallListFilter, CallListResponse, CallModifyResponse, VoiceClassParameters, VoiceEmptyResponse, VoiceResponse } from "./types";
import { OutboundCall } from "./types/OutboundCall";

export const BASE_URL = " https://api.nexmo.com/".replace(/\/+$/, "");

const runRequest = async <T>(options: any, config: any): Promise<VoiceResponse<T>> => {
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

export const VoiceParamCreator = function(options: VoiceClassParameters) {
    return {
        createOutboundCall(call: OutboundCall) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/v1/calls/`;
            localVetchOptions['headers'] = Object.assign({}, options.headers, { 'Authorization': 'Bearer ' + tokenGenerate(options.appId, options.privateKey) });
            localVetchOptions['method'] = 'POST';
            localVetchOptions['data'] = call;
            return localVetchOptions;
        },
        getCall(uuid: string) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/v1/calls/${uuid}`;
            localVetchOptions['headers'] = Object.assign({}, options.headers, { 'Authorization': 'Bearer ' + tokenGenerate(options.appId, options.privateKey) });
            localVetchOptions['method'] = 'GET';
            return localVetchOptions;
        },
        modifyCall(uuid: string, action: string) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/v1/calls/${uuid}`;
            localVetchOptions['headers'] = Object.assign({}, options.headers, { 'Authorization': 'Bearer ' + tokenGenerate(options.appId, options.privateKey) });
            localVetchOptions['method'] = 'PUT';
            localVetchOptions['data'] = { action }
            return localVetchOptions;
        },
        playDTMF(uuid: string, digits: string) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/v1/calls/${uuid}/dtmf`;
            localVetchOptions['headers'] = Object.assign({}, options.headers, { 'Authorization': 'Bearer ' + tokenGenerate(options.appId, options.privateKey) });
            localVetchOptions['method'] = 'PUT';
            localVetchOptions['data'] = { digits: digits };

            return localVetchOptions;
        },
        playTTS(uuid: string, action: TalkAction) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/v1/calls/${uuid}/talk`;
            localVetchOptions['headers'] = Object.assign({}, options.headers, { 'Authorization': 'Bearer ' + tokenGenerate(options.appId, options.privateKey) });
            localVetchOptions['method'] = 'PUT';
            localVetchOptions['data'] = action;

            // The older TTS endpoint doesn't need an `action` key
            delete localVetchOptions['data'].action;

            return localVetchOptions;
        },
        search(filter?: CallListFilter) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/v1/calls`;
            localVetchOptions['headers'] = Object.assign({}, options.headers, { 'Authorization': 'Bearer ' + tokenGenerate(options.appId, options.privateKey) });
            localVetchOptions['method'] = 'GET';

            if (filter) {
                const queryParams = remapObjects({
                        'status': 'status',
                        'date_start': 'dateStart',
                        'date_end': 'dateEnd',
                        'page_size': 'pageSize',
                        'record_index': 'recordIndex',
                        'order': 'order',
                        'conversation_uuid': 'conversationUUID',
                    },
                    {},
                    filter
                );
                localVetchOptions['params'] = queryParams;
            }
            
            return localVetchOptions;
        },
        stopStreamAudio(uuid: string) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/v1/calls/${uuid}/stream`;
            localVetchOptions['headers'] = Object.assign({}, options.headers, { 'Authorization': 'Bearer ' + tokenGenerate(options.appId, options.privateKey) });
            localVetchOptions['method'] = 'DELETE';
            return localVetchOptions;
        },
        stopTTS(uuid: string) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/v1/calls/${uuid}/talk`;
            localVetchOptions['headers'] = Object.assign({}, options.headers, { 'Authorization': 'Bearer ' + tokenGenerate(options.appId, options.privateKey) });
            localVetchOptions['method'] = 'DELETE';
            return localVetchOptions;
        },
        streamAudio(uuid: string, url: string, loop: number, volumeLevel: number) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/v1/calls/${uuid}/stream`;
            localVetchOptions['headers'] = Object.assign({}, options.headers, { 'Authorization': 'Bearer ' + tokenGenerate(options.appId, options.privateKey) });
            localVetchOptions['method'] = 'PUT';
            localVetchOptions['data'] = {
                stream_url: [url],
                loop: loop,
                level: String(volumeLevel)
            };
            return localVetchOptions;
        },
        transferCall(uuid: string, ncco: URLTransfer | NCCOTransfer) {
            const localVetchOptions = {};
            localVetchOptions['url'] = `${options.baseUrl}/v1/calls/${uuid}`;
            localVetchOptions['headers'] = Object.assign({}, options.headers, { 'Authorization': 'Bearer ' + tokenGenerate(options.appId, options.privateKey) });
            localVetchOptions['method'] = 'PUT';
            localVetchOptions['data'] = ncco;
            return localVetchOptions;
        }
    }
}

export class Voice {
    protected config: VoiceClassParameters;

    constructor(opts?: VoiceClassParameters) {
        if (opts) {
            opts['auth'] = new Auth({ apiKey: opts.apiKey, apiSecret: opts.apiSecret, privateKey: opts.privateKey, appId: opts.appId, signature: opts.signature });
            opts['baseUrl'] = opts.baseUrl || BASE_URL;
            opts['responseType'] = opts.responseType || ResponseTypes.json;
            this.config = opts;
        }
    }

    public async createOutboundCall(call: OutboundCall) {
        const localVetchOptions = VoiceParamCreator(this.config).createOutboundCall(call);
        const resp = await runRequest<CallCreateResponse>(localVetchOptions, this.config);

        return resp.data;
    }

    public async earmuffCall(uuid: string) {
        const localVetchOptions = VoiceParamCreator(this.config).modifyCall(uuid, "earmuff");
        await runRequest<VoiceEmptyResponse>(localVetchOptions, this.config);
    }

    public async getCall(uuid: string) {
        const localVetchOptions = VoiceParamCreator(this.config).getCall(uuid);
        const resp = await runRequest<CallDetailResponse>(localVetchOptions, this.config);

        return resp.data;
    }

    public async hangupCall(uuid: string) {
        const localVetchOptions = VoiceParamCreator(this.config).modifyCall(uuid, "hangup");
        await runRequest<VoiceEmptyResponse>(localVetchOptions, this.config);
    }

    public async muteCall(uuid: string) {
        const localVetchOptions = VoiceParamCreator(this.config).modifyCall(uuid, "mute");
        await runRequest<VoiceEmptyResponse>(localVetchOptions, this.config);
    }

    public async playDTMF(uuid: string, digits: string) {
        const localVetchOptions = VoiceParamCreator(this.config).playDTMF(uuid, digits);
        const resp = await runRequest<CallModifyResponse>(localVetchOptions, this.config);

        return resp.data;
    }

    public async playTTS(uuid: string, action: TalkAction) {
        const localVetchOptions = VoiceParamCreator(this.config).playTTS(uuid, action);
        const resp = await runRequest<CallModifyResponse>(localVetchOptions, this.config);

        return resp.data;
    }

    public async search(filter?: CallListFilter) {
        const localVetchOptions = VoiceParamCreator(this.config).search(filter);
        const resp = await runRequest<CallListResponse>(localVetchOptions, this.config);

        return resp.data;
    }

    public async stopStreamAudio(uuid: string) {
        const localVetchOptions = VoiceParamCreator(this.config).stopStreamAudio(uuid);
        const resp = await runRequest<CallModifyResponse>(localVetchOptions, this.config);

        return resp.data;
    }

    public async stopTTS(uuid: string) {
        const localVetchOptions = VoiceParamCreator(this.config).stopTTS(uuid);
        const resp = await runRequest<CallModifyResponse>(localVetchOptions, this.config);

        return resp.data;
    }

    public async streamAudio(uuid: string, url: string, loop: number = 1, volumeLevel: number = 0.0) {
        const localVetchOptions = VoiceParamCreator(this.config).streamAudio(uuid, url, loop, volumeLevel);
        const resp = await runRequest<CallModifyResponse>(localVetchOptions, this.config);

        return resp.data;
    }

    public async transferCallWithNCCO(uuid: string, ncco: Action[]) {
        const action = {
            action: "transfer",
            destination: {
                type: "ncco",
                ncco: ncco
            }
        }
        const localVetchOptions = VoiceParamCreator(this.config).transferCall(uuid, action);
        await runRequest<VoiceEmptyResponse>(localVetchOptions, this.config);
    }

    public async transferCallWithURL(uuid: string, url: string) {
        const action = {
            action: "transfer",
            destination: {
                type: "ncco",
                url: [
                    url
                ]
            }
        }
        const localVetchOptions = VoiceParamCreator(this.config).transferCall(uuid, action);
        await runRequest<VoiceEmptyResponse>(localVetchOptions, this.config);
    }

    public async unearmuffCall(uuid: string) {
        const localVetchOptions = VoiceParamCreator(this.config).modifyCall(uuid, "unearmuff");
        await runRequest<VoiceEmptyResponse>(localVetchOptions, this.config);
    }

    public async unmuteCall(uuid: string) {
        const localVetchOptions = VoiceParamCreator(this.config).modifyCall(uuid, "unmute");
        await runRequest<VoiceEmptyResponse>(localVetchOptions, this.config);
    }
}