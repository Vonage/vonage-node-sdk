import { VerifyCheckErrorResponse } from './Response';

/**
 * Represents an error that occurred during the verification check process.
 */
export type VerifyCheckError = VerifyCheckErrorResponse & {
    /**
     * The unique identifier of the request.
     */
    requestId: string

    /**
     * The unique identifier of the error.
     */
    errorId: string
}
