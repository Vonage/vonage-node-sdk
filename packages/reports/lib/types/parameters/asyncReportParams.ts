/**
 * Additional parameters for asynchronous report requests.
 */
export type AsyncReportParams = {
  /**
   * Whether to include records from subaccounts in the report.
   */
  includeSubaccounts?: boolean,

  /**
   * URL to receive a callback notification when the report is ready.
   */
  callbackUrl?: string,
}
