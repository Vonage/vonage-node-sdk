import { Client, AuthenticationType } from '@vonage/server-client';
import { Command } from './enums/index.js';
import {
  VerifyControl,
  VerifyControlError,
  VerifyControlErrorResponse,
  VerifyControlResponse,
  VerifyCheckError,
  VerifyCheck,
  VerifyCheckResponse,
  VerifyRequestResponse,
  VerifySearchResponse,
  VerifySearch,
  VerifySearchError,
  VerifyRequestErrorResponse,
  VerifyError,
  VerifyRequest,
  VerificationParameters,
  PSD2Parameters,
} from './types/index.js';
import omit from 'lodash.omit';

/**
 * The Verify class provides methods for managing and performing verification processes using the Vonage Verify API.
 *
 * It allows you to initiate new verification requests, check verification codes, search for verification request
 * details, and perform control actions like canceling or triggering the next event for a verification process.
 *
 * @example
 * Create a standalone Verify client
 *
 * ```ts
 * import { Verify } from '@vonage/verify';
 *
 * const verifyClient = new Verify({
 *  apiKey: VONAGE_API_KEY,
 *  apiSecret: VONAGE_API_SECRET
 * });
 * ```
 *
 * @example
 * Create an Verify client from the Vonage client
 *
 * ```ts
 * import { Vonage } from '@vonage/server-client';
 *
 * const vonage = new Vonage({
 *   apiKey: VONAGE_API_KEY,
 *   apiSecret: VONAGE_API_SECRET
 * });
 *
 * const verifyClient = vonage.verify;
 * ```
 */
export class Verify extends Client {

  protected authType?: AuthenticationType = AuthenticationType.KEY_SECRET;

  /**
   * Sends a control command for a specific verification request.
   *
   * @param {Command} command - The control command to send, either "cancel" or "trigger_next_event".
   * @param {string} requestId - The request ID of the verification to control.
   * @return {Promise<VerifyControl | VerifyControlError>} A Promise that resolves to a `VerifyControl` object containing the control response on success or a `VerifyControlError` object on error.
   * @throws {VerifyControlError} If an error occurs while sending the control command.
   *
   * @example
   * Cancel a verification request
   * ```ts
   * import { Command, CheckStatus } from '@vonage/verify';
   *
   * const result = await verifyClient.sendControl(Command.CANCEL, 'REQUEST_ID')
   * if (result.status === CheckStatus.SUCCESS) {
   *   console.log('Verification request canceled.');
   *   console.log(result.status);
   * } else {
   *   console.log('Error canceling verification request.');
   *   console.log(result.errorText);
   * }
   * ```
   *
   * @example
   * Trigger the next event for a verification request
   * ```ts
   * import { Command, CheckStatus } from '@vonage/verify';
   *
   * const result = await verifyClient.sendControl(Command.TRIGGER_NEXT_EVENT, 'REQUEST_ID')
   * if (result.status === CheckStatus.SUCCESS) {
   *   console.log('Next event triggered');
   *   console.log(result.status);
   * } else {
   *   console.log('Error triggering next event');
   *   console.log(result.errorText);
   * }
   * ```
   */
  public async sendControl(
    command: Command,
    requestId: string,
  ): Promise<VerifyControl | VerifyControlError> {
    const data = {
      request_id: requestId,
      cmd: command,
    };


    const resp = await this.sendPostRequest<
      VerifyControlResponse | VerifyControlErrorResponse
    >(`${this.config.apiHost}/verify/control/json`, data);
    return Client.transformers.camelCaseObjectKeys(
      resp.data,
      true,
      true,
    ) as VerifyControl | VerifyControlError;
  }

  /**
   * Cancels a specific verification request.
   *
   * @param {string} requestId - The request ID of the verification to cancel.
   * @return {Promise<VerifyControl | VerifyControlError>} A Promise that resolves to a `VerifyControl` object containing the control response on success or a `VerifyControlError` object on error.
   * @throws {VerifyControlError} If an error occurs while canceling the verification request.
   *
   * @example
   * ```ts
   * import { CheckStatus } from '@vonage/verify';
   *
   * const result = await verifyClient.cancel('REQUEST_ID')
   *
   * if (result.status === CheckStatus.SUCCESS) {
   *   console.log('Verification request canceled.');
   *   console.log(result.status);
   * } else {
   *   console.log('Error canceling verification request.');
   *   console.log(result.errorText);
   * }
   * ```
   *
   */
  public async cancel(
    requestId: string,
  ): Promise<VerifyControl | VerifyControlError> {
    return this.sendControl(Command.CANCEL, requestId);
  }

