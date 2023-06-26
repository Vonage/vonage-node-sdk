import debug from 'debug';

debug('@vonage/voice')(
  'This file is deprecated please update to use the core package',
);

export { Connect } from './classes/NCCO/Connect';
export { Conversation } from './classes/NCCO/Conversation';
export { Input } from './classes/NCCO/Input';
export { NCCOBuilder } from './classes/NCCO/NCCOBuilder';
export { Notify } from './classes/NCCO/Notify';
export { Record } from './classes/NCCO/Record';
export { Stream } from './classes/NCCO/Stream';
export { Talk } from './classes/NCCO/Talk';

export { ConnectAction } from './interfaces/NCCO/ConnectAction';
export { ConversationAction } from './interfaces/NCCO/ConversationAction';
export { DTMFSettings } from './interfaces/NCCO/DTMFSettings';
export { InputAction } from './interfaces/NCCO/InputAction';
export { NotifyAction } from './interfaces/NCCO/NotifyAction';
export { RecordAction } from './interfaces/NCCO/RecordAction';
export { Serializable } from './interfaces/NCCO/Serializable';
export { SpeechSettings } from './interfaces/NCCO/SpeechSettings';
export { StreamAction } from './interfaces/NCCO/StreamAction';
export { TalkAction } from './interfaces/NCCO/TalkAction';
export { URLTransfer, NCCOTransfer } from './interfaces/NCCO/Transfer';

export { Action } from './types/NCCO/Action';
