import { APILinks } from '@vonage/server-client';
import { UserRequest } from '../requests/userRequest';

export type UserResponse = UserRequest & APILinks;
