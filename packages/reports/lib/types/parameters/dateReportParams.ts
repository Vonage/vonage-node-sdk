/**
 * Date range parameters for filtering report records.
 */
export type DateReportParams = {
  /**
   * ISO-8601 formatted end date/time for the report range (exclusive).
   * Defaults to the current time if not specified.
   */
  dateEnd?: string,

  /**
   * ISO-8601 formatted start date/time for the report range (inclusive).
   * Defaults to seven days ago if not specified.
   */
  dateStart?: string,
}
