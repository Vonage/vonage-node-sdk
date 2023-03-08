import { Type, ProductType } from '../enums/index';

export type TransactionParams = {
    id: string
    product: ProductType
    type: Type
}
