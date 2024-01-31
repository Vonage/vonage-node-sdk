import { Client } from '@vonage/server-client';
import { NetworkClient, Purpose, Scope } from '@vonage/network-client';
import { SIMSwapResponse, SIMSwapParameters } from './types';

export class SIMSwap extends NetworkClient {
  async checkSwapSim(params: SIMSwapParameters): Promise<boolean> {
    this._msisdn = params.phoneNumber;
    this.purpose = Purpose.FRAUD_PREVENTION_AND_DETECTION;
    this.scope = Scope.CHECK_SIM_SWAP;
    const resp = await this.sendPostRequest<SIMSwapResponse>(
      `${this.config.networkApiHost}/camara/sim-swap/v040/check`,
      Client.transformers.camelCaseObjectKeys(params, true),
    );

    return resp.data.swapped;
  }
}
