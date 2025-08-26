import { NCCOActions } from '../../enums/index.js';
import { ConversationAction } from '../../types/index.js';
import { Serializable } from '../../ncco.js';

/**
 * Represents a Conversation action in the Nexmo Call Control Object (NCCO) for managing audio conferences.
 */
export class Conversation implements ConversationAction, Serializable {
  /**
   * The action type, which is always 'conversation'.
   */
  action: NCCOActions.CONVERSATION = NCCOActions.CONVERSATION;

  /**
   * The name of the conversation.
   *
   * @param {string} name - The name of the conversation.
   */
  name: string;

  /**
   * An array of URLs for music to be played while participants are on hold.
   *
   * @param {string[]} musicOnHoldUrl - An array of music on hold URLs.
   */
  musicOnHoldUrl?: string[];

  /**
   * Set to true to start the conversation when a participant enters.
   *
   * @param {boolean} startOnEnter - Set to true to start the conversation on participant enter.
   */
  startOnEnter?: boolean;

  /**
   * Set to true to end the conversation when the last participant exits.
   *
   * @param {boolean} endOnExit - Set to true to end the conversation on last participant exit.
   */
  endOnExit?: boolean;

  /**
   * Set to true to record the conversation.
   *
   * @param {boolean} record - Set to true to record the conversation.
   */
  record?: boolean;

  /**
   * An array of participant IDs (e.g., phone numbers) who can speak in the conversation.
   *
   * @param {string[]} canSpeak - An array of participant IDs who can speak in the conversation.
   */
  canSpeak?: string[];

  /**
   * An array of participant IDs (e.g., phone numbers) who can hear in the conversation.
   *
   * @param {string[]} canHear - An array of participant IDs who can hear in the conversation.
   */
  canHear?: string[];

  /**
   * Set to true to mute all participants in the conversation.
   *
   * @param {boolean} mute - Set to true to mute all participants in the conversation.
   */
  mute?: boolean;

  /**
   * Create a new Conversation instance.
   *
   * @param {string} name - The name of the conversation.
   * @param {string} musicOnHoldUrl - An array of music on hold URLs.
   * @param {boolean} startOnEnter - Set to true to start the conversation on participant enter.
   * @param {boolean} endOnExit - Set to true to end the conversation on last participant exit.
   * @param {boolean} record - Set to true to record the conversation.
   * @param {string[]} canSpeak - An array of participant IDs who can speak in the conversation.
   * @param {string[]} canHear - An array of participant IDs who can hear in the conversation.
   * @param {boolean} mute - Set to true to mute all participants in the conversation.
   */
  constructor(
    name: string,
    musicOnHoldUrl?: string,
    startOnEnter?: boolean,
    endOnExit?: boolean,
    record?: boolean,
    canSpeak?: string[],
    canHear?: string[],
    mute?: boolean,
  ) {
    this.name = name;

    if (musicOnHoldUrl) {
      this.musicOnHoldUrl = [musicOnHoldUrl];
    }
    if (startOnEnter) {
      this.startOnEnter = startOnEnter;
    }
    if (endOnExit) {
      this.endOnExit = endOnExit;
    }
    if (record) {
      this.record = record;
    }
    if (canSpeak) {
      this.canSpeak = canSpeak;
    }
    if (canHear) {
      this.canHear = canHear;
    }
    if (mute) {
      this.mute = mute;
    }
  }

  /**
   * Serialize the Conversation action to a Nexmo Call Control Object (NCCO) format.
   *
   * @return {ConversationAction} - The serialized Conversation action.
   */
  serializeToNCCO(): ConversationAction {
    const data: ConversationAction = {
      action: NCCOActions.CONVERSATION,
      name: this.name,
    };

    if (this.musicOnHoldUrl) {
      data.musicOnHoldUrl = this.musicOnHoldUrl;
    }
    if (this.startOnEnter) {
      data.startOnEnter = this.startOnEnter;
    }
    if (this.endOnExit) {
      data.endOnExit = this.endOnExit;
    }
    if (this.record) {
      data.record = this.record;
    }
    if (this.canSpeak) {
      data.canSpeak = this.canSpeak;
    }
    if (this.canHear) {
      data.canHear = this.canHear;
    }
    if (this.mute) {
      data.mute = this.mute;
    }

    return data;
  }
}
