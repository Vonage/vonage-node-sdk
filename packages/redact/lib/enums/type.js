/**
 * Enum representing different message types for redaction requests.
 * @enum {string}
 */
export const Type = Object.freeze({
  /**
     * Represents an inbound message type.
     */
  INBOUND: 'Inbound',
  /**
     * Represents an outbound message type.
     */
  OUTBOUND: 'Outbound'
});
