import { APILinks } from '@vonage/server-client';
import { ListMemberResponse } from './listMemberResponse';


export type MemberPageResponse = {
  /**
   * Number of members in the page.
   */
  page_size: number;

  /**
   * HAL Page response
   */
  _embedded: {
    /**
     * The members in the page.
     */
    members: Array<ListMemberResponse>;
  }
} & APILinks;

