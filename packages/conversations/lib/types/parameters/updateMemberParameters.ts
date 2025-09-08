import { MemberState } from '../../enums/index.js';

/**
 * Parameters for updating a member.
 */
export type UpdateMemberParameters = {
  /**
   * The new state to public set
   *
   * Setting to `MemberState.LEFT` will remove the member from the `reason` is
   * required when setting to `MemberState.JOINED`
   */
  state: MemberState.LEFT | MemberState.JOINED;

  /**
   * Member ID of who is making the update.
   */
  from: string;

  /**
   * The reason for the update.
   */
  reason?: {
    /**
     * The reason code.
     */
    code: string;

    /**
     * The reason text.
     */
    text: string;
  }
}
