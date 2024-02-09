import { CreateConversationRequest } from '../../lib';
import {
  conversation,
  conversationToCreate,
  conversationResponse,
} from '../common';

export default [
  {
    label: 'update conversation',
    requests: [
      [
        `/v1/conversations/${conversationResponse.id}`,
        'PUT',
        {
          name: conversationToCreate.name,
          display_name: conversationToCreate.displayName,
          image_url: conversationToCreate.imageUrl,
          properties: {
            ttl: conversationToCreate?.properties?.ttl,
            type: conversationToCreate?.properties?.type,
            custom_sort_key: conversationToCreate?.properties?.customSortKey,
            custom_data: conversationToCreate?.properties?.customData,
          },
          numbers: conversationToCreate?.numbers,
          callback: {
            url: conversationToCreate?.callback?.url,
            event_mask: conversationToCreate?.callback?.eventMask,
            params: conversationToCreate?.callback?.params,
            method: conversationToCreate?.callback?.method,
          }
        } as CreateConversationRequest,
      ],
    ],
    responses: [[200, conversationResponse]],
    clientMethod: 'updateConversation',
    parameters: [
      {
        ...conversationToCreate,
        id: conversationResponse.id
      }
    ],
    generator: false,
    error: false,
    expected: conversation,
  },
];
