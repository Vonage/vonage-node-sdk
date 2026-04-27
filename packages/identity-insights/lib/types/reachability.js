/**
 * Represents the result of the reachability insights.
 *
 * @typedef {Object} Reachability
 * @property {StatusType} status - The status of the insight call.
 * @property {string} [latestStatusAt] - Last time that the associated device connectivity status was updated Example: "2025-10-07T12:34:56Z"
 * @property {boolean} [isReachable] - Indicate whether the device is connected to the network
 * @property {Array} [connectivity] - Indicates if the device is connected to the network for DATA or SMS. Only prresent if isReachable = True
 */

export {};
