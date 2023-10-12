import { Client } from './client';
import { AuthenticationType } from './enums/AuthenticationType';
import debug from 'debug';
import { VetchError, VetchOptions, VetchResponse } from '@vonage/vetch';
import { Response } from 'node-fetch';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const log = debug('vonage:server-client');

/**
 * A client for downloading files from Vonage.
 *
 * @extends Client
 */
export class FileClient extends Client {
  public authType = AuthenticationType.JWT;

  protected saveFilePath: string = '';

  /**
   * Downloads a file from Vonage and saves it to a specified path.
   *
   * @param {string} file - The URL or ID of the file to be downloaded.
   * @param {string} path - The path where the downloaded file should be saved.
   *
   * @throws {Error} Throws an error if the file could not be downloaded or saved.
   *
   * @return {Promise<void>} Resolves when the file is successfully downloaded and saved.
   */
  async downloadFile(file: string, path: string): Promise<void> {
    log(`Downloading file: ${file}`);
    let fileId = file;
    try {
      const fileURL = new URL(file);
      fileId = fileURL.pathname.split('/').pop() || '';
    } catch (_) {
      log(`Not a url`);
    }

    log(`File Id ${fileId}`);
    this.saveFilePath = path;
    await this.sendGetRequest<string>(
      `${this.config.apiHost}/v1/files/${fileId}`,
    );

    log('File saved');
  }

  /**
   * Parses the API response and saves the file to the specified path.
   *
   * @param {VetchOptions} request - The request options.
   * @param {Response} response - The response object from the API.
   *
   * @throws {VetchError} Throws an error if the response is not as expected.
   *
   * @return {Promise<VetchResponse<T>>} Returns a parsed response.
   * @protected
   */
  protected async parseResponse<T>(
    request: VetchOptions,
    response: Response,
  ): Promise<VetchResponse<T>> {
    if (!response.ok) {
      throw new VetchError(
        `Unexpected response when downloading file: ${response.statusText}`,
        request,
      );
    }

    log(`Saving to ${this.saveFilePath}`);
    await pipeline(response.body, createWriteStream(this.saveFilePath));

    const responseHeaders = {};

    for (const [header, value] of response.headers.entries()) {
      Object.assign(response, header, value);
    }

    return {
      data: this.saveFilePath as T,
      config: request,
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
      request: request,
    };
  }
}
