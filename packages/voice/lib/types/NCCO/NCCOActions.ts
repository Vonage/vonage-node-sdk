import { RecordAction } from './RecordAction.js';
import { ConversationAction } from './ConversationAction.js';
import { ConnectAction } from './ConnectAction.js';
import { TalkAction } from './TalkAction.js';
import { StreamAction } from './StreamAction.js';
import { InputAction } from './InputAction.js';
import { NotifyAction } from './NotifyAction.js';

/**
 * Represents a Nexmo Call Control Object (NCCO) action, which can be one of the following types:
 * - ConnectAction
 * - ConversationAction
 * - InputAction
 * - NotifyAction
 * - RecordAction
 * - StreamAction
 * - TalkAction
 *
 * An NCCO action defines a specific action or behavior in a call flow, and these actions can be combined
 * to create complex call scenarios when constructing NCCOs.
 */
export type NCCOAction =
  | ConnectAction
  | ConversationAction
  | InputAction
  | NotifyAction
  | RecordAction
  | StreamAction
  | TalkAction;
