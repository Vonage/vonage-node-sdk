import { APILinks } from '@vonage/server-client';
import { MemberState } from '../../enums';
import { MemberUserResponse } from './memberUserResponse';


/**
 * A Mmbmer as its returned from the API in the listMembers
 */
export type ListMemberResponse = {
  /**
   * The member's id
   */
  id: string

  /**
   * The member's state
   */
  state: MemberState

  _embedded: {
    /**
     * The matching user for this member.
     */
    user: MemberUserResponse;
  }
} & APILinks;

