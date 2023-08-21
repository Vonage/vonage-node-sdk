import { Client } from './client';
import { AuthenticationType } from './enums/AuthenticationType';
import { writeFileSync } from 'fs';
import debug from 'debug';

const log = debug('vonage:server-client');

export class FileClient extends Client {
  protected authType = AuthenticationType.JWT;

  async downloadFile(file: string, path: string): Promise<void> {
    log(`Downloading file: ${file}`);
    let fileId = file;
    try {
      const fileURL = new URL(file);
      fileId = fileURL.pathname.split('/').pop();
    } catch (_) {
      log(`Not a url`);
    }

    log(`File Id ${fileId}`);
    const resp = await this.sendGetRequest<string>(
      `${this.config.apiHost}/v1/files/${fileId}`,
    );

    log(`Saving to ${path}`);
    writeFileSync(path, resp.data);
    log('File saved');
  }
}
