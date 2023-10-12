import { NCCOActions, RecordingFormat } from '../../enums';

/**
 * Represents a Record action in a Nexmo Call Control Object (NCCO). A Record
 * action is used to record audio during a call. You can specify various options
 * such as the recording format, channel configuration, timeout, and more.
 */
export type RecordAction = {
  /**
   * The action type, which should be set to 'record'.
   */
  action: NCCOActions.RECORD;

  /**
   * (Optional) An array of event URLs to which recording events will be sent. These events include the start and stop
   * of recording.
   */
  eventUrl?: string[];

  /**
   * (Optional) If set to `true`, a beep sound will be played at the beginning of the recording. Default is `false`.
   */
  beepStart?: boolean;

  /**
   * (Optional) The HTTP method used for sending recording events to the specified event URLs. If not specified, the
   * default HTTP method is used.
   */
  eventMethod?: string;

  /**
   * (Optional) The format in which the recording should be stored. Supported formats include 'mp3', 'wav', and 'ogg'.
   * If not specified, the default format may be used.
   */
  format?: RecordingFormat;

  /**
   * (Optional) Specifies how the recording should be split. The only supported value is 'conversation'.
   */
  split?: 'conversation';

  /**
   * (Optional) The number of channels for the recording. Must be between 1 and 32, inclusive.
   */
  channels?: number;

  /**
   * (Optional) The maximum duration of silence (in seconds) before the recording is stopped automatically. Must be
   * between 3 and 10 seconds, inclusive.
   */
  endOnSilence?: number;

  /**
   * (Optional) The key that, when pressed, will stop the recording. Valid characters are '0-9', '*', and '#'.
   */
  endOnKey?: string;

  /**
   * (Optional) The maximum duration of the recording in seconds. Must be between 3 and 7200 seconds, inclusive.
   */
  timeOut?: number;
};
