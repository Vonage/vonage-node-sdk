import debug from 'debug';

debug('@vonage/voice')(
  'This file is deprecated please update to use the core package',
);

export { Connect } from './classes/NCCO/Connect.js';
export { Conversation } from './classes/NCCO/Conversation.js';
export { Input } from './classes/NCCO/Input.js';
export { NCCOBuilder } from './classes/NCCO/NCCOBuilder.js';
export { Notify } from './classes/NCCO/Notify.js';
export { Record } from './classes/NCCO/Record.js';
export { Stream } from './classes/NCCO/Stream.js';
export { Talk } from './classes/NCCO/Talk.js';

export { ConnectAction } from './interfaces/NCCO/ConnectAction.js';
export { ConversationAction } from './interfaces/NCCO/ConversationAction.js';
export { DTMFSettings } from './interfaces/NCCO/DTMFSettings.js';
export { InputAction } from './interfaces/NCCO/InputAction.js';
export { NotifyAction } from './interfaces/NCCO/NotifyAction.js';
export { RecordAction } from './interfaces/NCCO/RecordAction.js';
export { Serializable } from './interfaces/NCCO/Serializable.js';
export { SpeechSettings } from './interfaces/NCCO/SpeechSettings.js';
export { StreamAction } from './interfaces/NCCO/StreamAction.js';
export { TalkAction } from './interfaces/NCCO/TalkAction.js';
export { URLTransfer, NCCOTransfer } from './interfaces/NCCO/Transfer.js';

export { Action } from './types/NCCO/Action.js';
