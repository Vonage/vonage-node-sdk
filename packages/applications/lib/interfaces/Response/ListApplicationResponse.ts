import { Application } from '../Application';

export interface ListApplicationResponse {
    page_size: number;
    page: number;
    total_items: number;
    total_pages: number;
    _embedded: {
        applications: Application[];
    };
}
