import { SortOrder } from '../../enums/userSort';

export type UserListParameters = {
  pageSize?: number;
  order?: SortOrder;
  cursor?: string;
  name?: string;
};
