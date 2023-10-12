/**
 * Enum representing message tags for Facebook Messenger messages.
 *
 * These tags are used to categorize the purpose and relevance of the message.
 *
 * @group Messenger
 */
export enum MessengerTags {
  /**
   * Represents a confirmed event update message tag.
   */
  CONFIRMED_EVENT_UPDATE = 'CONFIRMED_EVENT_UPDATE',

  /**
   * Represents a post-purchase update message tag.
   */
  POST_PURCHASE_UPDATE = 'POST_PURCHASE_UPDATE',

  /**
   * Represents an account update message tag.
   */
  ACCOUNT_UPDATE = 'ACCOUNT_UPDATE',

  /**
   * Represents a message tag for human agent communication.
   */
  HUMAN_AGENT = 'HUMAN_AGENT',

  /**
   * Represents a shipping update message tag.
   */
  SHIPPING_UPDATE = 'SHIPPING_UPDATE',

  /**
   * Represents a reservation update message tag.
   */
  RESERVATION_UPDATE = 'RESERVATION_UPDATE',

  /**
   * Represents a message tag for issue resolution.
   */
  ISSUE_RESOLUTION = 'ISSUE_RESOLUTION',

  /**
   * Represents an appointment update message tag.
   */
  APPOINTMENT_UPDATE = 'APPOINTMENT_UPDATE',

  /**
   * Represents a game event message tag.
   */
  GAME_EVENT = 'GAME_EVENT',

  /**
   * Represents a transportation update message tag.
   */
  TRANSPORTATION_UPDATE = 'TRANSPORTATION_UPDATE',

  /**
   * Represents a feature functionality update message tag.
   */
  FEATURE_FUNCTIONALITY_UPDATE = 'FEATURE_FUNCTIONALITY_UPDATE',

  /**
   * Represents a ticket update message tag.
   */
  TICKET_UPDATE = 'TICKET_UPDATE',

  /**
   * Represents a payment update message tag.
   */
  PAYMENT_UPDATE = 'PAYMENT_UPDATE',

  /**
   * Represents a personal finance update message tag.
   */
  PERSONAL_FINANCE_UPDATE = 'PERSONAL_FINANCE_UPDATE',
}
