import { RequestStatus } from '../enums';
import { RequestStatusCallbackWorkflow } from './requestStatusCallbackWorkflow';

/**
 * Represents a callback received for the status update of a
 * verification request.
 */
export type RequestStatusCallback = {
  /**
   * The ID of the verification request associated with the callback.
   */
  request_id: string;

  /**
   * The date and time when the verification request was submitted
   * in ISO 8601 format.
   */
  submitted_at: string;

  /**
   * The status of the verification request.
   */
  status: RequestStatus;

  /**
   * The type of response for the callback.
   */
  type: string;

  /**
   * The number of seconds before the current step in the verification
   * request times out.
   */
  channel_timeout: number;

  /**
   * An array of workflow details for the verification request.
   */
  workflow: Array<RequestStatusCallbackWorkflow>;
};
