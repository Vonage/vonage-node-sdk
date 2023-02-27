import { VerifyRequest } from './VerifyRequest';

export interface VerifyError extends VerifyRequest {
    error_text: string
    errorText: string
    network?: string
}
