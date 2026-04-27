/**
 * @typedef {Object} AudioSettingsResponse
 * @property {boolean} enabled - Indicates whether audio is enabled.
 * @property {boolean} earmuffed - Indicates whether audio is earmuffed.
 * @property {boolean} muted - Indicates whether audio is muted.
 * @property {boolean} audio - Indicates whether audio is active.
 */

/**
 * Type representing the joined initiator as its returned from the API.
 *
 * @typedef {Object} InitiatorJoinedResponse
 */

/**
 * Type representing the invited initiator as its returned from the API.
 *
 * @typedef {Object} InitiatorInvitedResponse
 */

/**
 * A Mmbmer as its returned from the API
 *
 * @typedef {Object} MemberResponse
 * @property {string  state: MemberState  _embedded: { user: MemberUserResponse; }  timestamp: { invited: string;  joined: string;  left: string; }} id - The member's id The member's state The matching user for this member. Timestamps for various states of the member. Timestamp when the member was invited. Timestamp when the member joined. Timestamp when the member left.
 * @property {InitiatorJoinedResponse | InitiatorInvitedResponse} initiator - The initiator of the member's joining.
 * @property {AnyChannel} channel - The channel associated with the member.
 * @property {Object} media - Media-related information for the member. Audio settings for the member. Indicates whether audio is active.
 * @property {string} knocking_id - The knocking ID for the member.
 * @property {string} invited_by - The user who invited the member.
 */

export {};
