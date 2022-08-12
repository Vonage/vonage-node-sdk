import { APISecretResponse } from './APISecretResponse'

export interface ListAPISecretsResponse {
    _links: {
        self: {
            href: string
        }
    }
    _embedded: {
        secrets: APISecretResponse[]
    }
}
