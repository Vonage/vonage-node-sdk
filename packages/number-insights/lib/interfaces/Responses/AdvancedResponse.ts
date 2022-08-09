import { LookupOutcome } from "../../enums/LookupOutcome"
import { Reachable } from "../../enums/Reachable"
import { ValidNumber } from "../../enums/ValidNumber"
import { StandardResponse } from "./StandardResponse"

export interface AdvancedResponse extends StandardResponse {
    roaming: {
        status: string
        roaming_country_code: string
        roaming_network_code: string
        roaming_network_name: string
    } | string
    lookup_outcome: LookupOutcome
    lookup_outcome_message: string
    valid_number: ValidNumber,
    reachable: Reachable,
    real_time_data: {
        active_status: string
        handset_status: string
    }
}