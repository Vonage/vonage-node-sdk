import { ConnectAction } from '../../interfaces/NCCO/ConnectAction';
import { ConversationAction } from '../../interfaces/NCCO/ConversationAction';
import { InputAction } from '../../interfaces/NCCO/InputAction';
import { NotifyAction } from '../../interfaces/NCCO/Notify';
import { RecordAction } from '../../interfaces/NCCO/RecordAction';
import { StreamAction } from '../../interfaces/NCCO/StreamAction';
import { TalkAction } from '../../interfaces/NCCO/TalkAction';

export type Action =
    | ConnectAction
    | ConversationAction
    | InputAction
    | NotifyAction
    | RecordAction
    | StreamAction
    | TalkAction
