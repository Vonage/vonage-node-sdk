import smsTests from './sms.js';
import messagesTests from './messages.js';
import voiceTests from './voice.js';
import voiceTTSTests from './voiceTTS.js';
import voiceASRTests from './voiceASR.js';
import voiceAMDTests from './voiceAMD.js';
import voiceWebSocketTests from './voiceWebSocket.js';
import inAppVoiceTests from './inAppVoice.js';
import verifyTests from './verify.js';
import numberInsightTests from './numberInsight.js';
import conversationTests from './conversation.js';
import networkApiEventTests from './networkApiEvent.js';
import smsTrafficControlTests from './smsTrafficControl.js';
import videoAPITests from './videoAPI.js';
import reportUsageTests from './reportUsage.js';

export default [
  ...smsTests,
  ...messagesTests,
  ...voiceTests,
  ...voiceTTSTests,
  ...voiceASRTests,
  ...voiceAMDTests,
  ...voiceWebSocketTests,
  ...inAppVoiceTests,
  ...verifyTests,
  ...numberInsightTests,
  ...conversationTests,
  ...networkApiEventTests,
  ...smsTrafficControlTests,
  ...videoAPITests,
  ...reportUsageTests,
];
