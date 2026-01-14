import { AuthenticationType, Client } from '@vonage/server-client';
import { Feature, SearchPattern } from './enums/index.js';
import {
  NumbersAvailableList,
  NumbersOwnedList,
  NumbersEmptyResponse,
  NumbersParams,
  NumbersOwnedFilter,
  NumbersQuerySearchFilter,
  NumbersSearchSimple,
  NumbersSearchFilter,
  NumbersUpdateParams,
} from './types/index.js';

const { omit } = Client.transformers;

const buildSearch = ({
  endsWith,
  startsWith,
  contains,
  searchPattern,
  pattern,
  country,
}: NumbersSearchFilter & NumbersSearchSimple):
  | NumbersQuerySearchFilter
  | Record<string, never> => {
  searchPattern = searchPattern ?? SearchPattern.CONTAINS;

  if (pattern) {
    return {
      search_pattern: searchPattern,
      pattern: pattern,
      country: country,
    };
  }

  // order of precedent contains, endsWith, startsWith
  if (contains) {
    return {
      search_pattern: SearchPattern.CONTAINS,
      pattern: contains,
      country: country,
    };
  }

  if (endsWith) {
    return {
      search_pattern: SearchPattern.ENDS_WITH,
      pattern: endsWith,
      country: country,
    };
  }

  if (startsWith) {
    return {
      search_pattern: SearchPattern.START_WITH,
      pattern: startsWith,
      country: country,
    };
  }

  return {};
};

const sortFeatures = (features: Feature[]): string => {
  // API expects these as a CSV in a specific order
  if (features.length > 4) {
    throw new Error('Invalid number of features request');
  }

  if (features.length === 1) {
    return features.join();
  }

  if (features.length === 3) {
    return [Feature.SMS, Feature.MMS, Feature.VOICE].join(',');
  }

  const newOrder = [];
  if (features.includes(Feature.SMS)) {
    newOrder.push(Feature.SMS);
  }

  if (features.includes(Feature.VOICE)) {
    newOrder.push(Feature.VOICE);
  }

  if (features.includes(Feature.MMS)) {
    newOrder.push(Feature.MMS);
  }

  return newOrder.join(',');
};

/**
 * Client for buying, canceling, and searching for phone numbers.
 *
 * @example
 * Create a standalone Numbers client
 *
 * ```ts
 * import { Numbers } from '@vonage/numbers';
 *
 * const numbersClient = new Numbers({
 *  apiKey: VONAGE_API_KEY,
 *  apiSecret: VONAGE_API_SECRET
 * });
 * ```
 *
 * @example
 * Create an Numbers client from the Vonage client
 *
 * ```ts
 * import { Vonage } from '@vonage/server-client';
 *
 * const vonage = new Vonage({
 *   apiKey: VONAGE_API_KEY,
 *   apiSecret: VONAGE_API_SECRET
 * });
 *
 * const numbersClient = vonage.numbers;
 * ```
 */
export class Numbers extends Client {
  /**
   * @see {@link Client.authType}
   */
  protected authType = AuthenticationType.BASIC;


  /**
   * Buy a phone number.
   *
   * @param {NumbersParams} params - The parameters for buying a number.
   * @return {Promise<NumbersEmptyResponse>} A promise that resolves to an empty response or an error response.
   *
   * @example
   * Buy a phone number
   * ```ts
   * import { Country } from '@vonage/numbers';
   * const resp = await numbersClient.buyNumber({
   *   country: Country.US,
   *   msisdn: '15555555555'
   * });
   *
   * if (resp.errorCode) {
   *   console.log(`Error: ${resp.errorCodeLabel}`);
   * } else {
   *   console.log('Number bought successfully');
   * }
   * ```
   */
  public async buyNumber(
    params: NumbersParams,
  ): Promise<NumbersEmptyResponse> {
    const resp = await this.sendFormSubmitRequest<NumbersEmptyResponse>(
      `${this.config.restHost}/number/buy`,
      Client.transformers.snakeCaseObjectKeys(params) as Record<string, string>,
    );

    return {
      errorCode: `${resp.data['error-code']}`,
      errorCodeLabel: resp.data['error-code-label'],
    };
  }

