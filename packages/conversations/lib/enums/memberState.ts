/**
 * Enum representing the state of a member.
 */
export enum MemberState {
  /**
   * The member has been invited to join the conversation.
   */
  INVITED = 'INVITED',

  /**
   * The member has joined the conversation.
   */
  JOINED = 'JOINED',

  /**
   * The member has left the conversation.
   */
  LEFT = 'LEFT',

  /**
   * The state of the member is unknown or undefined.
   */
  UNKNOWN = 'UNKNOWN',
}
