/**
 * Parameters for updating a member.
 *
 * @typedef {Object} UpdateMemberParameters
 * @property {MemberState.LEFT | MemberState.JOINED} state - The new state to public set Setting to `MemberState.LEFT` will remove the member from the `reason` is required when setting to `MemberState.JOINED`
 * @property {string} from - Member ID of who is making the update.
 */

export {};
