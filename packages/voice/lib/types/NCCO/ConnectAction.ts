import { CallEndpoint } from '../Endpoint';
import { NCCOActions, MachineDetection, ConnectEventType } from '../../enums';

/**
 * Represents a Nexmo Call Control Object (NCCO) action for connecting a call to one or more endpoints.
 * The `ConnectAction` defines the behavior of the call when connecting.
 */
export type ConnectAction = {
  /** The type of action, which is "connect" for connecting a call. */
  action: NCCOActions.CONNECT;

  /** An array of URLs to webhook endpoints that will receive events related to this action. */
  eventUrl?: string[];

  /**
   * The event type to be sent to the event URL(s). Possible values include:
   * - "synchronous" (default): Events are sent synchronously.
   */
  eventType?: ConnectEventType;

  /** The caller's identity that will be displayed to the callee. */
  from?: string;

  /** An array of `CallEndpoint` objects representing the endpoints to connect the call to. */
  endpoint: Array<CallEndpoint>;

  /**
   * When `true`, a random caller ID number will be generated and used as the `from` number.
   * This can help with privacy and security by masking the original caller's number.
   */
  randomFromNumber?: boolean;

  /**
   * The maximum time (in seconds) that the platform should wait for an answer from the endpoint.
   * If no answer is received within this time, the call may be treated as unanswered.
   */
  timeout?: number;

  /**
   * The maximum number of times this action should be executed. If set, the
   * action will only be executed up to the specified limit.
   */
  limit?: number;

  /**
   * The behavior of machine detection when connecting the call. Possible values include:
   * - "continue" (default): Continue connecting the call even if a machine is detected.
   * - "hangup": Hang up the call if a machine is detected.
   */
  machineDetection?: MachineDetection;

  /** The HTTP method to use when making requests to the `eventUrl`. Default is "POST". */
  eventMethod?: string;

  /**
   * The URL to a ringback tone to play to the caller while waiting for the call to connect.
   * It's usually a URL to an audio file that serves as a ringtone.
   */
  ringbackTone?: string;
};
