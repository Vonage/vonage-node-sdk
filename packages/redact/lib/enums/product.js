/**
 * Enum representing different product types for redaction requests.
 * @enum {string}
 */
export const ProductType = Object.freeze({
  /**
     * Represents the SMS product.
     */
  SMS: 'SMS',
  /**
     * Represents the Voice product.
     */
  Voice: 'Voice',
  /**
     * Represents the Number Insight product.
     */
  NumberInsight: 'NumberInsight',
  /**
     * Represents the Verify product.
     */
  Verify: 'Verify',
  /**
     * Represents the Verify SDK product.
     */
  VerifySDK: 'VerifySDK'
});