  /**
   * Triggers the next verification event for a specific verification request.
   *
   * @param {string} requestId - The request ID of the verification to trigger the next event for.
   * @return {Promise<VerifyControl | VerifyControlError>} A Promise that resolves to a `VerifyControl` object containing the control response on success or a `VerifyControlError` object on error.
   * @throws {VerifyControlError} If an error occurs while triggering the next verification event.
   *
   * @example
   * ```ts
   * import { CheckStatus } from '@vonage/verify';
   *
   * const result = await verifyClient.trigger('REQUEST_ID')
   *
   * if (result.status === CheckStatus.SUCCESS) {
   *   console.log('Verification request canceled.');
   *   console.log(result.status);
   * } else {
   *   console.log('Error canceling verification request.');
   *   console.log(result.errorText);
   * }
   * ```
   */
  public async trigger(
    requestId: string,
  ): Promise<VerifyControl | VerifyControlError> {
    return this.sendControl(Command.TRIGGER_NEXT_EVENT, requestId);
  }

  /**
   * Checks the verification code for a specific verification request.
   *
   * @param {string} requestId - The request ID of the verification to check.
   * @param {string} code - The verification code to check against.
   * @return {Promise<VerifyCheck | VerifyCheckError>} A Promise that resolves to a `VerifyCheck` object containing the verification result on success or a `VerifyCheckError` object on error.
   * @throws {VerifyCheckError} If an error occurs during the verification check.
   *
   * @example
   * ```ts
   * import { CheckStatus } from '@vonage/verify';
   *
   * const result = await verifyClient.check('REQUEST_ID', 'CODE')
   * if (result.status === CheckStatus.SUCCESS) {
   *   console.log('Verification code is valid.');
   * } else {
   *   console.log('Verification code is invalid.');
   * }
   * ```
   */
  public async check(
    requestId: string,
    code: string,
  ): Promise<VerifyCheck | VerifyCheckError> {

    const resp = await this.sendPostRequest<
      VerifyRequestResponse | VerifyRequestErrorResponse
    >(`${this.config.apiHost}/verify/check/json`, {
      request_id: requestId,
      code: code,
    });

    return Client.transformers.camelCaseObjectKeys(
      resp.data,
      true,
      true,
    ) as VerifyCheck | VerifyCheckError;
  }

  /**
   * Searches for the status of a verification request by its request ID.
   *
   * @param {string} requestId - The request ID of the verification to search for.
   * @return {Promise<VerifySearch | VerifySearchError>} A `VerifySearch` object containing the verification details on success or a `VerifySearchError` object on error.
   *
   * @example
   * ```ts
   * const result = await verifyClient.search('REQUEST_ID')
   * if (result.errorText) {
   *   console.log(`Request found with error ${result.errorText}`);
   * } else {
   *   console.log(`Request found and submitted on ${result.dateSubmitted}`);
   * }
   * ```
   */
  public async search(
    requestId: string,
  ): Promise<VerifySearch | VerifySearchError> {
    this.authType = AuthenticationType.QUERY_KEY_SECRET;
    const resp = await this.sendGetRequest<VerifySearchResponse>(
      `${this.config.apiHost}/verify/search/json`,
      { request_id: requestId },
    );

    this.authType = AuthenticationType.KEY_SECRET;
    return Client.transformers.camelCaseObjectKeys(
      resp.data,
      true,
      true,
    ) as VerifySearch | VerifySearchError;
  }

  /**
   * Starts a verification request.
   *
   * @param {VerificationParameters | PSD2Parameters} request - The verification parameters for the request.
   * @return {Promise<VerifyError | VerifyRequest>} A `VerifyError` object on error or a `VerifyRequest` object on success.
   *
   * @example
   * ```ts
   * const result = await verifyClient.start({
   *   number: TO_NUMBER,
   *   brand: BRAND_NAME
   * });
   *
   * if (result.requestId) {
   *   console.log(`Request started with id ${result.requestId}`);
   * } else {
   *   console.log(`Request failed with error: ${result.errorText}`);
   * }
   * ```
   *
   * @example
   * Start a request with PSD2 parameters
   * ```ts
   * const result = await verifyClient.start({
   *   number: TO_NUMBER,
   *   payee: PAYEE,
   *   amount: AMOUNT,
   * })
   * if (result.requestId) {
   *   console.log(`Request started with id ${result.requestId}`);
   * } else {
   *   console.log(`Request failed with error: ${result.errorText}`);
   * }
   * ```
   */
  public async start(
    request: VerificationParameters | PSD2Parameters,
  ): Promise<VerifyError | VerifyRequest> {
    const url
      = 'brand' in request
        ? `${this.config.apiHost}/verify/json`
        : `${this.config.apiHost}/verify/psd2/json`;

    const resp = await this.sendPostRequest<VerifyCheckResponse>(
      url,
      Client.transformers.snakeCaseObjectKeys(omit(request, ['language'])),
    );

    return Client.transformers.camelCaseObjectKeys(
      resp.data,
      true,
      true,
    ) as VerifyError | VerifyRequest;
  }
}
