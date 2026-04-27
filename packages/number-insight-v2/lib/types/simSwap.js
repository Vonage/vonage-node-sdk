/**
 * Represents the result of the sim_swap insight operation.
 *
 * @typedef {Object} SimSwap
 * @property {Status} status - The status of the sim_swap call. Must be one of the values from the 'Status' enum.
 * @property {boolean} [swapped] - true if the sim was swapped in the last 7 days, false otherwise. Returned only if the sim swap check succeeds.
 * @property {string} [reason] - The reason for a sim swap error response. Returned only if the sim swap check fails.
 */

export {};
