/**
 * Type representing a network within a specific country's pricing information.
 */
export type Network = {
  /**
   * The type of network
   */
  type: string;

  /**
   * The cost to send a message or make a call on this network.
   */
  price: string;

  /**
   * The currency used for prices for this network
   */
  currency: string;

  /**
   * The Mobile Country Code (MCC) of the operator
   */
  mcc: string;

  /**
   * The Mobile Network Code (MNC) of the operator
   */
  mnc: string;

  /**
   * The Mobile Country Code and Mobile Network Code combined to give a unique reference for the operator
   */
  networkCode: string;

  /**
   * The company/organizational name of the operator
   */
  networkName: string;
};
