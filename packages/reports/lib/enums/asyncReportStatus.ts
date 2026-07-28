/**
 * Status of an asynchronous report request.
 */
export enum AsyncReportStatus {
  /**
   * The report request has been received and is queued for processing.
   */
  PENDING = 'PENDING',

  /**
   * The report is currently being generated.
   */
  PROCESSING = 'PROCESSING',

  /**
   * The report was generated successfully and is ready to download.
   */
  SUCCESS = 'SUCCESS',

  /**
   * The report request was cancelled before it completed.
   */
  ABORTED = 'ABORTED',

  /**
   * The report generation failed.
   */
  FAILED = 'FAILED',

  /**
   * The report was generated but the result set was cut short due to
   * size limits.
   */
  TRUNCATED = 'TRUNCATED',
}
