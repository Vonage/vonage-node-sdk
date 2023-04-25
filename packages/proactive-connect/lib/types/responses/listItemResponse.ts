import { APILinks } from '@vonage/server-client';
import { ListItem } from '../listItem';

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

export type ListItemResponse<DataType> = Omit<
    ListItem<DataType>,
    'createdAt' | 'updatedAt' | 'listId'
> & {
    updated_at: string
    created_at: string
    list_id: string
} & Optional<APILinks, '_links'>
