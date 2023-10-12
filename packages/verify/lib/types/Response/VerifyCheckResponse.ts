import { CheckStatus } from '../../enums';

/**
 * Represents the response object for the Verify Check API.
 */
export type VerifyCheckResponse = {
    /**
     * The unique identifier for the verification request.
     */
    request_id: string;

    /**
     * The status of the verification check.
     */
    status: CheckStatus;

    /**
     * The unique identifier for the verification event.
     */
    event_id?: string;

    /**
     * The price of the verification check.
     */
    price?: string;

    /**
     * The currency of the price.
     */
    currency?: string;
}
