import { AuthenticationType, Client } from '@vonage/server-client';
import { Feature, SearchPattern } from './enums';
import omit from 'lodash.omit';
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
} from "./types";

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
 * Represents a client for managing phone numbers.
 */
export class Numbers extends Client {
  public authType = AuthenticationType.QUERY_KEY_SECRET;

  /**
   * Buys a phone number.
   *
   * @param {NumbersParams} params - The parameters for buying a number.
   * @return {Promise<NumbersEmptyResponse>} A promise that resolves to an empty response or an error response.
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
   * Cancels a phone number.
   *
   * @param {NumbersParams} params - The parameters for canceling a number.
   * @return {Promise<NumbersEmptyResponse>} A promise that resolves to an empty response or an error response.
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
   */
  public async getAvailableNumbers(
    filter: NumbersSearchFilter,
  ): Promise<NumbersAvailableList> {
    omit(
      Client.transformers.snakeCaseObjectKeys({
        ...filter,
        ...buildSearch(filter),
        country: filter.country,
      }),
      ['starts_with', 'contains', 'ends_with', 'search_pattern'],
    );

    const resp = await this.sendGetRequest<NumbersAvailableList>(
      `${this.config.restHost}/number/search`,
      {
        country: filter.country,
        type: filter.type,
        size: filter.size,
        index: filter.index,
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
   */
  public async updateNumber(
    params: NumbersUpdateParams,
  ): Promise<NumbersEmptyResponse> {
    params.appId = params.applicationId || params.appId;
    const resp = await this.sendFormSubmitRequest<NumbersEmptyResponse>(
      `${this.config.restHost}/number/update`,
      {
        ...params,
        ...(params.appId ? { app_id: params.appId } : {}),
      },
    );

    return {
      errorCode: `${resp.data['error-code']}`,
      errorCodeLabel: resp.data['error-code-label'],
    };
  }
}
