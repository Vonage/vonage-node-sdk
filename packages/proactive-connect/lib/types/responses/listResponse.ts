import { APILinks } from '@vonage/server-client';
import { List } from '../list';
import { ListSyncStatus } from '../listSyncStatus';
import { ListSalesForceDataSource } from '../listSalesForceDataSource';
import { ListManualDatasource } from '../listManualDatasource';

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

type SyncStatusResponse = Omit<
    ListSyncStatus,
    'metadataModified' | 'dataModified'
> & {
    metadata_modified: boolean
    data_modified: boolean
}

type SaleForceDataSourceResponse = Omit<
    ListSalesForceDataSource,
    'integrationId'
> & {
    integration_id: string
}

export type ListResponse = Omit<
    List,
    'createdAt' | 'updatedAt' | 'itemsCount'
> & {
    datasource?: ListManualDatasource | SaleForceDataSourceResponse
    created_at: string
    updated_at: string
    items_count: number
    sync_status: SyncStatusResponse
} & Optional<APILinks, '_links'>
