import { BroadcastDetailsResponse } from './BroadcastDetailsResponse';

export interface MultiBroadcastResponse {
    count: number;
    items: BroadcastDetailsResponse[];
}
