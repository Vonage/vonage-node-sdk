import { Client, AuthenticationType } from '@vonage/server-client';
import { VetchOptions } from '@vonage/vetch';
import {
  MessageSuccess,
  SendMessageParams,
  MessageSuccessResponse, AnyChannel,
} from './types';
import debug from 'debug';

const log = debug('vonage:messages');

/**
 * A client for sending messages via the Vonage API.
 *
 * This class extends the `Client` class and provides methods for adding
 * authentication to requests and sending messages.
 *
 * @group Client
 */
export class Messages extends Client {
  /**
   * Adds authentication details to the given request based on the configured
   * authentication type. Handle various ways the Messages API handles auth
   * The Messages API handles both JWT (preferred) as well as Basic so we
   * cannot just set a local authType
   *
   * @param {VetchOptions} request - The request to which authentication should be added.
   * @return {Promise<VetchOptions>} A promise that resolves to the request with added authentication.
   */
  public async addAuthenticationToRequest(
    request: VetchOptions,
  ): Promise<VetchOptions> {
    log('Auth config', this.auth);
    this.authType = AuthenticationType.KEY_SECRET;

    if (this.auth.applicationId && this.auth.privateKey) {
      log('Adding JWT token to request');
      this.authType = AuthenticationType.JWT;
    }

    if (this.auth.signature) {
      log('Signing the request');
      this.authType = AuthenticationType.SIGNATURE;
    }

    return super.addAuthenticationToRequest(request);
  }

  /**
   * Sends a message using the Vonage API.
   *
   * @param {SendMessageParams} message - The message to be sent.
   * @return {Promise<MessageSuccess>} A promise that resolves to a success response with a message UUID.
   */
  public async send(
    message: SendMessageParams | AnyChannel,
  ): Promise<MessageSuccess> {
    const resp = await this.sendPostRequest<MessageSuccessResponse>(
      `${this.config.apiHost}/v1/messages`,
      JSON.parse(
        JSON.stringify(
          Client.transformers.snakeCaseObjectKeys(message, true),
        ),
      ),
    );

    return {
      messageUUID: resp.data.message_uuid,
    };
  }
}
