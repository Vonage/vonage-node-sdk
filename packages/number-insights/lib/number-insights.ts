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
 * Class for performing number insights operations using the Vonage (formerly Nexmo) API.
 */
export class NumberInsights extends Client {
  /**
   * Perform an advanced number lookup operation.
   * @param {string} phoneNumber - The phone number to perform the lookup for.
   * @param {AdvancedLookupOptions} options - Additional options for the lookup.
   * @return {Promise<AdvancedResponse>} A promise that resolves to the advanced lookup response.
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
   * @param {string} phoneNumber - The phone number to perform the lookup for.
   * @param {string} callback - The callback URL for receiving the async lookup response.
   * @param {StandardLookupOptions} options - Additional options for the lookup.
   * @return {Promise<AsyncAdvancedResponse>} A promise that resolves to the async advanced lookup response.
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
   * @param {string} phoneNumber - The phone number to perform the lookup for.
   * @param {BasicLookupOptions} options - Additional options for the lookup.
   * @return {Promise<BasicResponse>} A promise that resolves to the basic lookup response.
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
   * @param {string} phoneNumber - The phone number to perform the lookup for.
   * @param {StandardLookupOptions} options - Additional options for the lookup.
   * @return {Promise<StandardResponse>} A promise that resolves to the standard lookup response.
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
