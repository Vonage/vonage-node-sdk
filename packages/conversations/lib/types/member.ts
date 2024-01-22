import { UserType } from '@vonage/users';
import { MemberState } from '../enums/';
import { AnyChannel } from './anyChannel';
import { AudioSettings } from './audioSettings';

/**
 * Type representing the joined initiator.
 */
export type InitiatorJoined = {
  /**
   * Details about the initiator when the member joined.
   */
  joined: {
    /**
     * true if the user was invited by an admin JWT
     */
    isSystem: boolean;

    /**
     * The user ID of the initiator.
     */
    userId: string;

    /**
     * The member ID of the initiator.
     */
    memberId: string;
  }
};

export type InitiatorInvited = {
  /**
   * Details about the initiator when the member invited.
   */
  invited: {
    /**
     * true if the user was invited by an admin JWT
     */
    isSystem: boolean;
  }
};

/**
 * Type representing a member in a conversation.
 */
export type Member = {
  /**
   * The unique ID of the member.
   */
  id?: string;

  /* ha
   *
   *
   *
   * The ID of the conversation to which the member belongs.
   */
  conversationId?: string;

  /**
   * The state of the member (INVITED, JOINED, LEFT, UNKNOWN).
   */
  state?: MemberState;

  /**
   * The user associated with the member.
   *
   * @remarks
   * Either the user id or name is required.
   */
  user: UserType;

  /**
   * Timestamps for various states of the member.
   */
  timestamp?: {
    /**
     * Timestamp when the member was invited.
     */
    invited: string;

    /**
     * Timestamp when the member joined.
     */
    joined: string;

    /**
     * Timestamp when the member left.
     */
    left: string;
  };

  /**
   * The initiator of the member's joining.
   */
  initiator?: InitiatorJoined | InitiatorInvited;

  /**
   * The channel associated with the member.
   */
  channel?: AnyChannel;

  /**
   * Media-related information for the member.
   */
  media?: {
    /**
     * Audio settings for the member.
     */
    audioSettings: AudioSettings;

    /**
     * Indicates whether audio is active.
     */
    audio: boolean;
  };

  /**
   * The knocking ID for the member.
   */
  knockingId: string;

  /**
   * The user who invited the member.
   */
  invitedBy: string;
};
