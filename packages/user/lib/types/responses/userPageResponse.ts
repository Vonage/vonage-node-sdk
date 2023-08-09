import { APILinks } from '@vonage/server-client';
import { UserResponse } from './userResponse';

export type UserPageResponse = {
  page_size: number;
  _embedded: {
    users: Array<UserResponse>;
  };
} & APILinks;
