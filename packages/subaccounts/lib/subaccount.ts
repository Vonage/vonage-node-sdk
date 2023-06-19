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
  BalanceTransferResponsePage,
  BalanceTransferResponse,
  BalanceTransferParameters,
  NumberTransfer,
} from './types';

const apiToSubAccount = (subAccount: SubAccountResponse): SubAccount =>
  Client.transformers.camelCaseObjectKeys(subAccount, true);

export class SubAccounts extends Client {
  protected authType = AuthenticationType.BASIC;

  async getSubAccountPage(): Promise<SubAccountResponsePage> {
    const resp = await this.sendGetRequest<SubAccountResponsePage>(
      `${this.config.apiHost}/accounts/${this.auth.apiKey}/subaccounts`,
    );

    return resp.data;
  }

  async listSubAccounts(): Promise<Array<SubAccount>> {
    const resp = await this.getSubAccountPage();
    return resp._embedded.subaccounts.map(apiToSubAccount);
  }

  async getPrimaryAccount(): Promise<Account> {
    const resp = await this.getSubAccountPage();
    return Client.transformers.camelCaseObjectKeys(
      resp._embedded.primary_account,
    );
  }

  async createSubAccount(
    subAccount: SubAccountCreateParameters,
  ): Promise<SubAccount> {
    const resp = await this.sendPostRequest<SubAccountResponse>(
      `${this.config.apiHost}/accounts/${this.auth.apiKey}/subaccounts`,
      Client.transformers.snakeCaseObjectKeys(subAccount),
    );

    return apiToSubAccount(resp.data);
  }

  async getSubAccount(subAccountId: string): Promise<SubAccount> {
    const resp = await this.sendGetRequest<SubAccountResponse>(
      `${this.config.apiHost}/accounts/${this.auth.apiKey}/subaccounts/${subAccountId}`,
    );

    return apiToSubAccount(resp.data);
  }

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

  async listCreditTransfers(
    params: CreditTransferListParameters,
  ): Promise<Array<CreditTransfer>> {
    const resp = await this.sendGetRequest<CreditTransferResponsePage>(
      `${this.config.apiHost}/accounts/${this.auth.apiKey}/credit-transfers`,
      Client.transformers.snakeCaseObjectKeys(params),
    );

    return resp.data._embedded.credit_transfers.map((transfer) =>
      Client.transformers.camelCaseObjectKeys(transfer),
    );
  }

  async transferCredit(
    params: CreditTransferParameters,
  ): Promise<CreditTransfer> {
    const resp = await this.sendPostRequest<CreditTransferResponse>(
      `${this.config.apiHost}/accounts/${this.auth.apiKey}/credit-transfers`,
      Client.transformers.snakeCaseObjectKeys(params),
    );

    return Client.transformers.camelCaseObjectKeys(resp.data);
  }

  async listBalanceTransfers(
    params: BalanceTransferListParameters,
  ): Promise<Array<BalanceTransfer>> {
    const resp = await this.sendGetRequest<BalanceTransferResponsePage>(
      `${this.config.apiHost}/accounts/${this.auth.apiKey}/balance-transfers`,
      Client.transformers.snakeCaseObjectKeys(params),
    );

    return resp.data._embedded.balance_transfers.map((transfer) =>
      Client.transformers.camelCaseObjectKeys(transfer),
    );
  }

  async transferBalance(
    params: BalanceTransferParameters,
  ): Promise<BalanceTransfer> {
    const resp = await this.sendPostRequest<BalanceTransferResponse>(
      `${this.config.apiHost}/accounts/${this.auth.apiKey}/balance-transfers`,
      Client.transformers.snakeCaseObjectKeys(params),
    );

    return Client.transformers.camelCaseObjectKeys(resp.data);
  }

  async transferNumber(params: NumberTransfer): Promise<NumberTransfer> {
    const resp = await this.sendPostRequest<NumberTransfer>(
      `${this.config.apiHost}/accounts/${this.auth.apiKey}/transfer-number`,
      Client.transformers.snakeCaseObjectKeys(params),
    );

    return resp.data;
  }
}
