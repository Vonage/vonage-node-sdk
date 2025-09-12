import { EmailWorkflow } from './emailWorkflow.js';
import { RCSWorkflow } from './rcsWorkflow.js';
import { SMSWorkflow } from './smsWorkflow.js';
import { SilentAuthWorkflow } from './silentAuthWorkflow.js';
import { VoiceWorkflow } from './voiceWorkflow.js';
import { WhatsAppInteractiveWorkflow } from './whatsAppInteractiveWorkflow.js';
import { WhatsAppWorkflow } from './whatsAppWorkflow.js';

export * from './emailWorkflow.js';
export * from './rcsWorkflow.js';
export * from './requestStatusCallbackWorkflow.js';
export * from './silentAuthWorkflow.js';
export * from './smsWorkflow.js';
export * from './voiceWorkflow.js';
export * from './whatsAppInteractiveWorkflow.js';
export * from './whatsAppWorkflow.js';

export type AnyWorkflow =
  EmailWorkflow
  | RCSWorkflow
  | SMSWorkflow
  | SilentAuthWorkflow
  | VoiceWorkflow
  | WhatsAppInteractiveWorkflow
  | WhatsAppWorkflow;

