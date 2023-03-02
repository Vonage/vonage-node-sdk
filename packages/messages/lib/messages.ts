import { Client } from '@vonage/server-client';
import { MessageObject } from './interfaces/MessageObject';
import { MessagesSendResponse } from './types';

const stripUndefined = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      obj[key] = stripUndefined(obj[key]);
    } else if (!obj[key]) {
      delete obj[key];
    }
  }

  return obj;
};

export class Messages extends Client {
  /**
     * Handle various ways the Messages API handles auth
     * The Messages API handles both JWT (preferred) as well as Basic so we
     * cannot just set a local authType
     *
     * @param {any} request - Object containing request data
     */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async addAuthenticationToRequest(request: any) {
    if (this.auth.applicationId && this.auth.privateKey) {
      request.headers = Object.assign({}, request.headers, {
        Authorization: await this.auth.createBearerHeader(),
      });
    } else if (this.auth.signature) {
      request.data = Object.assign(
        request.data,
        await this.auth.createSignatureHash(request.data),
      );
    } else {
      request.data = Object.assign(
        request.data,
        await this.auth.getQueryParams(request.data),
      );
    }

    return request;
  }

  public async send(message: MessageObject) {
    const data = stripUndefined(message);
    const resp = await this.sendPostRequest<MessagesSendResponse>(
      `${this.config.apiHost}/v1/messages`,
      data,
    );
    return resp.data;
  }
}
