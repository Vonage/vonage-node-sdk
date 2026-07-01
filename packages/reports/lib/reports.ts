import { AuthenticationType, Client, FileClient } from '@vonage/server-client';
import { AnyAsyncReportParams, AnyReportParams } from './types/parameters/index.js';
import { AsyncReportResponse } from './types/responses/asyncReportResponse.js';
import { SyncRecordsResponse } from './types/responses/syncRecordsResponse.js';
import { ResponseTypes } from '@vonage/vetch';

const BASE_URL = '/v2/reports';

/**
 * Client class to interact with the Vonage Reports API, which enables
 * users to request reports of activity for their Vonage account.
 *
 * @remarks
 * Supports both synchronous reports (immediate, smaller datasets) and
 * asynchronous reports (background processing for large datasets up to
 * tens of millions of records).
 *
 * @example
 * Create a standalone Reports client
 *
 * ```ts
 * import { Reports } from '@vonage/reports';
 *
 * const reportsClient = new Reports({
 *   apiKey: VONAGE_API_KEY,
 *   apiSecret: VONAGE_API_SECRET,
 * });
 * ```
 */
export class Reports extends FileClient {
  protected authType = AuthenticationType.BASIC;

  /**
   * Retrieves records synchronously based on the provided parameters.
   * Optimized for frequent, periodic retrievals of small batches of
   * data (up to tens of thousands of records per query).
   *
   * @param {AnyReportParams} params - Parameters for filtering the
   *   records, including required `product` and `accountId`.
   * @return {Promise<SyncRecordsResponse>} A promise that resolves to
   *   a {@link SyncRecordsResponse} containing the matching records and
   *   pagination metadata.
   *
   * @example
   * Get a page of outbound SMS records
   *
   * ```ts
   * const response = await reportsClient.getRecords({
   *   product: Product.SMS,
   *   accountId: VONAGE_API_KEY,
   *   direction: Direction.OUTBOUND,
   *   dateStart: '2024-01-01T00:00:00Z',
   *   dateEnd: '2024-01-02T00:00:00Z',
   * });
   *
   * console.log(`Total records: ${response.itemsCount}`);
   * for (const record of response.records) {
   *   console.log(record.id);
   * }
   * ```
   */
  async getRecords(params: AnyReportParams): Promise<SyncRecordsResponse> {
    const resp = await this.sendGetRequest<SyncRecordsResponse>(
      `${this.config.apiHost}${BASE_URL}/records`,
      Client.transformers.snakeCaseObjectKeys(params, true),
    );

    return Client.transformers.camelCaseObjectKeys(
      resp.data,
      true,
    ) as SyncRecordsResponse;
  }

  /**
   * Creates an asynchronous report generation request. The report is
   * processed in the background and can be polled with
   * {@link getReport}. Optimized for infrequent, large data queries.
   *
   * @remarks
   * Vonage recommends limiting async queries to a maximum of 7 million
   * records by setting `dateStart` and `dateEnd` accordingly. On
   * average, the API takes 5–10 minutes to generate 1 million records.
   *
   * @param {AnyAsyncReportParams} params - Parameters for the report,
   *   including required `product` and `accountId`.
   * @return {Promise<AsyncReportResponse>} A promise that resolves to
   *   an {@link AsyncReportResponse} containing the report ID and
   *   initial status.
   *
   * @example
   * Create an async SMS report
   *
   * ```ts
   * const report = await reportsClient.createReport({
   *   product: Product.SMS,
   *   accountId: VONAGE_API_KEY,
   *   dateStart: '2024-01-01T00:00:00Z',
   *   dateEnd: '2024-02-01T00:00:00Z',
   *   callbackUrl: 'https://example.com/webhook',
   * });
   *
   * console.log(`Report ID: ${report.requestId}`);
   * console.log(`Status: ${report.requestStatus}`);
   * ```
   */
  async createReport(
    params: AnyAsyncReportParams,
  ): Promise<AsyncReportResponse> {
    const resp = await this.sendPostRequest<AsyncReportResponse>(
      `${this.config.apiHost}${BASE_URL}`,
      Client.transformers.snakeCaseObjectKeys(params, true),
    );

    return Client.transformers.camelCaseObjectKeys(
      resp.data,
      true,
    ) as AsyncReportResponse;
  }

  /**
   * Retrieves the status and details of an asynchronous report by its
   * report ID.
   *
   * @remarks
   * Reports are retained for 4 days. Requests for reports older than
   * 4 days will return a 404.
   *
   * @param {string} reportId - The unique identifier of the report
   *   (`requestId` from the {@link createReport} response).
   * @return {Promise<AsyncReportResponse>} A promise that resolves to
   *   an {@link AsyncReportResponse} with the current report status
   *   and download link when complete.
   *
   * @example
   * Poll a report until it is complete
   *
   * ```ts
   * let report = await reportsClient.getReport(reportId);
   *
   * while (report.requestStatus === AsyncReportStatus.PENDING
   *   || report.requestStatus === AsyncReportStatus.PROCESSING) {
   *   await new Promise((resolve) => setTimeout(resolve, 5000));
   *   report = await reportsClient.getReport(reportId);
   * }
   *
   * console.log(`Download: ${report.links.downloadReport?.href}`);
   * ```
   */
  async getReport(reportId: string): Promise<AsyncReportResponse> {
    const resp = await this.sendGetRequest<AsyncReportResponse>(
      `${this.config.apiHost}${BASE_URL}/${reportId}`,
    );

    return Client.transformers.camelCaseObjectKeys(
      resp.data,
      true,
    ) as AsyncReportResponse;
  }

  /**
   * Cancels a pending or processing asynchronous report. Reports that
   * have already completed cannot be cancelled.
   *
   * @param {string} reportId - The unique identifier of the report to
   *   cancel (`requestId` from the {@link createReport} response).
   * @return {Promise<AsyncReportResponse>} A promise that resolves to
   *   an {@link AsyncReportResponse} reflecting the cancelled status.
   *
   * @example
   * Cancel a report
   *
   * ```ts
   * const report = await reportsClient.cancelReport(reportId);
   * console.log(`Status: ${report.requestStatus}`);
   * ```
   */
  async cancelReport(reportId: string): Promise<AsyncReportResponse> {
    const resp = await this.sendDeleteRequest<AsyncReportResponse>(
      `${this.config.apiHost}${BASE_URL}/${reportId}`,
    );

    return Client.transformers.camelCaseObjectKeys(
      resp.data,
      true,
    ) as AsyncReportResponse;
  }

  /**
   * Download the report of a call to the specified file path.
   *
   * Calls `getReport` to fecth the url to downlaod the file report. If the
   * report does not have `_links.download_report` set, then this will throw
   * an error.
   *
   * @param {string} reportId - The UUID of the report to download
   * @param {string} path - The local file path where the report will be saved.
   * @return {Promise<void>} A promise that resolves when the report has been successfully downloaded.
   *
   * @example
   * ```ts
   * await voiceClient.downloadReport(REPORT_UUID, './report.csv');
   * ```
   */
  async getReportData(reportId: string, path: string): Promise<void> {
    const report = await this.getReport(reportId);

    const reportLink = report?.links?.downloadReport?.href;

    if (!reportLink) {
      throw new Error('Report does not have a file to download');
    }

    this.config.responseType = ResponseTypes.stream;

    return await this.downloadFile(reportLink, path);
  }
}
