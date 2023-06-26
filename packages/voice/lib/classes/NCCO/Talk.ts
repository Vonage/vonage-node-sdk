import { NCCOActions, TTSLanguages } from '../../enums';
import { TalkAction } from '../../types/NCCO/TalkAction';
import { Serializable } from '../../ncco';

export class Talk implements TalkAction, Serializable {
  action: NCCOActions.TALK;
  text: string;
  bargeIn?: boolean;
  loop?: number;
  level?: string;
  language?: TTSLanguages;
  style?: string;
  premium?: boolean;

  constructor(
    text: string,
    bargeIn?: boolean,
    loop?: number,
    level?: string,
    language?: TTSLanguages,
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
