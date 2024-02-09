import {
  UpdateMemberParameters,
  MemberState,
} from '../../lib';
import {
  conversationResponse,
  member,
  memberResponse,
} from '../common';

export default [
  {
    label: 'update a member to joined',
    requests: [
      [
        `/v1/conversations/${conversationResponse.id}/members/${memberResponse.id}`,
        'PATCH',
        {
          state: MemberState.JOINED,
          from: 'USR-00000000-0000-0000-0000-000000000001',
        },
      ],
    ],
    responses: [[200, memberResponse]],
    clientMethod: 'updateMember',
    parameters: [
      conversationResponse.id,
      memberResponse.id,
      {
        state: MemberState.JOINED,
        from: 'USR-00000000-0000-0000-0000-000000000001',
      } as UpdateMemberParameters
    ],
    generator: false,
    error: false,
    expected: member,
  },
  {
    label: 'update a member to left',
    requests: [
      [
        `/v1/conversations/${conversationResponse.id}/members/${memberResponse.id}`,
        'PATCH',
        {
          state: MemberState.LEFT,
          from: 'USR-00000000-0000-0000-0000-000000000001',
          reason: {
            code: 'reason_code',
            text: 'reason_text',
          }
        },
      ],
    ],
    responses: [[200, memberResponse]],
    clientMethod: 'updateMember',
    parameters: [
      conversationResponse.id,
      memberResponse.id,
      {
        state: MemberState.LEFT,
        from: 'USR-00000000-0000-0000-0000-000000000001',
        reason: {
          code: 'reason_code',
          text: 'reason_text',
        }
      } as UpdateMemberParameters
    ],
    generator: false,
    error: false,
    expected: member,
  },
];
