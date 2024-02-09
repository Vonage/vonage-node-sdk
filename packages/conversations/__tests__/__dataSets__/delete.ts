import {
  conversationResponse,
  eventResponse,
} from '../common';

export default [
  {
    label: 'delete a conversation',
    requests: [
      [
        `/v1/conversations/${conversationResponse.id}`,
        'DELETE',
      ],
    ],
    responses: [[204]],
    clientMethod: 'deleteConversation',
    parameters: [conversationResponse.id],
    generator: false,
    error: false,
    expected: undefined,
  },
  {
    label: 'delete an event',
    requests: [
      [
        `/v1/conversations/${conversationResponse.id}/events/${eventResponse.id}`,
        'DELETE',
      ],
    ],
    responses: [[204]],
    clientMethod: 'deleteEvent',
    parameters: [conversationResponse.id, eventResponse.id],
    generator: false,
    error: false,
    expected: undefined,
  }
]
