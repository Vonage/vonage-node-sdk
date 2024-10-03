import { SilentAuthChannel } from '../../enums';

/**
 * Represents a workflow for Silent Authentication.
 */
export type SilentAuthWorkflow = {
  /**
   * The communication channel for Silent Authentication.
   */
  channel: SilentAuthChannel;

  /**
   * The target identifier for Silent Authentication.
   */
  to: string;

  /**
   * The redirect URL for Silent Authentication.
   */
  redirectUrl: string;
};
