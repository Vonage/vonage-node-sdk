import { AuthenticationType, Client } from '@vonage/server-client';
import { Feature } from './enums/Feature';
import {
  NumbersAvailableList,
  NumbersOwnedFilter,
  NumbersOwnedList,
  NumbersOwnedNumber,
  NumbersEmptyResponse,
  NumbersUpdateParams,
  NumbersSearchFilter,
  NumbersParams,
  NumbersQuerySearchFilter,
  NumbersSearchSimple,
} from './types';
import { SearchPattern } from './enums/SearchPattern';
import omit from 'lodash.omit';

const remapObjects = <T, O>(mapping, newObject: T, oldObject: O): T => {
  for (const key in mapping) {
    if (oldObject[mapping[key]]) {
      newObject[key] = oldObject[mapping[key]];
      delete oldObject[mapping[key]];
    }
  }
  newObject = { ...newObject, ...oldObject };
  return newObject;
};

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

  // order of precdent contains, endsWith, startsWith
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

const sortFeatures = (features: string[]): string => {
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

export class Numbers extends Client {
  protected authType = AuthenticationType.QUERY_KEY_SECRET;

  public async buyNumber(
    params?: NumbersParams,
  ): Promise<NumbersEmptyResponse> {
    const mapping = { target_api_key: 'targetApiKey' };
    const data = remapObjects(mapping, {}, params);
    const resp = await this.sendFormSubmitRequest<NumbersEmptyResponse>(
      `${this.config.restHost}/number/buy`,
      data,
    );

    return {
      errorCode: resp.data['error-code'],
      errorCodeLabel: resp.data['error-code-label'],
    };
  }

  public async cancelNumber(
    params?: NumbersParams,
  ): Promise<NumbersEmptyResponse> {
    const mapping = { target_api_key: 'targetApiKey' };
    const data = remapObjects(mapping, {}, params);
    const resp = await this.sendFormSubmitRequest<NumbersEmptyResponse>(
      `${this.config.restHost}/number/cancel`,
      data,
    );

    return {
      errorCode: resp.data['error-code'],
      errorCodeLabel: resp.data['error-code-label'],
    };
  }

  public async getAvailableNumbers(
    filter: NumbersSearchFilter,
  ): Promise<NumbersAvailableList> {
    const mapping = {
      search_pattern: 'searchPattern',
    };
    const data: any = omit(
      remapObjects(mapping, {}, { ...filter, ...buildSearch(filter) }),
      ['startsWith', 'contains', 'endsWith', 'searchPattern'],
    );

    if (data.features?.length > 0) {
      data.features = sortFeatures(data.features);
    }

    const resp = await this.sendGetRequest<NumbersAvailableList>(
      `${this.config.restHost}/number/search`,
      data,
    );

    return resp.data;
  }

  public async getOwnedNumbers(
    filter?: NumbersOwnedFilter,
  ): Promise<NumbersOwnedList> {
    if (!filter) {
      filter = {};
    }

    const mapping = {
      application_id: 'applicationId',
      has_application: 'hasApplication',
      search_pattern: 'searchPattern',
    };
    const data = remapObjects(mapping, {}, filter);
    const resp = await this.sendGetRequest<NumbersOwnedList>(
      `${this.config.restHost}/account/numbers`,
      data,
    );
    return resp.data;
  }

  public async updateNumber(
    params?: NumbersUpdateParams,
  ): Promise<NumbersEmptyResponse> {
    const mapping = {
      app_id: 'applicationId',
    };
    const data = remapObjects(mapping, {}, params);
    const resp = await this.sendFormSubmitRequest<NumbersOwnedNumber>(
      `${this.config.restHost}/number/update`,
      data,
    );

    return {
      errorCode: resp.data['error-code'],
      errorCodeLabel: resp.data['error-code-label'],
    };
  }
}
