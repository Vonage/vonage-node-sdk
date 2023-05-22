import { AuthenticationType, Client } from '@vonage/server-client';
import {
  Request,
  VerificationRequestParams,
  VerificationResponse,
  CheckRequestResponse,
} from './types';

export class Verify2 extends Client {
  protected authType = AuthenticationType.JWT;

  public async newRequest(
    params: VerificationRequestParams,
  ): Promise<Request> {
    const resp = await this.sendPostRequest<VerificationResponse>(
      `${this.config.apiHost}/v2/verify`,
      Client.transformers.snakeCaseObjectKeys(params, true),
    );

    return {
      requestId: resp.data.request_id,
    };
  }

  public async checkCode(requestId: string, code: string): Promise<string> {
    const resp = await this.sendPostRequest<CheckRequestResponse>(
      `${this.config.apiHost}/v2/verify/${requestId}`,
      {
        code: code,
      },
    );

    return resp.data.status;
  }

  public async cancel(requestId: string): Promise<boolean> {
    try {
      await this.sendDeleteRequest(
        `${this.config.apiHost}/v2/verify/${requestId}`,
      );
      return true;
    } catch (error) {
      return false;
    }
  }
}
