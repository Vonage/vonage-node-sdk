/**
 * Type representing the joined initiator.
 *
 * @typedef {Object} InitiatorJoined
 */

/**
 * @typedef {Object} InitiatorInvited
 */

/**
 * Type representing a member in a conversation.
 *
 * @typedef {Object} Member
 * @property {string} [id] - The unique ID of the member.
 * @property {MemberState} [state] - The state of the member (INVITED, JOINED, LEFT, UNKNOWN).
 * @property {UserType} user - The user associated with the member. @remarks Either the user id or name is required.
 * @property {Object} [timestamp] - Timestamps for various states of the member. Timestamp when the member was invited. Timestamp when the member joined. Timestamp when the member left.
 * @property {InitiatorJoined | InitiatorInvited} [initiator] - The initiator of the member's joining.
 * @property {AnyChannel} [channel] - The channel associated with the member.
 * @property {Object} [media] - Media-related information for the member. Audio settings for the member. Indicates whether audio is active.
 * @property {string} knockingId - The knocking ID for the member.
 * @property {string} invitedBy - The user who invited the member.
 */

export {};
