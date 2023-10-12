import { ListAttribute } from './listAttribute';
import { ListManualDatasource } from './listManualDatasource';
import { ListSalesForceDataSource } from './listSalesForceDataSource';
import { ListSyncStatus } from './listSyncStatus';

/**
 * Represents a list with associated metadata and synchronization details.
 */
export type List = {
  /**
   * The unique identifier for the list.
   */
  id: string;

  /**
   * The creation date and time of the list.
   */
  createdAt: string;

  /**
   * The last update date and time of the list.
   */
  updatedAt: string;

  /**
   * The number of items in the list.
   */
  itemsCount: number;

  /**
   * The name of the list.
   */
  name: string;

  /**
   * The description of the list (optional).
   */
  description?: string;

  /**
   * An array of tags associated with the list (optional).
   */
  tags?: Array<string>;

  /**
   * The synchronization status of the list.
   */
  syncStatus: ListSyncStatus;

  /**
   * An array of attributes associated with the list (optional).
   */
  attributes?: Array<ListAttribute>;

  /**
   * The data source for the list, which can be either a Salesforce data source
   * or a manual data source.
   */
  datasource?: ListSalesForceDataSource | ListManualDatasource;
};
