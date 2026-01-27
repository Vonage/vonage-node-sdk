import { Client, AuthenticationType } from '@vonage/server-client';
import {
  IdentityInsightsType,
  IdentityInsightsParameters,
  IdentityInsightsResponse,
} from './types/index.js';

/**
 * The Identity Insights API allows clients to request real-time information related
 * to a phone number.
 * This class represents the client for retrieving phone insights.
 */
export class IdentityInsights extends Client {
  /**
   * The authentication type used for this client (JWT).
   */
  protected authType = AuthenticationType.JWT;

  /**
   * Retrieve Identity Insights from a given phone number
   *
   * @param {IdentityInsightsParameters} params - The parameters for the
   *  insights request.
   * @return {IdentityInsightsType} A `IdentityInsightsType` containing the insights
   * requested.
   */
  async getIdentityInsights(
    params: IdentityInsightsParameters
  ): Promise<IdentityInsightsType> {

    const resp = await this.sendPostRequest<IdentityInsightsResponse>(
      `${this.config.identityInsightsHost}/identity-insights/v1/requests`,
       Client.transformers.snakeCaseObjectKeys(params, true),
    );

    return Client.transformers.camelCaseObjectKeys(
      resp?.data,
      true
    ) as IdentityInsightsType;
  }
}
