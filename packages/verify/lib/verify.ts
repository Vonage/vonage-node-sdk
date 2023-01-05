import { Client } from '@vonage/server-client';
import { Command } from './enums/Command';
import { PSD2Request } from './interfaces/PSD2Request';
import { VerifyCheckResponse } from './interfaces/Response/VerifyCheckResponse';
import { VerifyControlResponse } from './interfaces/Response/VerifyControlResponse';
import { VerifySearchResponse } from './interfaces/Response/VerifySearchResponse';
import { VerificationRequest } from './interfaces/VerificationRequest';

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

export class Verify extends Client {
  public async cancel(requestId: string): Promise<VerifyControlResponse> {
    const data = {
      request_id: requestId,
      cmd: Command.CANCEL,
    };

    const resp = await this.sendPostRequest<VerifyControlResponse>(
      `${this.config.apiHost}/verify/control/json`,
      data,
    );
    return resp.data;
  }

  public async check(
    requestId: string,
    code: string,
  ): Promise<VerifyCheckResponse> {
    const data = {
      request_id: requestId,
      code,
    };

    const resp = await this.sendPostRequest<VerifyCheckResponse>(
      `${this.config.apiHost}/verify/check/json`,
      data,
    );
    return resp.data;
  }

  public async search(requestId: string): Promise<VerifySearchResponse> {
    const resp = await this.sendGetRequest<VerifySearchResponse>(
      `${this.config.apiHost}/verify/search/json`,
      { request_id: requestId },
    );

    return resp.data;
  }

  public async start(
    request: VerificationRequest | PSD2Request,
  ): Promise<VerifyCheckResponse> {
    let url = '';
    if ('brand' in request) {
      url = `${this.config.apiHost}/verify/json`;
    } else {
      url = `${this.config.apiHost}/verify/psd2/json`;
    }

    let newRequest: VerificationRequest | PSD2Request;
    let mapping: any;
    if ('brand' in request) {
      newRequest = {
        number: request.number,
        brand: request.brand,
      };
      mapping = {
        sender_id: 'senderId',
        code_length: 'codeLength',
        pin_expiry: 'pinExpiry',
        lg: 'language',
        next_event_wait: 'nextEventWait',
        workflow_id: 'workflowId',
      };
    } else {
      newRequest = {
        number: request.number,
        payee: request.payee,
        amount: request.amount,
      };
      mapping = {
        code_length: 'codeLength',
        pin_expiry: 'pinExpiry',
        lg: 'language',
        next_event_wait: 'nextEventWait',
        workflow_id: 'workflowId',
      };
    }

    newRequest = remapObjects(mapping, newRequest, request);

    const resp = await this.sendPostRequest<VerifyCheckResponse>(
      url,
      newRequest,
    );
    return resp.data;
  }

  public async trigger(requestId: string) {
    const data = {
      request_id: requestId,
      cmd: Command.TRIGGER_NEXT_EVENT,
    };

    const resp = await this.sendPostRequest<VerifyControlResponse>(
      `${this.config.apiHost}/verify/control/json`,
      data,
    );
    return resp.data;
  }
}
