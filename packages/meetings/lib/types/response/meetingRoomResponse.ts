import { APILink, APILinks } from '@vonage/server-client';
import { MeetingRoom } from '../../types';
import { JoinType, MicrophoneSate, RoomLanguage } from '../../enums';

/**
 * Represents recording options for a meeting room.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type RecordingOptionsResponse = {
  /**
   * Indicates whether to automatically record all sessions in this room.
   */
  auto_record: boolean;

  /**
   * Indicates whether to record only the owner's screen or any shared screen during video.
   */
  record_owner_only: boolean;
};

/**
 * Represents the default options for participants when joining a meeting room.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type InitialJoinOptionsResponse = {
  /**
   * The default microphone state for users in the pre-join screen of this room.
   */
  microphone_state: MicrophoneSate;
};

/**
 * Represents callback URLs for events related to a meeting room.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type CallbackUrlsResponse = {
  /**
   * Callback URL for rooms events, overrides application-level rooms callback URL.
   */
  rooms_callback_url: string;

  /**
   * Callback URL for sessions events, overrides application-level sessions callback URL.
   */
  sessions_callback_url: string;

  /**
   * Callback URL for recordings events, overrides application-level recordings callback URL.
   */
  recordings_callback_url: string;
};

/**
 * Represents available features in the user interface of a meeting room.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type AvailableFeaturesResponse = {
  /**
   * Determine if the recording feature is available in the UI.
   */
  is_recording_available: boolean;

  /**
   * Determine if the chat feature is available in the UI.
   */
  is_chat_available: boolean;

  /**
   * Determine if the whiteboard feature is available in the UI.
   */
  is_whiteboard_available: boolean;

  /**
   * Determine if the locale switcher is available in the UI.
   */
  is_locale_switcher_available: boolean;

  /**
   * Determine if captions are available in the UI.
   */
  is_captions_available: boolean;
};

/**
 * Represents user interface settings for a meeting room.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type UiSettingsResponse = {
  /**
   * The desired language of the user interface.
   */
  language: RoomLanguage;
};

/**
 * Represents the response structure for a meeting room.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type MeetingRoomResponse = {
  /**
   * The display name of the meeting room.
   */
  display_name: string;

  /**
   * Recording options for the meeting room.
   */
  recording_options: RecordingOptionsResponse;

  /**
   * The meeting PIN.
   */
  meeting_code: string;

  /**
   * Indicates whether the meeting room is available.
   */
  is_available: boolean;

  /**
   * The theme UUID associated with the meeting room.
   */
  theme_id: string;

  /**
   * The time when the meeting room was created, expressed in ISO 8601 format.
   */
  created_at: string;

  /**
   * The time for when the room will expire, expressed in ISO 8601 format.
   */
  expires_at: string;

  /**
   * Indicates whether to expire the room after a session ends.
   */
  expire_after_use: string;

  /**
   * The level of approval needed to join the meeting in the room.
   */
  join_approval_level: JoinType;

  /**
   * Default options for participants joining the room.
   */
  initial_join_options: InitialJoinOptionsResponse;

  /**
   * Callback URLs for events related to the room.
   */
  callback_urls: CallbackUrlsResponse;

  /**
   * Available features in the meeting room's user interface.
   */
  available_features: AvailableFeaturesResponse;

  /**
   * User interface settings for the meeting room.
   */
  ui_settings: UiSettingsResponse;

  /**
   * Links for guest and host URLs to join the meeting room.
   */
  _links?: {
    guest_url: APILink;
    host_url: APILink;
  };
} & APILinks & Omit<
  MeetingRoom,
  | 'displayName'
  | 'recordingOptions'
  | 'meetingCode'
  | 'isAvailable'
  | 'themeId'
  | 'createdAt'
  | 'expiresAt'
  | 'expireAfterUse'
  | 'joinApprovalLevel'
  | 'initialJoinOptions'
  | 'callbackUrls'
  | 'availableFeatures'
  | 'uiSettings'
  >;
