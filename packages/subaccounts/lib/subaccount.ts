import { AuthenticationType, Client } from '@vonage/server-client';
import {
  SubAccount,
  SubAccountResponsePage,
  SubAccountResponse,
  Account,
  SubAccountCreateParameters,
  SubAccountModifyParameters,
  CreditTransferListParameters,
  CreditTransfer,
  CreditTransferResponsePage,
  CreditTransferResponse,
  CreditTransferParameters,
  BalanceTransferListParameters,
  BalanceTransfer,
  BalanceTransferPageResponse,
  BalanceTransferResponse,
  BalanceTransferParameters,
  NumberTransfer,
} from './types';

const apiToSubAccount = (subAccount: SubAccountResponse): SubAccount =>
  Client.transformers.camelCaseObjectKeys(subAccount, true) as SubAccount;

/**
 * Represents a client for interacting with Vonage Subaccounts API. This class provides methods
 * for managing subaccounts, credit transfers, balance transfers, and number transfers.
 */
export class SubAccounts extends Client {
  protected authType = AuthenticationType.BASIC;

  /**
   * Retrieves a page of subaccounts associated with the primary account.
   *
   * @return {Promise<SubAccountResponsePage>} A promise that resolves to a page of subaccount information.
   */
  async getSubAccountPage(): Promise<SubAccountResponsePage> {
    const resp = await this.sendGetRequest<SubAccountResponsePage>(
      `${this.config.apiHost}/accounts/${this.auth.apiKey}/subaccounts`,
    );

    return resp.data;
  }

  /**
   * Retrieves a list of subaccounts associated with the primary account.
   *
   * @return {Promise<Array<SubAccount>>} A promise that resolves to an array of subaccount information.
   */
  async listSubAccounts(): Promise<Array<SubAccount>> {
    const resp = await this.getSubAccountPage();
    return resp._embedded.subaccounts.map(apiToSubAccount);
  }

  /**
   * Retrieves information about the primary account associated with the subaccounts.
   *
   * @return {Promise<Account>} A promise that resolves to information about the primary account.
   */
  async getPrimaryAccount(): Promise<Account> {
    const resp = await this.getSubAccountPage();
    return Client.transformers.camelCaseObjectKeys(
      resp._embedded.primary_account,
    ) as Account;
  }

  /**
   * Creates a new subaccount under the primary account.
   *
   * @param {SubAccountCreateParameters} subAccount - The parameters for creating the subaccount.
   * @return {Promise<SubAccount>} A promise that resolves to the created subaccount information.
   */
  async createSubAccount(
    subAccount: SubAccountCreateParameters,
  ): Promise<SubAccount> {
    const resp = await this.sendPostRequest<SubAccountResponse>(
      `${this.config.apiHost}/accounts/${this.auth.apiKey}/subaccounts`,
      Client.transformers.snakeCaseObjectKeys(subAccount),
    );

    return apiToSubAccount(resp.data);
  }

  /**
   * Retrieves information about a specific subaccount by its ID.
   *
   * @param {string} subAccountId - The ID of the subaccount to retrieve.
   * @return {Promise<SubAccount>} A promise that resolves to the subaccount information.
   */
  async getSubAccount(subAccountId: string): Promise<SubAccount> {
    const resp = await this.sendGetRequest<SubAccountResponse>(
      `${this.config.apiHost}/accounts/${this.auth.apiKey}/subaccounts/${subAccountId}`,
    );

    return apiToSubAccount(resp.data);
  }

  /**
   * Modifies one or more properties of a specific subaccount.
   *
   * @param {string} subAccountId - The ID of the subaccount to modify.
   * @param {SubAccountModifyParameters} params - The parameters for modifying the subaccount.
   * @return {Promise<SubAccount>} A promise that resolves to the modified subaccount information.
   */
  async updateSubAccount(
    subAccountId: string,
    params: SubAccountModifyParameters,
  ): Promise<SubAccount> {
    const resp = await this.sendPatchRequest<SubAccountResponse>(
      `${this.config.apiHost}/accounts/${this.auth.apiKey}/subaccounts/${subAccountId}`,
      Client.transformers.snakeCaseObjectKeys(params),
    );

    return apiToSubAccount(resp.data);
  }

