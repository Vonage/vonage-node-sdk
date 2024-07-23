import { AuthenticationType, Client } from '@vonage/server-client';
import {
  Request,
  VerificationRequestParams,
  VerificationResponse,
  CheckRequestResponse,
} from './types';

/**
 * A class for interacting with the Vonage Verify API (Version 2).
 */
export class Verify2 extends Client {
  /**
   * The authentication type used for this client (JWT).
   */
  protected authType = AuthenticationType.JWT;

  /**
   * Creates a new verification request.
   *
   * @param {VerificationRequestParams} params - The parameters for the
   *  verification request.
   * @return {Request} A `Request` object containing the request ID.
   */
  public async newRequest(params: VerificationRequestParams): Promise<Request> {
    const resp = await this.sendPostRequest<VerificationResponse>(
      `${this.config.apiHost}/v2/verify`,
      Client.transformers.snakeCaseObjectKeys(params, true),
    );

    return {
      requestId: resp.data.request_id,
      checkUrl: resp.data.check_url,
    };
  }

  /**
   * Checks a verification code against a verification request.
   * @param {string} requestId - The ID of the verification request.
   * @param {string} code - The verification code to check.
   * @return {string} The status of the verification code check.
   */
  public async checkCode(requestId: string, code: string): Promise<string> {
    const resp = await this.sendPostRequest<CheckRequestResponse>(
      `${this.config.apiHost}/v2/verify/${requestId}`,
      {
        code: code,
      },
    );

    return resp.data.status;
  }

  /**
   * Cancels a verification request.
   * @param {string} requestId - The ID of the verification request to cancel.
   * @return {boolean} `true` if the cancellation was successful.
   */
  public async cancel(requestId: string): Promise<boolean> {
    try {
      await this.sendDeleteRequest(
        `${this.config.apiHost}/v2/verify/${requestId}`,
      );
      return true;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      return false;
    }
  }
}
