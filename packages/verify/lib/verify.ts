import { Client } from '@vonage/server-client';
import { Command } from './enums';
import {
  VerifyControl,
  VerifyControlError,
  VerifyControlErrorResponse,
  VerifyControlResponse,
  VerifyCheckError,
  VerifyCheck,
  VerifyCheckResponse,
  VerifyRequestResponse,
  VerifySearchResponse,
  VerifySearch,
  VerifySearchError,
  VerifyRequestErrorResponse,
  VerifyError,
  VerifyRequest,
  VerificationParameters,
  PSD2Parameters,
} from './types';
import omit from 'lodash.omit';

export class Verify extends Client {
  public async sendControl(
    command: Command,
    requestId: string,
  ): Promise<VerifyControl | VerifyControlError> {
    const data = {
      request_id: requestId,
      cmd: Command.CANCEL,
    };

    // eslint-disable-next-line max-len
    const resp = await this.sendPostRequest<
            VerifyControlResponse | VerifyControlErrorResponse
        >(`${this.config.apiHost}/verify/control/json`, data);
    return Client.transformers.camelCaseObjectKeys(
      resp.data,
      true,
      true,
    ) as VerifyControl | VerifyControlError;
  }

  public async cancel(
    requestId: string,
  ): Promise<VerifyControl | VerifyControlError> {
    return this.sendControl(Command.CANCEL, requestId);
  }

  public async trigger(
    requestId: string,
  ): Promise<VerifyControl | VerifyControlError> {
    return this.sendControl(Command.TRIGGER_NEXT_EVENT, requestId);
  }

  public async check(
    requestId: string,
    code: string,
  ): Promise<VerifyCheck | VerifyCheckError> {
    // eslint-disable-next-line max-len
    const resp = await this.sendPostRequest<
            VerifyRequestResponse | VerifyRequestErrorResponse
        >(`${this.config.apiHost}/verify/check/json`, {
          request_id: requestId,
          code: code,
        });

    return Client.transformers.camelCaseObjectKeys(
      resp.data,
      true,
      true,
    ) as VerifyCheck | VerifyCheckError;
  }

  public async search(
    requestId: string,
  ): Promise<VerifySearch | VerifySearchError> {
    const resp = await this.sendGetRequest<VerifySearchResponse>(
      `${this.config.apiHost}/verify/search/json`,
      { request_id: requestId },
    );

    return Client.transformers.camelCaseObjectKeys(
      resp.data,
      true,
      true,
    ) as VerifySearch | VerifySearchError;
  }

  public async start(
    request: VerificationParameters | PSD2Parameters,
  ): Promise<VerifyError | VerifyRequest> {
    const url
            = 'brand' in request
              ? `${this.config.apiHost}/verify/json`
              : `${this.config.apiHost}/verify/psd2/json`;

    const resp = await this.sendPostRequest<VerifyCheckResponse>(
      url,
      Client.transformers.snakeCaseObjectKeys(omit(request, ['language'])),
    );

    return Client.transformers.camelCaseObjectKeys(
      resp.data,
      true,
      true,
    ) as VerifyError | VerifyRequest;
  }
}
