/**
 * Represents the response structure when performing a top-up operation for account balance.
 *
 * @remarks
 * You can top up your account using this API when you have enabled auto-reload in the dashboard.
 * The amount added by the top-up operation will be the same amount as was added in the payment when
 * auto-reload was enabled. Your account balance is checked every 5-10 minutes and if it falls below
 * the threshold and auto-reload is enabled, then it will be topped up automatically. Use this endpoint
 * if you need to top up at times when your credit may be exhausted more quickly than the auto-reload
 * may occur.
 */
export type TopUpBalanceResponse = {
  /**
   * The code associated with any potential errors during the top-up process.
   */
  'error-code': string;

  /**
   * A descriptive label for the error code.
   */
  'error-code-label': string;
}
