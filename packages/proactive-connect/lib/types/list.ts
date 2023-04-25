import { ListAttribute } from './listAttribute';
import { ListManualDatasource } from './listManualDatasource';
import { ListSalesForceDataSource } from './listSalesForceDataSource';
import { ListSyncStatus } from './listSyncStatus';

export type List = {
    id: string
    createdAt: string
    updatedAt: string
    itemsCount: number
    name: string
    description?: string
    tags?: Array<string>
    syncStatus: ListSyncStatus
    attributes?: Array<ListAttribute>
    datasource?: ListSalesForceDataSource | ListManualDatasource
}
