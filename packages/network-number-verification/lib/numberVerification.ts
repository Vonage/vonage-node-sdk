import {
  NetworkAuthParameters,
  NetworkConfigParameters,
  NetworkClient,
  Purpose,
  Scope,
} from '@vonage/network-client';
import {
  NumberVerificationResponse,
  NumberVerificationRequest
} from './types/index.js';

export class NumberVerificationClient extends NetworkClient {
  constructor(auth: NetworkAuthParameters, config?: NetworkConfigParameters) {
    super(auth, config);

    this.purpose = Purpose.FRAUD_PREVENTION_AND_DETECTION;
    this.scope = Scope.NUMBER_VERIFICATION_VERIFY_READ;
  }

  async verifyPhoneNumber(
    phoneNumber: string,
    accessToken?: string,
  ): Promise<boolean> {
    try {
      // Allow acces token to be passed in. This is useful when the client is
      // being used in a multi-tenant environment
      this.accessToken = accessToken || this.accessToken;
      const resp = await this.sendPostRequest<NumberVerificationResponse>(
        `${this.config.networkApiHost}/camara/number-verification/v031/verify`,
        {
          phoneNumber: phoneNumber,
        } as NumberVerificationRequest,
      );

      return resp.data.devicePhoneNumberVerified;
    } finally {
      this.accessToken = accessToken || this.accessToken;
    }

  }
}
