import { Client, AuthenticationType } from '@vonage/server-client';
import { VetchOptions } from '@vonage/vetch';
import {
  MessageSuccess,
  SendMessageParams,
  MessageSuccessResponse,
  AnyChannel,
} from './types';
import debug from 'debug';

const log = debug('vonage:messages');

/**
 * Client class to interact with the Messages API which enables users to manage
 * send messages through various channels programmatically.
 * @see {@link https://developer.nexmo.com/en/messages/overview}

 * @group Client
 *
 * @example
 * Create a standalone Messages client
 *
 * ```ts
 * import { Messages } from '@vonage/messages';
 *
 * const messagesClient = new Messages({
 *  apiKey: VONAGE_API_KEY,
 *  apiSecret: VONAGE_API_SECRET
 * });
 * ```
 *
 * @example
 * Create an Messages client from the Vonage client
 *
 * ```ts
 * import { Vonage } from '@vonage/server-client';
 *
 * const vonage = new Vonage({
 *   apiKey: VONAGE_API_KEY,
 *   apiSecret: VONAGE_API_SECRET
 * });
 *
 * const messagesClient = vonage.messages;
 * ```
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
    const data = Client.transformers.snakeCaseObjectKeys(message, true);

    if ('custom' in message) {
      data.custom = message.custom;
    }

    const resp = await this.sendPostRequest<MessageSuccessResponse>(
      `${this.config.apiHost}/v1/messages`,
      data,
    );

    return {
      messageUUID: resp.data.message_uuid,
    };
  }
}
