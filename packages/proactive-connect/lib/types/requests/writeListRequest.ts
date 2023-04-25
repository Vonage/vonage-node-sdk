import { List } from '../list';
import { ListManualDatasource } from '../listManualDatasource';
import { ListSalesForceDataSource } from '../listSalesForceDataSource';

type SaleForceDataSourceResponse = Omit<
    ListSalesForceDataSource,
    'integrationId'
> & {
    integration_id: string
}
export type WriteListRequest = Pick<
    List,
    'name' | 'description' | 'tags' | 'attributes'
> & {
    datasource?: ListManualDatasource | SaleForceDataSourceResponse
}
