import { NCCOActions, TTSLanguages } from '../../enums/';
import { TalkAction } from '../../types/';
import { Serializable } from '../../interfaces';

/**
 * Represents a Talk action in a Nexmo Call Control Object (NCCO).
 *
 * This action allows the text-to-speech (TTS) synthesis of spoken words in the call.
 */
export class Talk implements TalkAction, Serializable {
  /**
   * The action type for this NCCO action.
   */
  action: NCCOActions.TALK = NCCOActions.TALK;

  /**
   * The text to be spoken during the call.
   */
  text: string;

  /**
   * Indicates whether the talk action allows barge-in (optional).
   */
  bargeIn?: boolean;

  /**
   * The number of times to loop the speech (optional).
   */
  loop?: number;

  /**
   * The audio level at which to play the speech (optional).
   */
  level?: string;

  /**
   * The language for the text-to-speech synthesis (optional).
   */
  language?: TTSLanguages | string;

  /**
   * The speech style (optional).
   */
  style?: string;

  /**
   * Indicates whether to use premium text-to-speech (optional).
   */
  premium?: boolean;

  /**
   * Creates a new Talk action.
   *
   * @param {string} text - The text to be spoken during the call.
   * @param {boolean} [bargeIn] - Indicates whether the talk action allows barge-in (optional).
   * @param {number} [loop] - The number of times to loop the speech (optional).
   * @param {string} [level] - The audio level at which to play the speech (optional).
   * @param {TTSLanguages | string} [language] - The language for the text-to-speech synthesis (optional).
   * @param {string} [style] - The speech style (optional).
   * @param {boolean} [premium] - Indicates whether to use premium text-to-speech (optional).
   */
  constructor(
    text: string,
    bargeIn?: boolean,
    loop?: number,
    level?: string,
    language?: TTSLanguages | string,
    style?: string,
    premium?: boolean,
  ) {
    this.text = text;

    if (bargeIn) {
      this.bargeIn = bargeIn;
    }
    if (loop) {
      this.loop = loop;
    }
    if (level) {
      this.level = level;
    }
    if (language) {
      this.language = language;
    }
    if (style) {
      this.style = style;
    }
    if (premium) {
      this.premium = premium;
    }
  }

  /**
   * Serializes the Talk action to a Nexmo Call Control Object (NCCO).
   *
   * @return {TalkAction} - The serialized Talk action.
   */
  serializeToNCCO() {
    const data: TalkAction = {
      action: NCCOActions.TALK,
      text: this.text,
    };

    if (this.loop) {
      data.loop = this.loop;
    }
    if (this.bargeIn) {
      data.bargeIn = this.bargeIn;
    }
    if (this.level) {
      data.level = this.level;
    }
    if (this.language) {
      data.language = this.language;
    }
    if (this.style) {
      data.style = this.style;
    }
    if (this.premium) {
      data.premium = this.premium;
    }

    return data;
  }
}
