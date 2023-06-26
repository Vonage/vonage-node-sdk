import { NCCOActions } from '../../enums';
export type ConversationAction = {
  action: NCCOActions.CONVERSATION;
  name: string;
  musicOnHoldUrl?: string[];
  startOnEnter?: boolean;
  endOnExit?: boolean;
  record?: boolean;
  canSpeak?: string[];
  canHear?: string[];
  mute?: boolean;
};
