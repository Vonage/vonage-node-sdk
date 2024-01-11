import { VerifyRequestResponse } from './Response';

/**
 * Represents a Verify Check response.
 */
export type VerifyCheck = VerifyRequestResponse & {
    /**
     * The unique identifier for the Verify request.
     */
    requestId: string

    /**
     * The unique identifier for the Verify event.
     */
    eventId?: string

    /**
     * The error message, if any, associated with the Verify Check.
     */
    errorText?: string

    /**
     * The estimated price for the messages sent during the Verify Check.
     */
    estimatedPriceMessagesSent?: string
}
