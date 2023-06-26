import { RecordAction } from './RecordAction';
import { ConversationAction } from './ConversationAction';
import { ConnectAction } from './ConnectAction';
import { TalkAction } from './TalkAction';
import { StreamAction } from './StreamAction';
import { InputAction } from './InputAction';
import { NotifyAction } from './NotifyAction';

export type NCCOAction =
  | ConnectAction
  | ConversationAction
  | InputAction
  | NotifyAction
  | RecordAction
  | StreamAction
  | TalkAction;
