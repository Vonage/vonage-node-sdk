import { APILinks } from '@vonage/server-client';
import { SortOrder } from '../../enums/sortOrder';
import { ListResponse } from './listResponse';

export type ListPageResponse = {
    page: number
    page_size: number
    total_items: number
    total_pages: number
    order: SortOrder
    _embedded: {
        lists: Array<ListResponse>
    }
} & APILinks
