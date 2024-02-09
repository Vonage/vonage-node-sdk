/**
 * Enum representing the type of communication channel.
 */
export enum ChannelType {
  /**
   * Represents a phone channel.
   */
  PHONE = 'phone',

  /**
   * Represents a SIP channel.
   */
  SIP = 'sip',

  /**
   * Represents an app channel.
   */
  APP = 'app',

  /**
   * Represents a WebSocket channel.
   */
  WEBSOCKET = 'websocket',

  /**
   * Represents a VBC (Voice Business Cloud) channel.
   */
  VBC = 'vbc',
}
