import { SearchCheckStatus } from '../../enums';

/**
 * Represents the response data for searching check information.
 */
export type SearchCheckInformationResponse = {
    /**
     * The date when the check information was received.
     */
    date_received: string;

    /**
     * The code associated with the check information.
     */
    code: string;

    /**
     * The status of the search check.
     */
    status: SearchCheckStatus;

    /**
     * The IP address associated with the check information.
     */
    ip_address: string;
}
