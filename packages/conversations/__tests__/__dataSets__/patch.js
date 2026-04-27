import {
  UpdateMemberParameters,
  MemberState,
} from '../../lib/index.js';
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
          state: 'USR-00000000-0000-0000-0000-000000000001',
        },
      ],
    ],
    responses: [[200, memberResponse]],
    clientMethod: 'updateMember',
    parameters: [
      conversationResponse.id,
      memberResponse.id,
      {
        state: 'USR-00000000-0000-0000-0000-000000000001',
      }: false,
    expected},
  {
    label: 'update a member to left',
    requests: [
      [
        `/v1/conversations/${conversationResponse.id}/members/${memberResponse.id}`,
        'PATCH',
        {
          state: 'USR-00000000-0000-0000-0000-000000000001',
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
        state: 'USR-00000000-0000-0000-0000-000000000001',
        reason: {
          code: 'reason_code',
          text: 'reason_text',
        }
      }: false,
    expected},
];
