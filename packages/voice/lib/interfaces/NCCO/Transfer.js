/**
 * Represents a Nexmo Call Control Object (NCCO) transfer action.
 *
 * @typedef {Object} NCCOTransfer
 * @property {string} action - The action type, which is 'transfer'.
 * @property {Object} destination - The destination of the transfer, including the type and NCCO actions. The type of destination, which is 'ncco'. The NCCO actions to be executed at the destination.
 */

/**
 * Represents a Nexmo Call Control Object (NCCO) URL transfer action.
 *
 * @typedef {Object} URLTransfer
 * @property {string} action - The action type, which is 'transfer'.
 * @property {Object} destination - The destination of the transfer, including the type and URL. The type of destination, which is 'url'. The URL to which the call will be transferred.
 */

export {};
