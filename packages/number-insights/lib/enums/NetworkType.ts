/**
 * Enum representing the type of network associated with a phone number.
 * @enum {string}
 */
export enum NetworkType {
  /**
   * The phone number is associated with a mobile network.
   */
  MOBILE = 'mobile',

  /**
   * The phone number is associated with a landline network.
   */
  LANDLINE = 'landline',

  /**
   * The phone number is associated with a premium landline network.
   */
  LANDLINE_PREMIUM = 'landline_premium',

  /**
   * The phone number is associated with a toll-free landline network.
   */
  LANDLINE_TOLLFREE = 'landline_tollfree',

  /**
   * The phone number is associated with a virtual network.
   */
  VIRTUAL = 'virtual',

  /**
   * The type of network associated with the phone number is unknown.
   */
  UNKNOWN = 'unknown',

  /**
   * The phone number is associated with a pager network.
   */
  PAGER = 'pager',
}
