import { Client } from '@vonage/server-client';
import { MessageSuccess } from './interfaces';
import { SendMessageParams, MessageSuccessResponse } from './types';
import debug from 'debug';

const log = debug('vonage:messages');

type VonageRequest = {
    data: { [key: string]: unknown }
    headers: { Authorization: string }
}

export class Messages extends Client {
  /**
     * Handle various ways the Messages API handles auth
     * The Messages API handles both JWT (preferred) as well as Basic so we
     * cannot just set a local authType
     *
     * @param {any} request - Object containing request data
     */
  public async addAuthenticationToRequest(
    request: VonageRequest,
  ): Promise<VonageRequest & unknown> {
    log('Auth config', this.auth);
    if (this.auth.applicationId && this.auth.privateKey) {
      log('Adding JWT token to request');
      request.headers.Authorization = await this.auth.createBearerHeader();
      return request;
    }

    if (this.auth.signature) {
      log('Signing the request');
      request.data = {
        ...request.data,
        ...(await this.auth.createSignatureHash(request.data)),
      };
      return request;
    }

    log('Adding query parameters to request');
    request.data = {
      ...request.data,
      ...(await this.auth.getQueryParams(request?.data)),
    };
    return request;
  }

  public async send(message: SendMessageParams): Promise<MessageSuccess> {
    const resp = await this.sendPostRequest<MessageSuccessResponse>(
      `${this.config.apiHost}/v1/messages`,
      JSON.parse(
        JSON.stringify(
          Client.transformers.snakeCaseObjectKeys(message, true),
        ),
      ),
    );

    return {
      messageUUID: resp.data?.message_uuid,
    };
  }
}
