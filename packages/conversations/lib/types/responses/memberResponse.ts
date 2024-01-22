import { APILinks } from '@vonage/server-client';
import { MemberState } from '../../enums';
import { AnyChannel } from '../anyChannel';
import { MemberUserResponse } from './memberUserResponse';

export type AudioSettingsResponse = {
  /**
   * Indicates whether audio is enabled.
   */
  enabled: boolean;

  /**
   * Indicates whether audio is earmuffed.
   */
  earmuffed: boolean;

  /**
   * Indicates whether audio is muted.
   */
  muted: boolean;

  /**
   * Indicates whether audio is active.
   */
  audio: boolean;
};

/**
 * Type representing the joined initiator as its returned from the API.
 */
export type InitiatorJoinedResponse = {
  /**
   * Details about the initiator when the member joined.
   */
  joined: {
    /**
     * true if the user was invited by an admin JWT
     */
    is_system: boolean;

    /**
     * The user ID of the initiator.
     */
    user_id: string;

    /**
     * The member ID of the initiator.
     */
    member_id: string;
  }
};

/**
 * Type representing the invited initiator as its returned from the API.
 */
export type InitiatorInvitedResponse = {
  /**
   * Details about the initiator when the member invited.
   */
  invited: {
    /**
     * true if the user was invited by an admin JWT
     */
    is_system: boolean;
  }
};

/**
 * A Mmbmer as its returned from the API
 */
export type MemberResponse = {
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

  /**
   * Timestamps for various states of the member.
   */
  timestamp: {
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
  initiator: InitiatorJoinedResponse | InitiatorInvitedResponse;

  /**
   * The channel associated with the member.
   */
  channel: AnyChannel;

  /**
   * Media-related information for the member.
   */
  media: {
    /**
     * Audio settings for the member.
     */
    audio_settings: AudioSettingsResponse;

    /**
     * Indicates whether audio is active.
     */
    audio: boolean;
  };

  /**
   * The knocking ID for the member.
   */
  knocking_id: string;

  /**
   * The user who invited the member.
   */
  invited_by: string;
} & APILinks;
