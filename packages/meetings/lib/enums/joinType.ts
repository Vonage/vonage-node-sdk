/**
 * Enum representing different join approval levels for a meeting room.
 */
export enum JoinType {
  /**
   * No approval is required for participants to join.
   */
  NONE = 'none',

  /**
   * Participants can join only after the owner has joined.
   */
  AFTER_OWNER_ONLY = 'after_owner_only',

  /**
   * Participants need explicit approval from the host to join.
   */
  EXPLICIT_APPROVAL = 'explicit_approval',
}
