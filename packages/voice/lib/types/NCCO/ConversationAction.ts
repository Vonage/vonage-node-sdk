import { NCCOActions } from '../../enums';

/**
 * Represents a Nexmo Call Control Object (NCCO) action for starting a conversation within a call.
 * The `ConversationAction` defines the behavior of the conversation.
 */
export type ConversationAction = {
  /** The type of action, which is "conversation" for starting a conversation. */
  action: NCCOActions.CONVERSATION;

  /** The name or identifier of the conversation. */
  name: string;

  /**
   * An array of URLs to music or audio files to be played to participants when they are on hold.
   * It provides background music or audio while participants are waiting in the conversation.
   */
  musicOnHoldUrl?: string[];

  /**
   * When `true`, the conversation starts when a participant enters the conversation.
   * If set to `false`, the conversation must be explicitly started.
   */
  startOnEnter?: boolean;

  /**
   * When `true`, the conversation ends when a participant exits the conversation.
   * If set to `false`, the conversation must be explicitly ended.
   */
  endOnExit?: boolean;

  /**
   * When `true`, the conversation will be recorded, and the audio will be saved.
   * Participants' voices will be recorded during the conversation.
   */
  record?: boolean;

  /**
   * An array of participant identifiers (e.g., participant's phone numbers or usernames)
   * who can speak in the conversation. Restricts who can actively participate in the conversation as speakers.
   */
  canSpeak?: string[];

  /**
   * An array of participant identifiers (e.g., participant's phone numbers or usernames) who can hear the conversation.
   * Restricts who can listen to the conversation as listeners.
   */
  canHear?: string[];

  /**
   * When `true`, all participants in the conversation are muted by default.
   * Participants must unmute themselves to speak in the conversation.
   */
  mute?: boolean;
};
