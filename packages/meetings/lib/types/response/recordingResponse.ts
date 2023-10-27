import { APILink } from '@vonage/server-client';
import { RecordingStatus } from '../../enums';

/**
 * Represents a response for a recording.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 */
export type RecordingResponse = {
  /**
   * The ID of the recording.
   */
  id: string;

  /**
   * The session ID corresponding to the recording.
   */
  session_id: string;

  /**
   * The date when the recording started, expressed in ISO 8601 format.
   */
  started_at: string;

  /**
   * The date when the recording ended, expressed in ISO 8601 format.
   */
  ended_at: string;

  /**
   * The current status of the recording.
   */
  status: RecordingStatus;

  /**
   * Links for accessing the recording URL.
   */
  _links: {
    /**
     * The URL to access the recording.
     */
    url: APILink;
  };
};
