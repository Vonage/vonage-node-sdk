import { AuthenticationType, Client } from '@vonage/server-client';
import {
  VerificationRequest,
  VerificationRequestParams,
  VerificationResponse,
} from './types';

export class Verify2 extends Client {
  protected authType = AuthenticationType.JWT;

  public async newRequest(
    params: VerificationRequestParams,
  ): Promise<VerificationRequest> {
    const resp = await this.sendPostRequest<VerificationResponse>(
      `${this.config.apiHost}/v2/verify`,
      Client.transformers.snakeCaseObjectKeys(params, true),
    );

    return {
      requestId: resp.data.request_id,
    };
  }

  public async checkCode(requestId: string, code: string): Promise<true> {
    await this.sendPostRequest(
      `${this.config.apiHost}/v2/verify/${requestId}`,
      {
        code: code,
      },
    );

    return true;
  }
}
