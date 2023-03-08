import { Type, ProductType } from '../../enums/index';

export interface TransactionRequest {
    id: string
    product: ProductType
    type: Type
}
