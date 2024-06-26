import { Client } from './client';
import { AuthenticationType } from './enums';
import debug from 'debug';
import { VetchError, HTTPMethods, VetchOptions } from '@vonage/vetch';
import fetch from 'node-fetch';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const log = debug('vonage:file-client');

/**
 * A client for downloading files from Vonage.
 *
 * @extends Client
 */
export class FileClient extends Client {
  protected authType = AuthenticationType.JWT;

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      log('Not a url');
    }

    log(`File Id ${fileId}`);
    const request = await this.addAuthenticationToRequest({
      url: `${this.config.apiHost}/v1/files/${fileId}`,
      method: HTTPMethods.GET,
    } as VetchOptions);
    log('File download request', request);

    const response = await fetch(
      request.url,
      {
        method: request.method,
        headers: request.headers as Record<string, string>,
      },
    );

    log('File download response', response);
    if (!response.ok) {
      throw new VetchError(
        `Unexpected response when downloading file: ${response.statusText}`,
        request,
      );
    }

    log(`Saving to ${path}`);
    await pipeline(response.body, createWriteStream(path));

    log('File saved');
  }
}
