import { CallStatus, CallDirection } from "@vonage/voice";
import { MessageSIPBody } from "./messageSIPBody";

/**
 * SIP and RTC message body with status
 *
 * @remarks This is the same body for RTC and SIP
 */
export type MessageSIPStatusBody = {

  /**
   * Price for the call
   */
  price: string;

  /**
   * Rate per minute
   */
  rate: string;

  /**
   * Call duration
   */
  duration: string;

  /**
   * Phone number
   */
  to: string;

  /**
   * Phone number of the caller
   */
  from: string;

  /**
   * Network code of the caller
   */
  networkCode: string;

  /**
   * Time of the request
   */
  requestTime: string;

  /**
   * Time of the start of the call
   */
  startTime: string;

  /**
   * Time of the end of the call
   */
  endTime: string;

  /**
   * Status of the call
   */
  status: CallStatus;

  /**
   * Direction of the call
   */
  direction: CallDirection;

  /**
   * State of the call
   */
  state: {
    /**
     * Status of the call
     */
    status: CallStatus;
  }
} & MessageSIPBody;
