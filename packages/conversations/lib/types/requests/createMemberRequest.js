/**
 * @typedef {Object} AudioSettingsRequest
 * @property {boolean} enabled - Indicates whether audio is enabled.
 * @property {boolean} earmuffed - Indicates whether audio is earmuffed.
 * @property {boolean} muted - Indicates whether audio is muted.
 * @property {boolean} audio - Indicates whether audio is active.
 */

/**
 * A Member as its sent to the API
 *
 * @typedef {Object} CreateMemberRequest
 * @property {MemberState} state - The member's state
 * @property {Object} user - The matching user for this member. The user's ID. The user's name.
 * @property {AnyChannel} channel - The channel associated with the member.
 * @property {Object} media - Media-related information for the member. Audio settings for the member. Indicates whether the member has audio.
 * @property {string} knocking_id - The knocking ID for the member.
 * @property {string} member_id_inviting - The member who invited the member.
 * @property {string} from - The user who invited the member.
 */

export {};
