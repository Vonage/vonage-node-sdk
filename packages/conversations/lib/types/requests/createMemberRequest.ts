import { MemberState } from '../../enums/index.js';
import { AnyChannel } from '../anyChannel.js';

export type AudioSettingsRequest = {
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
 * A Member as its sent to the API
 */
export type CreateMemberRequest = {
  /**
   * The member's state
   */
  state: MemberState;

  /**
   * The matching user for this member.
   */
  user: {
    /**
     * The user's ID.
     */
    id: string;

    /**
     * The user's name.
     */
    name: string;
  };

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
    audio_settings: AudioSettingsRequest;

    /**
     * Indicates whether the member has audio.
     */
    audio: boolean;
  };

  /**
   * The knocking ID for the member.
   */
  knocking_id: string;

  /**
   * The member who invited the member.
   */
  member_id_inviting: string;

  /**
   * The user who invited the member.
   */
  from: string;
};
