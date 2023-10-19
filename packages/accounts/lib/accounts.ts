import { AuthenticationType, Client } from '@vonage/server-client';
import {
  AccountCallbacks,
  AccountUpdateResponse,
  GetBalanceResponse,
  TopUpBalanceResponse,
} from './types';

/**
 * Class representing the Vonage Account API which enables users to manage
 * their Vonage API Account programmatically.
 * For more information, see: https://developer.nexmo.com/en/account/overview.
 * @extends {Client}
 */
export class Accounts extends Client {
  /**
   * @see {@link Client.authType}
   */
  public authType = AuthenticationType.QUERY_KEY_SECRET;

  /**
   * Retrieves the current balance of the Vonage API account.
   * @see {@link https://rest.nexmo.com/account/get-balance}
   * @return {Promise<GetBalanceResponse>} The current balance of the account in EUR.
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
