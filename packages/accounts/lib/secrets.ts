import { AuthenticationType, Client } from '@vonage/server-client';
import { APISecretResponse } from './interfaces/Response/APISecretResponse';
import {
    ListAPISecretsResponse,
} from './interfaces/Response/ListAPISecretsResponse';

export class Secrets extends Client {
    protected authType = AuthenticationType.BASIC;

    public async createSecret(
        apiKey: string,
        secret: string,
    ): Promise<APISecretResponse> {
        const response = await this.sendPostRequest<APISecretResponse>(
            `${this.config.apiHost}/accounts/${apiKey}/secrets`,
            { secret },
        );
        return response.data;
    }

    public async deleteSecret(apiKey: string, id: string): Promise<void> {
        await this.sendDeleteRequest<void>(
            `${this.config.apiHost}/accounts/${apiKey}/secrets/${id}`,
        );
    }

    public async getSecret(
        apiKey: string,
        id: string,
    ): Promise<APISecretResponse> {
        const response = await this.sendGetRequest<APISecretResponse>(
            `${this.config.apiHost}/accounts/${apiKey}/secrets/${id}`,
        );
        return response.data;
    }

    public async listSecrets(apiKey: string): Promise<ListAPISecretsResponse> {
        const response = await this.sendGetRequest<ListAPISecretsResponse>(
            `${this.config.apiHost}/accounts/${apiKey}/secrets`,
        );
        return response.data;
    }
}
