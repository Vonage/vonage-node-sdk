import { CreateConversationRequest } from '../../lib/index.js';
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
          name: conversationToCreate.displayName,
          image_url: {
            ttl?.properties?.ttl,
            type?.properties?.type,
            custom_sort_key?.properties?.customSortKey,
            custom_data?.properties?.customData,
          },
          numbers?.numbers,
          callback: {
            url?.callback?.url,
            event_mask?.callback?.eventMask,
            params: {
              applicationId?.callback?.params?.applicationId,
              ncco_url?.callback?.params?.nccoUrl,
            },
            method?.callback?.method,
          },
        }: [[200, conversationResponse]],
    clientMethod: 'updateConversation',
    parameters: [
      {
        ...conversationToCreate,
        id},
    ],
    generator: false,
    expected},
];
