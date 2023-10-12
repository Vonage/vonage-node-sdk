import { Client } from '@vonage/server-client';
import {
  AdvancedLookupOptions,
  BasicLookupOptions,
  AdvancedResponse,
  AsyncAdvancedResponse,
  BasicResponse,
  StandardResponse,
  StandardLookupOptions,
} from './types';

/**
 * Client for the Vonage Number Insights API.
 *
 * @example
 * Create a standalone Number Insight client
 *
 * ```ts
 * import { NumberInsights } from '@vonage/numberInsight';
 *
 * const numberInsightClient = new NumberInsights({
 *  apiKey: VONAGE_API_KEY,
 *  apiSecret: VONAGE_API_SECRET
 * });
 * ```
 *
 * @example
 * Create an Number Insight client from the Vonage client
 *
 * ```ts
 * import { Vonage } from '@vonage/server-client';
 *
 * const vonage = new Vonage({
 *   apiKey: VONAGE_API_KEY,
 *   apiSecret: VONAGE_API_SECRET
 * });
 *
 * const numberInsightClient = vonage.numberInsight;
 * ```
 */
export class NumberInsights extends Client {
  /**
   * Perform an advanced number lookup operation.
   *
   * @param {string} phoneNumber - The phone number to perform the lookup for.
   * @param {AdvancedLookupOptions} options - Additional options for the lookup.
   * @return {Promise<AdvancedResponse>} A promise that resolves to the advanced lookup response.
   * @example
   * ```ts
   * const lookup = await numberInsightsClient.advancedLookup('15555551212');
   * console.log(`Ths number is ${lookup.valid_number}`);
   * ```
   */
  public async advancedLookup(
    phoneNumber: string,
    options?: AdvancedLookupOptions,
  ): Promise<AdvancedResponse> {
    const params = { number: phoneNumber, ...options };
    const resp = await this.sendGetRequest<AdvancedResponse>(
      `${this.config.apiHost}/ni/advanced/json`,
      params,
    );
    return resp.data;
  }

  /**
   * Perform an asynchronous advanced number lookup operation.
   *
   * @param {string} phoneNumber - The phone number to perform the lookup for.
   * @param {string} callback - The callback URL for receiving the async lookup response.
   * @param {StandardLookupOptions} options - Additional options for the lookup.
   * @return {Promise<AsyncAdvancedResponse>} A promise that resolves to the async advanced lookup response.
   *
   * @example
   * ```ts
   * const lookup = await numberInsightsClient.asyncAdvancedLookup(
   *   '15555551212',
   *   'https://example.com/number-insights',
   * );
   * console.log(`The request ID is ${lookup.request_id}`);
   * ```
   *
   * @example
   * Lookup with the CNAME option:
   * ```ts
   * const lookup = await numberInsightsClient.asyncAdvancedLookup(
   *   '15555551212',
   *   'https://example.com/number-insights',
   *   { cname: true },
   * );
   * console.log(`The request ID is ${lookup.request_id}`);
   * ```
   */
  public async asyncAdvancedLookup(
    phoneNumber: string,
    callback: string,
    options: StandardLookupOptions,
  ): Promise<AsyncAdvancedResponse> {
    const params = { number: phoneNumber, callback, ...options };
    const resp = await this.sendGetRequest<AsyncAdvancedResponse>(
      `${this.config.apiHost}/ni/advanced/async/json`,
      params,
    );
    return resp.data;
  }

  /**
   * Perform a basic number lookup operation.
   *
   * @param {string} phoneNumber - The phone number to perform the lookup for.
   * @param {BasicLookupOptions} options - Additional options for the lookup.
   * @return {Promise<BasicResponse>} A promise that resolves to the basic lookup response.
   *
   * @example
   * ```ts
   * const lookup = await numberInsightsClient.basicLookup(
   *   '15555551212',
   * );
   * console.log(`The request ID is ${lookup.request_id}`);
   * ```
   *
   * @example
   * Lookup with the country option:
   * ```ts
   * const lookup = await numberInsightsClient.basicLookup(
   *   '15555551212',
   *   { country: 'US' },
   * );
   * console.log(`The request ID is ${lookup.request_id}`);
   * ```
   */
  public async basicLookup(
    phoneNumber: string,
    options?: BasicLookupOptions,
  ): Promise<BasicResponse> {
    const params = { number: phoneNumber, ...options };
    const resp = await this.sendGetRequest<BasicResponse>(
      `${this.config.apiHost}/ni/basic/json`,
      params,
    );
    return resp.data;
  }

  /**
   * Perform a standard number lookup operation.
   *
   * @param {string} phoneNumber - The phone number to perform the lookup for.
   * @param {StandardLookupOptions} options - Additional options for the lookup.
   * @return {Promise<StandardResponse>} A promise that resolves to the standard lookup response.
   *
   * @example
   * ```ts
   * const lookup = await numberInsightsClient.standardLookup(
   *   '15555551212',
   * );
   * console.log(`The request ID is ${lookup.request_id}`);
   * ```
   *
   * @example
   * Lookup with the cname option:
   * ```ts
   * const lookup = await numberInsightsClient.standardLookup(
   *   '15555551212',
   *   { cname: true },
   * );
   * console.log(`The request ID is ${lookup.request_id}`);
   * ```
   */
  public async standardLookup(
    phoneNumber: string,
    options?: StandardLookupOptions,
  ): Promise<StandardResponse> {
    const params = { number: phoneNumber, ...options };
    const resp = await this.sendGetRequest<StandardResponse>(
      `${this.config.apiHost}/ni/standard/json`,
      params,
    );
    return resp.data;
  }
}
