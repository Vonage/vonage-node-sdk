/**
 * Represents the response of an unblock request.
 */
/**
 * Represents the response of an unblock request.
 */
export type UblockRequestResponse = {
    /**
     * The network associated with the unblock request.
     */
    network: string;

    /**
     * The date and time until which the unblock is valid.
     */
    unblocked_until: string;
}
