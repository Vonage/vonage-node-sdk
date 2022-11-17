import { SingleArchiveResponse } from './SingleArchiveResponse';

export interface MultiArchiveResponse {
    count: number;
    items: SingleArchiveResponse[];
}
