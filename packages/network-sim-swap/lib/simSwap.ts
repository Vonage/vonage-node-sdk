import { Client } from '@vonage/server-client';
import { NetworkClient } from '@vonage/network-client';
import { SIMSwapResponse, SIMSwapParameters } from './types';

export class SIMSwap extends NetworkClient {
  async swapSim(params: SIMSwapParameters): Promise<boolean> {
    const resp = await this.sendPostRequest<SIMSwapResponse>(
      `${this.config.networkApiHost}/v1/sim_swap`,
      Client.transformers.camelCaseObjectKeys(params, true),
    );

    return resp.data.swapped;
  }
}
