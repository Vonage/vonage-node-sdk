import { MessageASRBody } from './messageASRBody.js';
import { MessageAudioBody } from './messageAudioBody.js';
import { MessageChannelBody } from './messageChannelBody.js';
import { MessageConversationBody } from './messageConversationBody.js';
import { MessageCustomBody } from './messageCustomBody.js';
import { MessageEventBody } from './messageEventBody.js';
import { MessageFileBody } from './messageFileBody.js';
import { MessageImageBody } from './messageImageBody.js';
import { MessageLegBody } from './messageLegBody.js';
import { MessageLocationBody } from './messageLocationBody.js';
import { MessageMemberBody } from './messageMemberBody.js';
import { MessageRTCAnswerBody } from './messageRTCAnswerBody.js';
import { MessageRTCIdBody } from './messageRTCIdBody.js';
import { MessageRecordBody } from './messageRecordBody.js';
import { MessageRecordIdBody } from './messageRecordIdBody.js';
import { MessageSIPDirectionBody } from './messageSIPDirectionBody.js';
import { MessageSIPHangupBody } from './messageSIPHangupBody.js';
import { MessageSIPMachineBody } from './messageSIPMachineBody.js';
import { MessageSIPStatusBody } from './messageSIPStatusBody.js';
import { MessageSayBody } from './messageSayBody.js';
import { MessageSayIdBody } from './messageSayIdBody.js';
import { MessageStatusBody } from './messageStatusBody.js';
import { MessageTemplateBody } from './messageTemplateBody.js';
import { MessageTextBody } from './messageTextBody.js';
import { MessageVCardBody } from './messageVCardBody.js';
import { MessageVideoBody } from './messageVideoBody.js';


export type AnyMessageBody = MessageASRBody
  | MessageChannelBody
  | MessageConversationBody
  | MessageCustomBody
  | MessageEventBody
  | MessageFileBody
  | MessageImageBody
  | MessageLegBody
  | MessageLocationBody
  | MessageMemberBody
  | MessageRTCAnswerBody
  | MessageRTCIdBody
  | MessageRecordBody
  | MessageRecordIdBody
  | MessageSIPDirectionBody
  | MessageSIPHangupBody
  | MessageSIPMachineBody
  | MessageSIPStatusBody
  | MessageSayBody
  | MessageSayIdBody
  | MessageStatusBody
  | MessageTemplateBody
  | MessageTextBody
  | MessageVCardBody
  | MessageVideoBody
  | MessageAudioBody;

