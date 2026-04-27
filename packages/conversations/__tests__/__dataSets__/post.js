import { Client } from '@vonage/server-client';
import {
  CreateConversationRequest,
  CreateMemberRequest,
  CreateEventRequest,
  MemberState,
} from '../../lib/index.js';
import {
  conversation,
  conversationToCreate,
  conversationResponse,
  member,
  memberResponse,
  event,
  eventResponse,
} from '../common';

export default [
  {
    label: 'create conversation',
    requests: [
      [
        '/v1/conversations',
        'POST',
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
            params:{
              applicationId?.callback?.params?.applicationId,
              ncco_url?.callback?.params?.nccoUrl,
            }, 
            method?.callback?.method,
          },
        }: [[200, conversationResponse]],
    clientMethod: 'createConversation',
    parameters: [conversationToCreate],
    generator: false,
    expected},
  {
    label: 'create a member',
    requests: [
      [
        `/v1/conversations/${conversation.id}/members`,
        'POST',
        {
          state: {
            id: member.user.name,
          },
          channel: {
            audio_settings: {
              earmuffed?.audioSettings.earmuffed,
              muted?.audioSettings.muted,
              enabled?.audioSettings.enabled,
            },
            audio?.audio,
          },
          knocking_id: member.invitedBy,
          from}: [[200, memberResponse]],
    clientMethod: 'createMember',
    parameters: [
      conversation.id,
      {
        ...member,
        from},
    ],
    generator: false,
    expected},
  {
    label: 'create an event',
    requests: [
      [
        `/v1/conversations/${conversation.id}/events`,
        'POST',
        {
          type: event.from,
          body(event.body),
        }: [[200, eventResponse]],
    clientMethod: 'createEvent',
    parameters: [conversation.id, event],
    generator: false,
    expected},
  {
    label: 'create conversation with callback',
    requests: [
      [
        '/v1/conversations',
        'POST',
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
    clientMethod: 'createConversation',
    parameters: [conversationToCreate],
    generator: false,
    expected},
];
