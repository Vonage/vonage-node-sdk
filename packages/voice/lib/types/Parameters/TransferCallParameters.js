/**
 * Destination using URL.
 *
 * @typedef {Object} TransferWithURL
 * @property {Array} ncco
 */

/**
 * Destination using NCCO.
 *
 * @typedef {Object} TransferWithNCCO
 * @property {Array} url
 */

/**
 * Represents parameters for transferring a call to another destination.
 *
 * @typedef {Object} TransferCallParameters
 * @property {'transfer'} action - The action type indicating a call transfer.
 * @property {Object} destination - The destination of the transfer, which can be specified using NCCO or a URL. The type of destination, either 'ncco' for NCCO-based transfer or 'url' for URL-based transfer.
 */

export {};
