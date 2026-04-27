/**
 * Configuration options for a SIP call.
 *
 * @typedef {Object} SIPCallSIPConfig
 * @property {string} uri - The SIP URI to initiate the call.
 * @property {string} [from] - The optional "from" field for the SIP call.
 * @property {Object} [headers] - Custom headers to be included in the SIP call.
 * @property {Object} [auth] - Authentication credentials for the SIP call. The username for SIP authentication. The password for SIP authentication.
 * @property {boolean} [secure] - Indicates whether the SIP call should be secure.
 * @property {boolean} [video] - Indicates whether video is enabled for the SIP call.
 * @property {boolean} [observeForceMute] - Indicates whether to observe and force mute for the SIP call.
 */

/**
 * Interface representing options for initiating a SIP call.
 *
 * @typedef {Object} SIPCallOptions
 * @property {string} token - The authentication token for the SIP call.
 * @property {SIPCallSIPConfig} sip - Configuration options for the SIP call.
 */

export {};
