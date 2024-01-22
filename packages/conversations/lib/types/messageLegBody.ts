import { Channels } from "@vonage/messages";
import { CallDirection, CallStatus } from "@vonage/voice";
import { LegStatus, ReasonCode } from "../enums";

export type LegState = {
  /**
   * Status of the message leg
   */
  status: LegStatus;

  /**
   * If the leg is successful
   */
  succssful?: boolean;

  /**
   * Reason code of the message leg
   */
  reason?: ReasonCode;

}

export type MessageLegBody = {
  /**
   * Id of the message leg
   */
  legId: string;

  /**
   * Call direction of the message leg
   */
  direction: CallDirection;

  /**
   * Channel type of the message leg
   */
  type: Channels

  /**
   * Call status of the message leg
   */
  status: CallStatus;

  /**
   * State of the message leg
   */
  state: LegState;

  /**
   * Last status of the leg
   */
  statusHistory: {
    /**
     * Id of the knocker
     */
    knockerId?: string;

    /**
     * Call status of the leg
     */
    status: CallStatus;

    /**
     * Conversation Id
     */
    conversationId?: string;

    /**
     * Member Id
     */
    memberId?: string;

    /** 
     * Last state of the leg
     */
    state: LegState;
  }
}
