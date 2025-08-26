import { NCCOActions, RecordingFormat } from '../../enums/index.js';
import { RecordAction } from '../../types/index.js';

/**
 * Represents a Record action in an NCCO.
 */
export class Record implements RecordAction {
  /**
   * The action type for the Record action.
   */
  action: NCCOActions.RECORD = NCCOActions.RECORD;

  /**
   * The recording format (e.g., "mp3", "wav").
   */
  format?: RecordingFormat;

  /**
   * The split type for recording (always "conversation").
   */
  protected wrappedSplit?: string;

  /**
   * The number of audio channels (1 to 32).
   */
  protected wrappedChannels?: number;

  /**
   * The duration of silence (in seconds) to end the recording (3 to 10 seconds).
   */
  protected wrappedEndOnSilence?: number;

  /**
   * The DTMF key that ends the recording (e.g., "0", "*", "#").
   */
  protected wrappedEndOnKey?: string;

  /**
   * The maximum recording duration in seconds (3 to 7200 seconds).
   */
  protected wrappedTimeOut?: number;

  /**
   * Whether to play a beep before recording starts.
   */
  beepStart?: boolean;

  /**
   * The URL where recording events will be sent.
   */
  eventUrl?: string[];

  /**
   * The HTTP method for sending recording events (e.g., "POST").
   */
  eventMethod?: string;

  /**
   * Creates a new Record action.
   *
   * @param {RecordingFormat} format - The recording format (e.g., "mp3", "wav").
   * @param {string} split - The split type for recording (should be "conversation").
   * @param {number} channels - The number of audio channels (1 to 32).
   * @param {number} endOnSilence - The duration of silence (in seconds) to end the recording (3 to 10 seconds).
   * @param {string} endOnKey - The DTMF key that ends the recording (e.g., "0", "*", "#").
   * @param {number} timeout - The maximum recording duration in seconds (3 to 7200 seconds).
   * @param {boolean} beepStart - Whether to play a beep before recording starts.
   * @param {string} eventUrl - The URL where recording events will be sent.
   * @param {string} eventMethod - The HTTP method for sending recording events (e.g., "POST").
   */
  constructor(
    format?: RecordingFormat,
    split?: string,
    channels?: number,
    endOnSilence?: number,
    endOnKey?: string,
    timeout?: number,
    beepStart?: boolean,
    eventUrl?: string,
    eventMethod?: string,
  ) {
    if (format) {
      this.format = format;
    }
    if (split) {
      this.split = split;
    }
    if (channels) {
      this.channels = channels;
    }
    if (endOnSilence) {
      this.endOnSilence = endOnSilence;
    }
    if (endOnKey) {
      this.endOnKey = endOnKey;
    }
    if (timeout) {
      this.timeout = timeout;
    }
    if (beepStart) {
      this.beepStart = beepStart;
    }
    if (eventUrl) {
      this.eventUrl = [eventUrl];
    }
    if (eventMethod) {
      this.eventMethod = eventMethod;
    }
  }

  /**
   * Getter for the number of audio channels.
   *
   * @return {number | undefined} - The current number of audio channels.
   */
  public get channels(): number | undefined {
    return this.wrappedChannels;
  }

  /**
   * Setter for the number of audio channels.
   *
   * @param {number} channels - The number of audio channels (1 to 32).
   * @throws {Error} - If the channel value is invalid or split is not set to "conversation."
   */
  public set channels(channels: number) {
    if (channels < 1 || channels > 32) {
      throw new Error('Channels must be between 1 and 32, inclusive');
    }

    if (this.wrappedSplit !== 'conversation') {
      throw new Error(
        'Channels must have split set to \'conversation\' before changing channel numbers',
      );
    }

    this.wrappedChannels = channels;
  }

  /**
   * Getter for the character that signals the end of recording.
   *
   * @return {string | undefined} - The character that signals the end of recording.
   */
  public get endOnKey(): string | undefined {
    return this.wrappedEndOnKey;
  }

  /**
   * Setter for the DTMF key that ends the recording.
   *
   * @param {string} character - The DTMF key that ends the recording (e.g., "0", "*", "#").
   * @throws {Error} - If the character is not a valid DTMF key.
   */
  public set endOnKey(character: string) {
    const re = /^[0-9*#]$/;
    if (!re.test(character)) {
      throw new Error('Valid characters are 0-9, *, and # only');
    }

    this.wrappedEndOnKey = character;
  }

  /**
   * Getter for the duration of silence (in seconds) that signals the end of recording.
   *
   * @return {number | undefined} - The duration of silence (in seconds) that signals the end of recording.
   */
  public get endOnSilence(): number | undefined {
    return this.wrappedEndOnSilence;
  }

  /**
   * Setter for the duration of silence to end the recording.
   *
   * @param {number} numSeconds - The duration of silence in seconds (3 to 10 seconds).
   * @throws {Error} - If the duration value is out of the valid range.
   */
  public set endOnSilence(numSeconds: number) {
    if (numSeconds < 3 || numSeconds > 10) {
      throw new Error(
        'End on Silence must be between 3 and 10 seconds, inclusive',
      );
    }

    this.wrappedEndOnSilence = numSeconds;
  }

  /**
   * Getter for the recording split type.
   *
   * @return {string} - The recording split type, which is always 'conversation'.
   */
  public get split(): 'conversation' {
    return 'conversation';
  }

  /**
   * Setter for the recording split type.
   *
   * @param {string} splitType - The recording split type. Must be set to 'conversation'.
   * @throws {Error} - Throws an error if the splitType is not 'conversation'.
   */
  public set split(splitType: string) {
    if (splitType !== 'conversation') {
      throw new Error('Recording can only be split to \'conversation\'');
    }

    this.wrappedSplit = splitType;
  }

  /**
   * Getter for the recording timeout duration in seconds.
   *
   * @return {number | undefined } - The recording timeout duration in seconds.
   */
  public get timeout(): number | undefined {
    return this.wrappedTimeOut;
  }

  /**
   * Setter for the recording timeout.
   *
   * @param {number} seconds - The maximum recording duration in seconds (3 to 7200 seconds).
   * @throws {Error} - If the timeout value is out of the valid range.
   */
  public set timeout(seconds: number) {
    if (seconds < 3 || seconds > 7200) {
      throw new Error(
        'Recording timeout must be between 3 and 7200 seconds, inclusive',
      );
    }

    this.wrappedTimeOut = seconds;
  }

  /**
   * Serializes the Record action to NCCO format.
   *
   * @return {RecordAction} - The serialized Record action.
   */
  serializeToNCCO(): RecordAction {
    const data: RecordAction = {
      action: NCCOActions.RECORD,
    };

    if (this.format) {
      data.format = this.format;
    }
    if (this.wrappedSplit) {
      data.split = this.split;
    }
    if (this.wrappedChannels) {
      data.channels = this.wrappedChannels;
    }
    if (this.wrappedEndOnKey) {
      data.endOnKey = this.endOnKey;
    }
    if (this.wrappedEndOnSilence) {
      data.endOnSilence = this.endOnSilence;
    }
    if (this.wrappedTimeOut) {
      data.timeOut = this.wrappedTimeOut;
    }
    if (this.beepStart) {
      data.beepStart = this.beepStart;
    }
    if (this.eventUrl) {
      data.eventUrl = this.eventUrl;
    }
    if (this.eventMethod) {
      data.eventMethod = this.eventMethod;
    }

    return data;
  }
}
