import { ApplicationPageResponse } from './Response';

export type ApplicationPageList = {
  totalItems: number;
  totalPages: number;
  pageSize: number;
} & ApplicationPageResponse;
