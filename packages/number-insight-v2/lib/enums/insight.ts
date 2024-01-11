/**
 * Enum representing the types of insights available for phone number checks.
 */
export enum Insight {
  /**
   * Use this insight to check the fraud score associated with a phone number.
   */
  FRAUD_SCORE = 'fraud_score',

  /**
   * Use this insight to check if a SIM swap has occurred for a phone number in the last 7 days.
   */
  SIM_SWAP = 'sim_swap',
}
