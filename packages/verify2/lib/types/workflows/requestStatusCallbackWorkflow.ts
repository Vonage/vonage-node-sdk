import { Channels, RequestWorkflowStatus } from '../../enums';

/**
 * Represents a workflow step within a verification request's status callback.
 */
export type RequestStatusCallbackWorkflow = {
  /**
   * The communication channel associated with this workflow step.
   */
  channel: Channels;

  /**
   * The date and time when this workflow step was initiated in ISO 8601 format.
   */
  initiated_at: string;

  /**
   * The status of this workflow step within the verification request.
   */
  status: RequestWorkflowStatus;
};
