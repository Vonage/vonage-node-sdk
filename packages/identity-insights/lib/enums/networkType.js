/**
 * Enum representing the type of network of the carrier associated with a phone
 * number
 * @enum {string}
 */
export const NetworkType = Object.freeze({
  /**
     * Mobile Network Type.
     */
  MOBILE: 'mobile',
  /**
     * Landline Network Type.
     */
  LANDLINE: 'landline',
  /**
     * Toll Free Network Type.
     */
  TOLLFREE: 'tollfree',
  /**
     * Premium Network Type.
     */
  PREMIUM: 'premium',
  /**
     * Virtual Network Type
     */
  VIRTUAL: 'virtual'
});
