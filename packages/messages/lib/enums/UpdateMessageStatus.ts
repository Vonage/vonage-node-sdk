
export enum UpdateMessageStatus {
  /**
   * The status to set for the message. Setting the status of an inbound WhatsApp
   * message to read indicates to the sender of the message that the
   * message has been read (blue ticks are shown on that message in the WhatsApp
   * UI). The status of an outbound WhatsApp message cannot be updated via
   * this endpoint.
   */
  READ ='read',


  /**
   * The status to set for the message. Setting the status of an outbound
   * RCS message to revoked revokes that message if possible.
   */
  REVOKED ='revoked',
}


