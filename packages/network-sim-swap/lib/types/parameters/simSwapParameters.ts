export type SIMSwapParameters = {
  /**
   * The Phone number to check if the SIM was swapped
   */
  phone: string;

  /**
   * The number of days to check if the SIM was swapped
   *
   * From 1 to 2400
   */
  maxAge?: number;
};
