import { AvailableFeatures } from './availableFeatures';
import { RecordingOptions } from './recordingOptions';
import {
  MicrophoneSate,
  MeetingType,
  JoinType,
  RoomLanguage,
} from '../enums';
import { RoomCallbackURLS } from './roomCallbackURLS';

/**
 * Represents a meeting room with associated properties.
 */
export type MeetingRoom = {
  /**
   * The unique identifier for the meeting room.
   */
  id?: string;

  /**
   * The display name or label for the meeting room.
   */
  displayName: string;

  /**
   * Additional metadata or information about the meeting room.
   */
  metadata?: string;

  /**
   * The type of meeting, which can be instant or long term.
   */
  type: MeetingType;

  /**
   * Options related to recording meetings in the room.
   */
  recordingOptions?: RecordingOptions;

  /**
   * The meeting PIN number or code.
   */
  meetingCode?: string;

  /**
   * Indicates whether the meeting room is available for use.
   */
  isAvailable?: boolean;

  /**
   * The unique identifier for the theme associated with the meeting room.
   */
  themeId?: string;

  /**
   * The date and time when the meeting room was created.
   */
  createdAt?: string;

  /**
   * The date and time when the meeting room will expire.
   */
  expiresAt?: string;

  /**
   * Indicates whether the room should expire after use (only relevant for long-term rooms).
   */
  expireAfterUse?: boolean;

  /**
   * The level of approval needed to join the meeting in the room.
   */
  joinApprovalLevel?: JoinType;

  /**
   * Options for participants when they initially join the room.
   */
  initialJoinOptions?: {
    /**
     * The default microphone state for users in the pre-join screen of this room.
     */
    microphoneState?: MicrophoneSate;
  };

  /**
   * Callback URLs for various room-related events.
   */
  callbackUrls?: RoomCallbackURLS;

  /**
   * Available features for the meeting room's user interface.
   */
  availableFeatures: AvailableFeatures;

  /**
   * User interface settings for the meeting room.
   */
  uiSettings?: {
    /**
     * The desired language of the UI.
     */
    language?: RoomLanguage;
  };

  /**
   * The URL for joining the meeting room as a host.
   */
  hostUrl?: string;

  /**
   * The URL for joining the meeting room as a guest.
   */
  guestUrl?: string;
};
