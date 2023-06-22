import { AuthenticationType, Client } from '@vonage/server-client';
import {
  GetCallDetailsParameters,
  CallPageResponse,
  CallDetailResponse,
  CallDetail,
  CreateCallResponse,
  CallResult,
  CallUpdateResult,
  UpdateCallResponse,
  Action,
  TalkAction,
  OutboundCall,
} from './types/index';

import { CallListFilter } from './types';

const apiCallsToCalls = (call: CallDetailResponse): CallDetail => {
  delete call._links;
  const transformedCall = Client.transformers.camelCaseObjectKeys(
    call,
    true,
    true,
  );
  delete transformedCall.conversationUuid;
  return {
    ...transformedCall,
    conversationUUID: call.conversation_uuid,
  };
};

type NCCODestination = {
  type: 'ncco';
  url?: Array<string>;
  ncco?: Array<Action>;
};

export class Voice extends Client {
  protected authType = AuthenticationType.JWT;

  async *getAllCalls(
    params: GetCallDetailsParameters = {},
  ): AsyncGenerator<CallDetail, void & CallDetail, undefined> {
    let next: URL | null = null;
    params.recordIndex = params?.recordIndex || 0;
    do {
      const resp = await this.getCallsPage(params);

      yield* resp?._embedded?.calls.map(apiCallsToCalls);
      next = resp?._links?.next ? new URL(resp._links.next.href) : null;
      if (next) {
        params.recordIndex = parseInt(next.searchParams.get('record_index'));
      }
    } while (next);
  }

  async getCallsPage(
    params: GetCallDetailsParameters,
  ): Promise<CallPageResponse> {
    const resp = await this.sendGetRequest<CallPageResponse>(
      `${this.config.apiHost}/v1/calls`,
      Client.transformers.snakeCaseObjectKeys(params),
    );
    return {
      ...resp.data,
    };
  }

  async search(filter?: CallListFilter): Promise<CallPageResponse> {
    return this.getCallsPage(filter);
  }

  async getCall(uuid: string): Promise<CallDetail> {
    const resp = await this.sendGetRequest<CallDetailResponse>(
      `${this.config.apiHost}/v1/calls/${uuid}`,
    );
    return apiCallsToCalls(resp.data);
  }

  async createOutboundCall(call: OutboundCall): Promise<CallResult> {
    const resp = await this.sendPostRequest<CreateCallResponse>(
      `${this.config.apiHost}/v1/calls`,
      Client.transformers.snakeCaseObjectKeys(call, true),
    );
    const result = Client.transformers.camelCaseObjectKeys(
      resp.data,
      true,
      true,
    );
    delete result.conversationUuid;
    result.conversationUUID = resp.data.conversation_uuid;
    return result;
  }

  async playDTMF(uuid: string, digits: string): Promise<CallUpdateResult> {
    const resp = await this.sendPutRequest<UpdateCallResponse>(
      `${this.config.apiHost}/v1/calls/${uuid}/dtmf`,
      { digits: digits },
    );
    return Client.transformers.snakeCaseObjectKeys(resp.data, true, true);
  }

  async playTTS(uuid: string, action: TalkAction): Promise<CallUpdateResult> {
    delete action.action;
    delete action.bargeIn;

    const resp = await this.sendPutRequest<UpdateCallResponse>(
      `${this.config.apiHost}/v1/calls/${uuid}/talk`,
      Client.transformers.snakeCaseObjectKeys(action),
    );
    return Client.transformers.snakeCaseObjectKeys(resp.data, true, true);
  }

  async stopTTS(uuid: string): Promise<CallUpdateResult> {
    const resp = await this.sendDeleteRequest<UpdateCallResponse>(
      `${this.config.apiHost}/v1/calls/${uuid}/talk`,
    );
    return Client.transformers.snakeCaseObjectKeys(resp.data, true, true);
  }

  async streamAudio(
    uuid: string,
    url: string,
    loop = 1,
    volumeLevel = 0.0,
  ): Promise<UpdateCallResponse> {
    const resp = await this.sendPutRequest<UpdateCallResponse>(
      `${this.config.apiHost}/v1/calls/${uuid}/stream`,
      {
        stream_url: [url],
        loop,
        level: String(volumeLevel),
      },
    );
    return Client.transformers.snakeCaseObjectKeys(resp.data, true, true);
  }

  async stopStreamAudio(uuid: string): Promise<CallUpdateResult> {
    const resp = await this.sendDeleteRequest<UpdateCallResponse>(
      `${this.config.apiHost}/v1/calls/${uuid}/stream`,
    );
    return Client.transformers.snakeCaseObjectKeys(resp.data, true, true);
  }

  async transferCallWithNCCO(uuid: string, ncco: Action[]): Promise<void> {
    return this.callAction(uuid, 'transfer', {
      type: 'ncco',
      ncco: ncco,
    });
  }

  async transferCallWithURL(uuid: string, url: string): Promise<void> {
    return this.callAction(uuid, 'transfer', {
      type: 'ncco',
      url: [url],
    });
  }

  async hangupCall(uuid: string): Promise<void> {
    return this.callAction(uuid, 'hangup');
  }

  async muteCall(uuid: string): Promise<void> {
    return this.callAction(uuid, 'mute');
  }

  async unmuteCall(uuid: string): Promise<void> {
    return this.callAction(uuid, 'unmute');
  }

  async earmuffCall(uuid: string): Promise<void> {
    return this.callAction(uuid, 'earmuff');
  }

  async unearmuffCall(uuid: string): Promise<void> {
    return this.callAction(uuid, 'unearmuff');
  }

  protected async callAction(
    uuid: string,
    action: string,
    destination?: NCCODestination,
  ): Promise<void> {
    await this.sendPutRequest<void>(`${this.config.apiHost}/v1/calls/${uuid}`, {
      action: action,
      ...(destination ? { destination: destination } : {}),
    });
  }
}