  /**
   * Cancel a phone number.
   *
   * @param {NumbersParams} params - The parameters for canceling a number.
   * @return {Promise<NumbersEmptyResponse>} A promise that resolves to an empty response or an error response.
   *
   * @example
   * Cancel a phone number
   *
   * ```ts
   *
   * const resp = await numbersClient.cancelNumber({
   *  msisdn: '15555555555'
   * });
   *
   * if (resp.errorCode) {
   *   console.log(`Error: ${resp.errorCodeLabel}`);
   * } else {
   *   console.log('Number cancled successfully');
   * }
   * ```
   */
  public async cancelNumber(
    params: NumbersParams,
  ): Promise<NumbersEmptyResponse> {
    const resp = await this.sendFormSubmitRequest<NumbersEmptyResponse>(
      `${this.config.restHost}/number/cancel`,
      Client.transformers.snakeCaseObjectKeys(params) as Record<string, string>,
    );

    return {
      errorCode: `${resp.data['error-code']}`,
      errorCodeLabel: resp.data['error-code-label'],
    };
  }
  /**
   * Retrieves a list of available phone numbers based on the provided filter criteria.
   *
   * @param {NumbersSearchFilter} filter - The filter criteria for searching available numbers.
   * @return {Promise<NumbersAvailableList>} A promise that resolves to a list of available phone numbers or an error response.
   *
   * @example
   * Search for available numbers that can send SMS and make voice calls
   * ```ts
   * import { Country, Feature } from '@vonage/numbers';
   *
   * const resp = await numbersClient.getAvailableNumbers({
   *   country: Country.US,
   *   features: [Feature.SMS, Feature.VOICE],
   * });
   *
   * console.log(`There are ${resp.count} numbers available`);
   *
   * for (const number of resp.numbers) {
   *   console.log(number.msisdn);
   *   console.log(number.cost);
   *   console.log(number.type);
   * }
   * ```
   */
  public async getAvailableNumbers(
    filter: NumbersSearchFilter,
  ): Promise<NumbersAvailableList> {
    omit(
      ['starts_with', 'contains', 'ends_with', 'search_pattern'],
      Client.transformers.snakeCaseObjectKeys({
        ...filter,
        ...buildSearch(filter),
        country: filter.country,
      }),
    );
    const resp = await this.sendGetRequest<NumbersAvailableList>(
      `${this.config.restHost}/number/search`,
      {
        ...(filter.country ? { country: filter.country } : {}),
        ...(filter.type ? { type: filter.type } : {}),
        ...(filter.size ? { size: filter.size } : {}),
        ...(filter.index ? { index: filter.index } : {}),
        ...buildSearch(filter),
        ...(filter.features ? { features: sortFeatures(filter.features) } : {}),
      },
    );

    return resp.data;
  }

  /**
   * Retrieves a list of owned phone numbers based on the provided filter criteria.
   *
   * @param {NumbersOwnedFilter} [filter] - The filter criteria for searching owned numbers.
   * @return {Promise<NumbersOwnedList>} A promise that resolves to a list of owned phone numbers or an error response.
   * @example
   * Search for owned numbers
   * ```ts
   * const resp = await numbersClient.getOwnedNumbers();
   * console.log(`There are ${resp.count} numbers owned`);
   * for (const number of resp.numbers) {
   *   console.log(number.msisdn);
   *   console.log(number.type);
   * }
   * ```
   */
  public async getOwnedNumbers(
    filter?: NumbersOwnedFilter,
  ): Promise<NumbersOwnedList> {
    if (!filter) {
      filter = {};
    }
    const resp = await this.sendGetRequest<NumbersOwnedList>(
      `${this.config.restHost}/account/numbers`,
      Client.transformers.snakeCaseObjectKeys(filter),
    );
    return resp.data;
  }

  /**
   * Updates the settings of a phone number.
   *
   * @param {NumbersUpdateParams} [params] - The parameters for updating a phone number.
   * @return {Promise<NumbersEmptyResponse>} A promise that resolves to an empty response or an error response.
   *
   * @example
   *
   * ```ts
   * const resp = await numbersClient.updateNumber({
   *   msisdn: '15555555555',
   *   voiceCallbackType: 'app',
   *   voiceCallbackValue: 'APPLICATION_ID',
   *   voiceStatusCallback: 'https://example.com/webhooks/voice',
   * });
   *
   * if (resp.errorCode) {
   *   console.log(`Error: ${resp.errorCodeLabel}`);
   * } else {
   *   console.log('Number bought successfully');
   * }
   * ```
   */
  public async updateNumber(
    params: NumbersUpdateParams,
  ): Promise<NumbersEmptyResponse> {
    const appId = params.applicationId || params.appId;
    delete params.applicationId;
    delete params.appId;
    const resp = await this.sendFormSubmitRequest<NumbersEmptyResponse>(
      `${this.config.restHost}/number/update`,
      {
        country: params.country,
        msisdn: params.msisdn,
        ...(appId ? { app_id: appId } : {}),
        moHttpUrl: params.moHttpUrl,
        moSmppSysType: params.moSmppSysType,
        voiceCallbackType: params.voiceCallbackType,
        voiceCallbackValue: params.voiceCallbackValue,
        voiceStatusCallback: params.voiceStatusCallback,
      },
    );

    // TODO: Next Major Parse errorCode and throw error
    return {
      errorCode: `${resp.data['error-code']}`,
      errorCodeLabel: resp.data['error-code-label'],
    };
  }
}
