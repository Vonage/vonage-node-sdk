import { AuthenticationType, Client } from '@vonage/server-client';
import { Action, TalkAction } from './ncco';
import {
    CallCreateResponse,
    CallDetailResponse,
    CallListFilter,
    CallListResponse,
    CallModifyResponse,
} from './types';
import { OutboundCall } from './types/OutboundCall';

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

export class Voice extends Client {
    protected authType = AuthenticationType.JWT;

    public async createOutboundCall(
        call: OutboundCall,
    ): Promise<CallCreateResponse> {
        const resp = await this.sendPostRequest<CallCreateResponse>(
            `${this.config.apiHost}/v1/calls/`,
            call,
        );
        return resp.data;
    }

    public async earmuffCall(uuid: string): Promise<void> {
        await this.sendPutRequest<void>(
            `${this.config.apiHost}/v1/calls/${uuid}`,
            { action: 'earmuff' },
        );
    }

    public async getCall(uuid: string): Promise<CallDetailResponse> {
        const resp = await this.sendGetRequest<CallDetailResponse>(
            `${this.config.apiHost}/v1/calls/${uuid}`,
        );
        return resp.data;
    }

    public async hangupCall(uuid: string): Promise<void> {
        await this.sendPutRequest<void>(
            `${this.config.apiHost}/v1/calls/${uuid}`,
            { action: 'hangup' },
        );
    }

    public async muteCall(uuid: string): Promise<void> {
        await this.sendPutRequest<void>(
            `${this.config.apiHost}/v1/calls/${uuid}`,
            { action: 'mute' },
        );
    }

    public async playDTMF(
        uuid: string,
        digits: string,
    ): Promise<CallModifyResponse> {
        const resp = await this.sendPutRequest<CallModifyResponse>(
            `${this.config.apiHost}/v1/calls/${uuid}/dtmf`,
            { digits },
        );
        return resp.data;
    }

    public async playTTS(
        uuid: string,
        action: TalkAction,
    ): Promise<CallModifyResponse> {
        delete action.action;

        const resp = await this.sendPutRequest<CallModifyResponse>(
            `${this.config.apiHost}/v1/calls/${uuid}/talk`,
            action,
        );
        return resp.data;
    }

    public async search(filter?: CallListFilter): Promise<CallListResponse> {
        if (filter) {
            filter = remapObjects(
                {
                    status: 'status',
                    date_start: 'dateStart',
                    date_end: 'dateEnd',
                    page_size: 'pageSize',
                    record_index: 'recordIndex',
                    order: 'order',
                    conversation_uuid: 'conversationUUID',
                },
                {},
                filter,
            );
        }

        const resp = await this.sendGetRequest<CallListResponse>(
            `${this.config.apiHost}/v1/calls`,
            filter,
        );
        return resp.data;
    }

    public async stopStreamAudio(uuid: string): Promise<CallModifyResponse> {
        const resp = await this.sendDeleteRequest<CallModifyResponse>(
            `${this.config.apiHost}/v1/calls/${uuid}/stream`,
        );
        return resp.data;
    }

    public async stopTTS(uuid: string): Promise<CallModifyResponse> {
        const resp = await this.sendDeleteRequest<CallModifyResponse>(
            `${this.config.apiHost}/v1/calls/${uuid}/talk`,
        );
        return resp.data;
    }

    public async streamAudio(
        uuid: string,
        url: string,
        loop = 1,
        volumeLevel = 0.0,
    ): Promise<CallModifyResponse> {
        const data = {
            stream_url: [url],
            loop,
            level: String(volumeLevel),
        };

        const resp = await this.sendPutRequest<CallModifyResponse>(
            `${this.config.apiHost}/v1/calls/${uuid}/stream`,
            data,
        );
        return resp.data;
    }

    public async transferCallWithNCCO(
        uuid: string,
        ncco: Action[],
    ): Promise<void> {
        const action = {
            action: 'transfer',
            destination: {
                type: 'ncco',
                ncco,
            },
        };

        await this.sendPutRequest<void>(
            `${this.config.apiHost}/v1/calls/${uuid}`,
            action,
        );
    }

    public async transferCallWithURL(uuid: string, url: string): Promise<void> {
        const action = {
            action: 'transfer',
            destination: {
                type: 'ncco',
                url: [url],
            },
        };
        await this.sendPutRequest<void>(
            `${this.config.apiHost}/v1/calls/${uuid}`,
            action,
        );
    }

    public async unearmuffCall(uuid: string): Promise<void> {
        await this.sendPutRequest<void>(
            `${this.config.apiHost}/v1/calls/${uuid}`,
            { action: 'unearmuff' },
        );
    }

    public async unmuteCall(uuid: string): Promise<void> {
        await this.sendPutRequest<void>(
            `${this.config.apiHost}/v1/calls/${uuid}`,
            { action: 'unmute' },
        );
    }
}
