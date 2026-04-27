import { Client, AuthenticationType } from '@vonage/server-client';

/**
 * Represents a client for the Redact API that extends the Vonage Client.
 */
export class Redact extends Client {
  /**
     * The authentication type used for Redact API requests.
     */
  authType = AuthenticationType.BASIC;

  /**
     * Redacts a specific message using the provided parameters.
     *
     * @param {TransactionParams} params - Parameters for redacting a message.
     * @return {Promise<void>} A Promise that resolves when the redaction is successful.
     *
     * @throws {Error} If there is an error in processing the redaction request.
     */
  async redactMessage(params) {
    await this.sendPostRequest(
      `${this.config.apiHost}/v1/redact/transaction`,
      params
    );
  }
}
