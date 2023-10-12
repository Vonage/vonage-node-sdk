import { ExperienceComposerResolution } from "../../enums";

/**
 * Represents a response from the Experience Composer.
 */
export type ExperienceComposerResponse = {
  /**
   * The unique ID of the response.
   */
  id: string;

  /**
   * The session ID associated with the response.
   */
  sessionId: string;

  /**
   * The application ID associated with the response.
   */
  applicationId: string;

  /**
   * The timestamp when the response was created (milliseconds since the Unix epoch).
   */
  createdAt: number;

  /**
   * The timestamp when the response was last updated (milliseconds since the Unix epoch).
   */
  updatedAt: number;

  /**
   * The URL associated with the response.
   */
  url: string;

  /**
   * The resolution used by the Experience Composer.
   */
  resolution: ExperienceComposerResolution;

  /**
   * The status of the response, which can be one of: "starting", "started", "stopped", "failed".
   */
  status: "starting" | "started" | "stopped" | "failed";

  /**
   * The stream ID associated with the response.
   */
  streamId: string;

  /**
   * An optional reason for the status, if available.
   */
  reason?: string;
}
