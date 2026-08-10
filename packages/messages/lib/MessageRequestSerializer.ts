import { SendMessageParams, AnyChannel, MessageWithFailover, RCSCustomParams } from './types/index.js';
import { Client } from '@vonage/server-client';
import { Channels } from './enums/Channels.js';

/**
 * Some channels have specific formats when sending the request. This function
 * adjusts the request before sending
 *
 * @todo Break out each channel into separate files if this grows
 * @param {SendMessageParams | AnyChannel | MessageWithFailover} params - The
 * message parameters
 *
 * @return {SendMessageParams | AnyChannel | MessageWithFailover}
 */
export const messageRequestSerializer = (params: SendMessageParams | AnyChannel | MessageWithFailover): SendMessageParams | AnyChannel | MessageWithFailover => {
  const data = Client.transformers.snakeCaseObjectKeys(params, true) as AnyChannel;
  const channel = (params as AnyChannel)?.channel;

  switch (channel) {
    case Channels.RCS:
      if ('custom' in data) {
        data.custom = (params as RCSCustomParams).custom;
      }
      break;
    case Channels.EMAIL:
      if ('email' in data && Array.isArray(data.email.cc) && data.email.cc.length < 1) {
        data.email.cc = undefined;
      }

      if ('email' in data && Array.isArray(data.email.bcc) && data.email.bcc.length < 1) {
        data.email.bcc = undefined;
      }
      break;
    default:
      break;
  }

  return data;
};
