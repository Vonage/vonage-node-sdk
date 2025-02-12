import { SilentAuthChannel, SilentAuthStatus } from '../enums';

/**
 * Represents a callback received for Silent Authentication.
 */
export type SilentAuthCallback = {
  /**
   * The ID of the Silent Authentication request associated with the callback.
   */
  request_id: string;

  /**
   * The date and time when the Silent Authentication event was triggered
   * in ISO 8601 format.
   */
  triggered_at: string;

  /**
   * The type of response for the Silent Authentication event.
   */
  type: string;

  /**
   * The communication channel for Silent Authentication (always 'silent_auth').
   */
  channel: SilentAuthChannel.SILENT_AUTH;

  /**
   * The status of the Silent Authentication event.
   */
  status: SilentAuthStatus;

  /**
   * Information about the action in the Silent Authentication event.
   */
  action: {
    /**
     * The type of action, which is 'check' for Silent Authentication.
     */
    type: 'check';

    /**
     * The URL for Silent Authentication Verify workflow completion.
     */
    check_url: string;
  };
};
