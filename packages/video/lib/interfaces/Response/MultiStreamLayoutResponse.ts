import { SingleStreamLayoutResponse } from './SingleStreamLayoutResponse';

export interface MultiStreamLayoutResponse {
    count: number;
    items: SingleStreamLayoutResponse[];
}
