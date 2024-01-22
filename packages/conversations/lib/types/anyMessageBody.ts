import { MessageASRBody } from './messageASRBody';
import { MessageAudioBody } from './messageAudioBody';
import { MessageChannelBody } from './messageChannelBody';
import { MessageConversationBody } from './messageConversationBody';
import { MessageCustomBody } from './messageCustomBody';
import { MessageEventBody } from './messageEventBody';
import { MessageFileBody } from './messageFileBody';
import { MessageImageBody } from './messageImageBody';
import { MessageLegBody } from './messageLegBody';
import { MessageLocationBody } from './messageLocationBody';
import { MessageMemberBody } from './messageMemberBody';
import { MessageRTCAnswerBody } from './messageRTCAnswerBody';  
import { MessageRTCIdBody } from './messageRTCIdBody';
import { MessageRecordBody } from './messageRecordBody';
import { MessageRecordIdBody } from './messageRecordIdBody';
import { MessageSIPDirectionBody } from './messageSIPDirectionBody';
import { MessageSIPHangupBody } from './messageSIPHangupBody';
import { MessageSIPMachineBody } from './messageSIPMachineBody';
import { MessageSIPStatusBody } from './messageSIPStatusBody';
import { MessageSayBody } from './messageSayBody';
import { MessageSayIdBody } from './messageSayIdBody';
import { MessageStatusBody } from './messageStatusBody';
import { MessageTemplateBody } from './messageTemplateBody';
import { MessageTextBody } from './messageTextBody';
import { MessageVCardBody } from './messageVCardBody';
import { MessageVideoBody } from './messageVideoBody';


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

