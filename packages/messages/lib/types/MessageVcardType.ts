export type MessageVcardType = {
  /**
   * The URL of the vCard attachment.
   */
  url: string;

  /**
   * Additional text to accompany the vCard.
   */
  caption?: string;
};

/**
 * Represents a vCard message type.
 */
export type MessageVcardParams = {
  vcard: MessageVcardType;
};
