import { APILinks } from '@vonage/server-client';
import { List } from '../list';
import { ListSyncStatus } from '../listSyncStatus';
import { ListSalesForceDataSource } from '../listSalesForceDataSource';
import { ListManualDatasource } from '../listManualDatasource';

/**
 * Represents a response object for synchronization status with modified metadata and data flags.
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type SyncStatusResponse = Omit<
  ListSyncStatus,
  'metadataModified' | 'dataModified'
  > & {
  /**
   * Indicates whether the list metadata (definition) is modified since the latest sync.
   */
  metadata_modified: boolean;

  /**
   * Indicates whether one or more list items were added, removed, and/or modified since the latest sync.
   */
  data_modified: boolean;
};

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
 * Represents a response object for a list with associated metadata and synchronization details.
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type ListResponse = Omit<
  List,
  'createdAt' | 'updatedAt' | 'itemsCount'
  > & {
  /**
   * The data source for the list, which can be either a manual data source or a Salesforce data source.
   */
  datasource?: ListManualDatasource | SaleForceDataSourceResponse;

  /**
   * The creation date and time of the list.
   */
  created_at: string;

  /**
   * The last update date and time of the list.
   */
  updated_at: string;

  /**
   * The number of items in the list.
   */
  items_count: number;

  /**
   * The synchronization status of the list.
   */
  sync_status: SyncStatusResponse;
} & APILinks;

