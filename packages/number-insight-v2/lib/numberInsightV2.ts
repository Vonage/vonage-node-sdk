import { Client, AuthenticationType } from '@vonage/server-client';
import { FraudCheckParameters, FraudScore, FraudScoreResponse } from './types';

export class NumberInsightV2 extends Client {
  protected authType = AuthenticationType.JWT;

  async checkForFraud(params: FraudCheckParameters): Promise<FraudScore> {
    const resp = await this.sendPostRequest<FraudScoreResponse>(
      `${this.config.apiHost}/v2/ni`,
      params,
    );

    return Client.transformers.camelCaseObjectKeys(resp?.data, true);
  }
}
