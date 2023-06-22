import { NCCOActions } from '../../enums';
import { StreamAction } from '../../interfaces/NCCO/StreamAction';
import { Serializable } from '../../ncco';
import debug from 'debug';

debug('@vonage/voice')(
  'This class is deprecated. Please update to use the appropriate type',
);

/**
 * @deprecated This class is deprecated. Please update to use the
 *             appropriate type
 */
export class Stream implements StreamAction, Serializable {
  action: NCCOActions.STREAM;
  streamUrl: string[];
  level?: number;
  bargeIn?: boolean;
  loop?: number;

  constructor(
    streamUrl: string,
    level?: number,
    bargeIn?: boolean,
    loop?: number,
  ) {
    this.streamUrl = [streamUrl];

    if (level) {
      this.level = level;
    }
    if (bargeIn) {
      this.bargeIn = bargeIn;
    }
    if (loop) {
      this.loop = loop;
    }
  }

  serializeToNCCO() {
    const data: StreamAction = {
      action: this.action,
      streamUrl: this.streamUrl,
    };

    if (this.level) {
      data.level = this.level;
    }
    if (this.bargeIn) {
      data.bargeIn = this.bargeIn;
    }
    if (this.loop) {
      data.loop = this.loop;
    }

    return data;
  }
}
