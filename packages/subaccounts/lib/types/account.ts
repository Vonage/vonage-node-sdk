/**
 * Type definition representing an account, which includes properties such as
 * `apiKey`, `name`, `createdAt`, `suspended`, `balance`, and `creditLimit`.
 */
export type Account = {
  /**
   * The API key associated with the account.
   */
  apiKey: string;

  /**
   * The name of the account.
   */
  name: string;

  /**
   * The creation date and time of the account.
   */
  createdAt: string;

  /**
   * The suspension status of the account.
   */
  suspended: boolean;

  /**
   * The balance of the account.
   */
  balance: number;

  /**
   * The credit limit of the account.
   */
  creditLimit: number;
};
