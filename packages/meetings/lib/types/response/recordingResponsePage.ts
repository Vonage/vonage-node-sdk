import { RecordingResponse } from './recordingResponse';

/**
 * Represents a response page containing an array of recording responses.
 */
export type RecordingResponsePage = {
  /**
   * An object containing an array of recording responses embedded within the page.
   */
  _embedded: {
    /**
     * An array of recording responses.
     */
    recordings: RecordingResponse[];
  };
};
