import { Client, AuthenticationType } from '@vonage/server-client';
import { FraudCheck, FraudCheckParameters, FraudScoreResponse } from './types/index.js';

/**
 * Number Insight v2 is designed to give fraud scores for Application Integrations.
 * This class represents the client for making fraud check requests.
 */
export class NumberInsightV2 extends Client {
  protected authType = AuthenticationType.BASIC;

  /**
   * Make a fraud check request with the provided parameters.
   *
   * @deprecated This service is deprecated and will be turned off.
   * @param {FraudCheckParameters} params - The parameters for the fraud check request.
   * @return {Promise<FraudScore>} - A Promise that resolves with the fraud score response.
   * @example
   * Check for fraud on a phone number.
   * ```ts
   * import { Insight } from '@vonage/number-insight-v2';
   * const score = await client.numberInsightV2.checkForFraud({
   *   type: 'phone',
   *   number: '447700900000',
   *   insights: [
   *     Insight.FRAUD_SCORE,
   *   ],
   * });
   * console.log(`Fraud score: ${score.riskScore}`);
   * ```
   *
   * @example
   * Check for SIM swap on a phone number.
   * ```ts
   * import { Insight } from '@vonage/number-insight-v2';
   * const score = await client.numberInsightV2.checkForFraud({
   *   type: 'phone',
   *   number: '447700900000',
   *   insights: [
   *     Insight.SIM_SWAP,
   *   ],
   * });
   * console.log(`SIM swap detected: ${score.simSwap ? 'Yes' : 'No'}`);
   * ```
   *
   * @example
   * Check both fraud score and SIM swap on a phone number.
   * ```ts
   * import { Insight } from '@vonage/number-insight-v2';
   * const score = await client.numberInsightV2.checkForFraud({
   *   type: 'phone',
   *   number: '447700900000',
   *   insights: [
   *     Insight.SIM_SWAP,
   *     Insight.FRAUD_SCORE,
   *   ],
   * });
   * console.log(`SIM swap detected: ${score.simSwap ? 'Yes' : 'No'}`);
   * console.log(`Fraud score: ${score.riskScore}`);
   * ```
   */
  async checkForFraud(params: FraudCheckParameters): Promise<FraudCheck> {
    const resp = await this.sendPostRequest<FraudScoreResponse>(
      `${this.config.apiHost}/v2/ni`,
      params,
    );

    return Client.transformers.camelCaseObjectKeys(
      resp?.data,
      true,
    ) as FraudCheck;
  }
}
