import { ConversationEventRecord } from './conversationEventRecord.js';
import { ConversationMessageRecord } from './conversationMessagesRecord.js';
import { InAppVoiceRecord } from './inAppVoiceRecord.js';
import { MessageInboundRecord } from './messageInboundRecord.js';
import { MessageOutboundRecord } from './messageOutboundRecord.js';
import { NetworkAPIEventRecord } from './networkApiEventRecord.js';
import { NumberInsightRecord } from './numberInsightRecord.js';
import { ReportUsageRecord } from './reportUsageRecord.js';
import { SMSInboundRecord } from './smsInboundRecord.js';
import { SMSOutboundRecord } from './smsOutboundRecord.js';
import { SMSTrafficControlRecord } from './smsTrafficControlRecord.js';
import { VerifyAPIRecord } from './verifyAPIRecord.js';
import { VerifyV2Record } from './verifyV2Record.js';
import { VideoAPIRecord } from './videoAPIRecord.js';
import { VoiceAMDRecord } from './voiceAMDRecord.js';
import { VoiceASRRecord } from './voiceASRRecord.js';
import { VoiceCallRecord } from './voiceCallRecord.js';
import { VoiceFailedRecord } from './voiceFailedRecord.js';
import { VoiceTTSRecord } from './voiceTTSRecord.js';
import { VoiceWebSocketRecord } from './voiceWebSocketRecord.js';

export type AnyRecord =
  & ConversationEventRecord
  & ConversationMessageRecord
  & InAppVoiceRecord
  & MessageInboundRecord
  & MessageOutboundRecord
  & NetworkAPIEventRecord
  & NumberInsightRecord
  & ReportUsageRecord
  & SMSInboundRecord
  & SMSOutboundRecord
  & SMSTrafficControlRecord
  & VerifyAPIRecord
  & VerifyV2Record
  & VideoAPIRecord
  & VoiceAMDRecord
  & VoiceASRRecord
  & VoiceCallRecord
  & VoiceFailedRecord
  & VoiceTTSRecord
  & VoiceWebSocketRecord;

export * from './conversationEventRecord.js';
export * from './conversationMessagesRecord.js';
export * from './inAppVoiceRecord.js';
export * from './messageInboundRecord.js';
export * from './messageOutboundRecord.js';
export * from './networkApiEventRecord.js';
export * from './networkRecord.js';
export * from './numberInsightRecord.js';
export * from './recordCommon.js';
export * from './reportUsageRecord.js';
export * from './smsInboundRecord.js';
export * from './smsOutboundRecord.js';
export * from './smsTrafficControlRecord.js';
export * from './verifyAPIRecord.js';
export * from './verifyV2Record.js';
export * from './videoAPIRecord.js';
export * from './voiceAMDRecord.js';
export * from './voiceASRRecord.js';
export * from './voiceCallRecord.js';
export * from './voiceFailedRecord.js';
export * from './voiceTTSRecord.js';
export * from './voiceWebSocketRecord.js';
