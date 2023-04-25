import { APILinks } from '@vonage/server-client';
import { SortOrder } from '../../enums/sortOrder';
import { ListItemResponse } from './listItemResponse';

export type ListItemPageResponse<DataType> = {
    page: number
    page_size: number
    total_items: number
    total_pages: number
    order: SortOrder
    _embedded: {
        items: Array<ListItemResponse<DataType>>
    }
} & APILinks
