import { NetworkClient } from '../lib';
import { VetchOptions, VetchResponse } from '@vonage/vetch';

export const BASE_URL = 'https://api.nexmo.com/';

export class TestNetworkClient extends NetworkClient {
  async testRequest<T = void>(request: VetchOptions): Promise<VetchResponse<T>> {
    return await this.sendRequest<T>(request);
  }
}
