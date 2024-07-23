import { Channels } from '@vonage/messages';

export type MessagePlayDTMFBody = {
  /**
   * The digits to play.
   */
  digits: string;

  /**
   * Channel information.
   */
  channel: {
    /**
     * Channel message was sent to.
     */
    to: {
      /**
       * Channel type.
       */
      type: Channels;

      /**
       * From Channel information.
       */
      from: {
        /**
         * Channel type.
         */
        type: Channels;
      };

      /**
       * To Channel information.
       */
      to: {
        /**
         * Channel type.
         */
        type: string;

        /**
         * User ID.
         */
        user: string;
      };
    };

    /**
     * Channel message was sent from.
     */
    from: {
      /**
       * Channel type.
       */
      type: Channels;

      /**
       * From Channel information.
       */
      from: {
        /**
         * Channel type.
         */
        type: Channels;
      };

      /**
       * To Channel information.
       */
      to: {
        /**
         * Channel type.
         */
        type: string;

        /**
         * User ID.
         */
        user: string;
      };
    };

    /**
     * Mmessage Id
     */
    id: string;

    /**
     * Message type
     */
    type: 'app' | 'phone' | 'sip' | 'websocket' | 'vcp';

    /**
     * Message headers
     */
    headers: Record<string, string>;
  };

  /**
   * The sequence number of the DTMF event.
   */
  dtmfSeq?: number;

  /**
   * The method used to send the DTMF event.
   */
  method: 'in';

  /**
   * The duration of the DTMF event.
   */
  duration: number;
}

