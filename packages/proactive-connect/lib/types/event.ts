import { EventTypes } from '../enums';

/**
 * Represents an event that captures various activities or changes in the
 * system, such as changes to user subscribe status, the creation of a new
 * list based on a response, the invocation of a chat bot agent, or the
 * triggering of certain analytics.
 */
export type Event = {
  /**
   * The date and time when the event occurred.
   */
  occurredAt: string;

  /**
   * The type of the event, which should be one of the values from the 'EventTypes' enum.
   */
  type: EventTypes;

  /**
   * The unique identifier for the event.
   */
  id: string;

  /**
   * The unique identifier for the job related to the event.
   */
  jobId: string;

  /**
   * The name of the segment or matcher related to the event.
   */
  srcCtx: string;

  /**
   * The data associated with the event (unknown type).
   */
  data: unknown;

  /**
   * The unique identifier for the run related to the event.
   */
  runId: string;

  /**
   * The string identifier of a recipient, such as an email or phone number.
   */
  recipientId: string;
};
