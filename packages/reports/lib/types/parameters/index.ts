import { AsyncReportParams } from './asyncReportParams.js';
import { ConversationEventReportParams } from './conversationEventReportParams.js';
import { ConversationReportParams } from './conversationReportParams.js';
import { InAppVoiceReportParams } from './inAppVoiceReportParams.js';
import { MessageReportParams } from './messageReportParams.js';
import { NetworkAPIEventReportParams } from './networkAPIEventReportParams.js';
import { NetworkReportParams } from './networkReportParams.js';
import { NumberInsightsV1ReportParams } from './numberInsightV1ReportParams.js';
import { ReportUsageReportParams } from './reportUsageReportParams.js';
import { SMSReportParams } from './smsReportParams.js';
import { SMSTrafficControlReportParams } from './smsTrafficControlReportParams.js';
import { VerifyReportParams } from './verifyReportParams.js';
import { VerifyV2ReportParams } from './verifyV2ReportParams.js';
import { VideoAPIReportParams } from './videoAPIReportParams.js';
import { VoiceAMDReportParams } from './voiceAMDReportParams.js';
import { VoiceAPIReportParams } from './voiceAPIReportParams.js';
import { VoiceASRReportParams } from './voiceASRReportParams.js';
import { VoiceFailedReportParams } from './voiceFailedReportParams.js';
import { VoiceTTSReportParams } from './voiceTTSReportParams.js';
import { VoiceWebsocketReportParams } from './voiceWebsocketReportParams.js';

export type AnyReportParams =
  | ConversationEventReportParams
  | ConversationReportParams
  | InAppVoiceReportParams
  | MessageReportParams
  | NetworkAPIEventReportParams
  | NetworkReportParams
  | NumberInsightsV1ReportParams
  | ReportUsageReportParams
  | SMSTrafficControlReportParams
  | VerifyReportParams
  | VerifyV2ReportParams
  | VideoAPIReportParams
  | VoiceAMDReportParams
  | VoiceAPIReportParams
  | VoiceASRReportParams
  | VoiceFailedReportParams
  | VoiceTTSReportParams
  | VoiceWebsocketReportParams
  | SMSReportParams;

export type AnyAsyncReportParams = AnyReportParams & AsyncReportParams;

export * from './asyncReportParams.js';
export * from './baseReportParams.js';
export * from './conversationEventReportParams.js';
export * from './conversationReportParams.js';
export * from './countryReportParams.js';
export * from './dateReportParams.js';
export * from './directionReportParams.js';
export * from './inAppVoiceReportParams.js';
export * from './messageReportParams.js';
export * from './networkAPIEventReportParams.js';
export * from './networkReportParams.js';
export * from './numberInsightV1ReportParams.js';
export * from './recipientReportParams.js';
export * from './reportUsageReportParams.js';
export * from './senderReportParams.js';
export * from './smsReportParams.js';
export * from './smsTrafficControlReportParams.js';
export * from './verifyReportParams.js';
export * from './verifyV2ReportParams.js';
export * from './videoAPIReportParams.js';
export * from './voiceAMDReportParams.js';
export * from './voiceAPIReportParams.js';
export * from './voiceASRReportParams.js';
export * from './voiceFailedReportParams.js';
export * from './voiceTTSReportParams.js';
export * from './voiceWebsocketReportParams.js';
