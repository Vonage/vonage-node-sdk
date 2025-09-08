import { APILink } from '@vonage/server-client';
import { Member } from './member.js';

export type MemberPage = {
  /**
   * The list of members.
   */
  pageSize: number;

  /**
   * The list of members.
   */
  members: Array<Member>;

  /**
   * HAL links for the page.
   */
  links?: Record<string, APILink>;
}
