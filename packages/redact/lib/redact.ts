import { Client, AuthenticationType } from '@vonage/server-client';
import { TransactionParams } from './types/index';

export class Redact extends Client {
  protected authType = AuthenticationType.BASIC;

  public async redactMessage(params: TransactionParams): Promise<void> {
    await this.sendPostRequest(
      `${this.config.apiHost}/v1/redact/transaction`,
      params,
    );
  }
}
