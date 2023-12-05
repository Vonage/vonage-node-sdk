import { List } from '../list';
import { ListManualDatasource } from '../listManualDatasource';
import { ListSalesForceDataSource } from '../listSalesForceDataSource';

/**
 * Represents a response object for a Salesforce data source with modified integration ID.
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type SaleForceDataSourceResponse = Omit<
  ListSalesForceDataSource,
  'integrationId'
  > & {
  /**
   * The integration ID defining Salesforce credentials to use for this data source.
   */
  integration_id: string;
};

/**
 * Represents a request object for creating or updating a list with associated metadata.
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type WriteListRequest = Pick<
  List,
  'name' | 'description' | 'tags' | 'attributes'
  > & {
  /**
   * The data source for the list, which can be either a manual data source or a Salesforce data source.
   */
  datasource?: ListManualDatasource | SaleForceDataSourceResponse;
};
