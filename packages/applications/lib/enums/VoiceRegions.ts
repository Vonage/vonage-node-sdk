/**
 * Enumeration representing different voice regions.
 *
 * @remarks
 * Selecting a region means all inbound, programmable SIP and SIP connect calls
 * will be sent to the selected region unless the call is sent to a regional endpoint.
 * If the call is using a regional endpoint this will override the application setting.
 */
export enum VoiceRegions {
  /**
   * @description North America - East region
   */
  NA_EAST = 'na-east',

  /**
   * @description North America - West region
   */
  NA_WEST = 'na-west',

  /**
   * @description Europe - West region
   */
  EU_WEST = 'eu-west',

  /**
   * @description Europe - East region
   */
  EU_EAST = 'eu-east',

  /**
   * @description Asia-Pacific - Singapore region
   */
  APAC_SNG = 'apac-sng',

  /**
   * @description Asia-Pacific - Australia region
   */
  APAC_AUSTRALIA = 'apac-australia',
}
