import { ApplicationResponse } from './ApplicationResponse';
import { APILinks } from '@vonage/server-client';

export type ApplicationPageResponse = {
  page_size: number;
  page: number;
  total_items: number;
  total_pages: number;
  _embedded: {
    applications: ApplicationResponse[];
  };
} & APILinks;
