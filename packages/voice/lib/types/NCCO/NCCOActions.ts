import { RecordAction } from './RecordAction';
import { ConversationAction } from './ConversationAction';
import { ConnectAction } from './ConnectAction';
import { TalkAction } from './TalkAction';
import { StreamAction } from './StreamAction';
import { InputAction } from './InputAction';
import { NotifyAction } from './NotifyAction';

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