  /**
   * Retrieves a list of credit transfers that have taken place for a primary account within a specified time period.
   *
   * @param {CreditTransferListParameters} params - The parameters for filtering the list of credit transfers.
   * @return {Promise<Array<CreditTransfer>>} A promise that resolves to an array of credit transfer information.
   */
  async listCreditTransfers(
    params: CreditTransferListParameters,
  ): Promise<Array<CreditTransfer>> {
    const resp = await this.sendGetRequest<CreditTransferResponsePage>(
      `${this.config.apiHost}/accounts/${this.auth.apiKey}/credit-transfers`,
      Client.transformers.snakeCaseObjectKeys(params),
    );

    return resp.data._embedded.credit_transfers.map((transfer) =>
      Client.transformers.camelCaseObjectKeys(transfer) as CreditTransfer,
    );
  }

  /**
   * Transfers credit limit between a primary account and one of its subaccounts.
   *
   * @param {CreditTransferParameters} params - The parameters for transferring credit.
   * @return {Promise<CreditTransfer>} A promise that resolves to information about the credit transfer.
   */
  async transferCredit(
    params: CreditTransferParameters,
  ): Promise<CreditTransfer> {
    const resp = await this.sendPostRequest<CreditTransferResponse>(
      `${this.config.apiHost}/accounts/${this.auth.apiKey}/credit-transfers`,
      Client.transformers.snakeCaseObjectKeys(params),
    );

    return Client.transformers.camelCaseObjectKeys(resp.data) as CreditTransfer;
  }

  /**
   * Retrieves a list of balance transfers that have taken place for a primary account within a specified time period.
   *
   * @param {BalanceTransferListParameters} params - The parameters for filtering balance transfers.
   * @return {Promise<Array<BalanceTransfer>>} A promise that resolves to an array of balance transfer information.
   */
  async listBalanceTransfers(
    params: BalanceTransferListParameters,
  ): Promise<Array<BalanceTransfer>> {
    const resp = await this.sendGetRequest<BalanceTransferPageResponse>(
      `${this.config.apiHost}/accounts/${this.auth.apiKey}/balance-transfers`,
      Client.transformers.snakeCaseObjectKeys(params),
    );

    return resp.data._embedded.balance_transfers.map((transfer) =>
      Client.transformers.camelCaseObjectKeys(transfer) as BalanceTransfer,
    );
  }

  /**
   * Transfers balance between a primary account and one of its subaccounts.
   *
   * @param {BalanceTransferParameters} params - The parameters for the balance transfer.
   * @return {Promise<BalanceTransfer>} A promise that resolves to the details of the balance transfer.
   */
  async transferBalance(
    params: BalanceTransferParameters,
  ): Promise<BalanceTransfer> {
    const resp = await this.sendPostRequest<BalanceTransferResponse>(
      `${this.config.apiHost}/accounts/${this.auth.apiKey}/balance-transfers`,
      Client.transformers.snakeCaseObjectKeys(params),
    );

    return Client.transformers.camelCaseObjectKeys(
      resp.data,
    ) as BalanceTransfer;
  }

  /**
   * Transfers a phone number from one account to another.
   *
   * @param {NumberTransfer} params - The parameters for the number transfer.
   * @return {Promise<NumberTransfer>} A promise that resolves to the details of the number transfer.
   */
  async transferNumber(params: NumberTransfer): Promise<NumberTransfer> {
    const resp = await this.sendPostRequest<NumberTransfer>(
      `${this.config.apiHost}/accounts/${this.auth.apiKey}/transfer-number`,
      Client.transformers.snakeCaseObjectKeys(params),
    );

    return resp.data;
  }
}
