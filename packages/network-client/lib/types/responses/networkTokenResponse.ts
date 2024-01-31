export type NetworkTokenResponse = {
  /**
   * The token
   */
  access_token: string;

  /**
   * The type of token
   */
  token_type: 'Bearer';

  /**
   * The time in seconds from now that the token expires
   */
  expires_in: number;
};
