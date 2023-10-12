/**
 * Type definition for parameters used to modify a subaccount's properties.
 */
export type SubAccountModifyParameters = {
  /**
   * (Optional) Indicates whether the subaccount should be suspended (true) or not (false).
   */
  suspended?: boolean;

  /**
   * (Optional) New name for the subaccount.
   */
  name?: string;
};
