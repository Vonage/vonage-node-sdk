import { CaptionStatus } from "../../enums";

/**
 * Represents a response containing the status of captions for a live streaming broadcast.
 */
export type CaptionStatusResponse = {
  /**
   * The unique ID for the caption.
   */
  captionId: string;

  /**
   * The Vonage Application UUID.
   */
  applicationId: string;

  /**
   * The Vonage Video session ID associated with the broadcast.
   */
  sessionId: string;

  /**
   * The status of the captions.
   */
  status: CaptionStatus;

  /**
   * The time when the caption was created, expressed in milliseconds since the
   * Unix epoch (January 1, 1970, 00:00:00 UTC).
   */
  createdAt: number;

  /**
   * The timestamp when the caption was last updated, expressed in milliseconds since the Unix epoch.
   */
  updatedAt: number;

  /**
   * The duration of the caption, in seconds.
   */
  duration: number;

  /**
   * The language code of the captions (e.g., "en-us" for English, US).
   */
  languageCode: "en-us";

  /**
   * The caption provider (e.g., "aws-transcribe").
   */
  provider: "aws-transcribe";

  /**
   * An optional reason for the caption status.
   */
  reason?: string;
};
