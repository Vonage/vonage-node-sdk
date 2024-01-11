/**
 * Enum representing the recommendations based on risk scores.
 */
export enum RiskRecommendation {
  /**
   * Indicates that it is recommended to allow the action based on the risk score.
   */
  ALLOW = 'allow',

  /**
   * Indicates that it is recommended to flag the action based on the risk score.
   */
  FLAG = 'flag',

  /**
   * Indicates that it is recommended to block the action based on the risk score.
   */
  BLOCK = 'block',
}
