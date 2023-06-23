import { APILink, APILinks } from '@vonage/server-client';
import { MeetingRoom } from '../../types';
import { JoinType, MicrophoneSate, RoomLanguage } from '../../enums';

export type MeetingRoomResponse = {
  display_name: string;
  recording_options: {
    auto_record: boolean;
    record_owner_only: boolean;
  };
  meeting_code: string;
  is_available: boolean;
  theme_id: string;
  created_at: string;
  expires_at: string;
  expire_after_use: string;
  join_approval_level: JoinType;
  initial_join_options: {
    microphone_state: MicrophoneSate;
  };
  callback_urls: {
    rooms_callback_url: string;
    sessions_callback_url: string;
    recordings_callback_url: string;
  };
  available_features: {
    is_recording_available: boolean;
    is_chat_available: boolean;
    is_whiteboard_available: boolean;
    is_locale_switcher_available: boolean;
    is_captions_available: boolean;
  };
  ui_settings: {
    language: RoomLanguage;
  };
  _links: {
    guest_url: APILink;
    host_url: APILink;
  };
} & Omit<
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
