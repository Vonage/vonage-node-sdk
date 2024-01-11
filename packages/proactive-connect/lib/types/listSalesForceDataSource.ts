/**
 * Represents a Salesforce data source for a list.
 */
export type ListSalesForceDataSource = {
  /**
   * The type of the data source, which is always 'salesforce'.
   */
  type: 'salesforce';

  /**
   * The integration ID defining Salesforce credentials to use for this data source.
   */
  integrationId: string;

  /**
   * The SOQL query defining which data to fetch from Salesforce.
   */
  soql: string;
};
