/**
 * Type representing parameters for sending an SMS.
 * Describes the structure of parameters that can be used when sending an SMS, including sender, recipient,
 * message content, and additional options.
 *
 * @typedef {Object} SMSParams
 * @property {string} from - The sender's phone number or name.
 * @property {string} to - The recipient's phone number in E.164 format.
 * @property {string} [text] - The text content of the SMS message (optional).
 * @property {number} [ttl] - The time-to-live (TTL) duration in milliseconds for delivery attempts (optional).
 * @property {boolean} [statusReportReq] - Indicates if a delivery receipt is requested (optional).
 * @property {string} [callback] - The webhook callback URL for receiving delivery receipts (optional).
 * @property {MessageClassEnum} [messageClass] - The message class (optional).
 * @property {TypeEnum} [type] - The format of the message body (optional).
 * @property {string} [body] - The binary body of the message (optional).
 * @property {string} [udh] - The User Data Header (UDH) for binary messages (optional).
 * @property {number} [protocolId] - The protocol identifier for binary messages (optional).
 * @property {string} [title] - The title of the message (optional).
 * @property {string} [url] - The URL for WAP Push messages (optional).
 * @property {string} [validity] - The validity period of the message (optional).
 * @property {string} [clientRef] - Your client reference for the message (optional).
 * @property {string} [accountRef] - An optional string used to identify separate accounts using the SMS endpoint for billing purposes (optional).
 * @property {string} [entityId] - An optional entity ID for regulatory requirements (optional).
 * @property {string} [contentId] - An optional content ID for regulatory requirements (optional).
 * @property {boolean  poolId?: string} [trustedNumber] - Setting this parameter to true overrides, on a per-message basis, any protections set up via Fraud Defender (Traffic Rules, SMS Burst Protection, AIT Protection). This parameter only has any effect for accounts subscribed to Fraud Defender Premium. The ID of the Number Pool to use as the sender of this message. If specified, a number from the pool will be used as the from number. The from parameter is still required even when specifying a pool-id and will be used as a fall-back if the number pool cannot be used. @see https://developer.vonage.com/en/numbers/number-pools-api/overview
 */

export {};
