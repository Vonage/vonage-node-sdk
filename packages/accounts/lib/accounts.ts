import { AuthenticationType, Client } from '@vonage/server-client';
import {
  AccountCallbacks,
  AccountUpdateResponse,
  GetBalanceResponse,
  TopUpBalanceResponse,
} from './types/index.js';

/**
 * Client class to interact with the Account API which enables users to manage
 * their Vonage API Account programmatically.
 * @see {@link https://developer.nexmo.com/en/account/overview}
 *
 * @example
 * Create a standalone Account client
 *
 * ```ts
 * import { Accounts } from '@vonage/account';
 *
 * const accountClient = new Accounts({
 *  apiKey: VONAGE_API_KEY,
 *  apiSecret: VONAGE_API_SECRET
 * });
 * ```
 *
 * @example
 * Create an Account client from the Vonage client
 *
 * ```ts
 * import { Vonage } from '@vonage/server-client';
 *
 * const vonage = new Vonage({
 *   apiKey: VONAGE_API_KEY,
 *   apiSecret: VONAGE_API_SECRET
 * });
 *
 * const accountClient = vonage.account;
 * ```
 */
export class Accounts extends Client {
  /**
   * @see {@link Client.authType}
   */
  protected authType = AuthenticationType.BASIC;

  /**
   * Retrieves the current balance of the Vonage API account.
   * @see {@link https://rest.nexmo.com/account/get-balance}
   * @return {Promise<GetBalanceResponse>} The current balance of the account in EUR.
   *
   * @example
   *
   * const balance = await accontClient.getBalance();
   *
   * console.log(`The current account balance is ${balance.value} ${balance.currency}`);
   * console.log(`Auto-reload is ${balance.autoReload ? 'enabled' : 'disabled'}`);
   */
  public async getBalance(): Promise<GetBalanceResponse> {
    const response = await this.sendGetRequest<GetBalanceResponse>(
      `${this.config.restHost}/account/get-balance`,
    );
    return response.data;
  }

  /**
   * Tops up the account balance when auto-reload is enabled.
   * The top-up amount corresponds to the amount added when auto-reload was enabled.
   * @see {@link https://rest.nexmo.com/account/top-up}
   * @param {string} trx - The transaction reference for the balance addition and auto-reload activation.
   * @return {Promise<TopUpBalanceResponse>} Response indicating the success of the operation.
   *
   * @example
   *
   * const response = await accountClient.topUpBalance('00X123456Y7890123Z');
   *
   * if (response['error-code'] === '200') {
   *   console.log(`The account balance has been topped up`);
   * } else {
   *   console.log(`The account balance could not be topped up`);
   * }
   *
   */
  public async topUpBalance(trx: string): Promise<TopUpBalanceResponse> {
    const response = await this.sendFormSubmitRequest<TopUpBalanceResponse>(
      `${this.config.restHost}/account/top-up`,
      { trx },
    );
    return response.data;
  }

  /**
   * Updates the default webhook URLs associated with the account for:
   * - Inbound SMS messages
   * - Delivery receipts
   * @see {@link https://rest.nexmo.com/account/settings}
   * @param {AccountCallbacks} callbacks - The new callback URLs for the account.
   * @return {Promise<AccountUpdateResponse>} Details of the updated or current settings.
   *
   * @example
   *
   * const callbacks = {
   *   moCallBackUrl: 'https://example.com/webhooks/inbound-sms',
   *   drCallBackUrl: 'https://example.com/webhooks/delivery-receipts',
   * };
   *
   * const response = await accountClient.updateAccountCallbacks(callbacks);
   *
   * for (const [key, value] of Object.entries(response)) {
   *   console.log(`New ${key}: ${value}`);
   * }
   */
  public async updateAccountCallbacks(
    callbacks: AccountCallbacks,
  ): Promise<AccountUpdateResponse> {
    const response = await this.sendFormSubmitRequest<AccountUpdateResponse>(
      `${this.config.restHost}/account/settings`,
      callbacks as Record<string, string>,
    );
    return response.data;
  }
}
