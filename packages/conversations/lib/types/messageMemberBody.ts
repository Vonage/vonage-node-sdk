import { Member } from './member.js';
import { UpdateMemberParameters } from './parameters/index.js';

export type MessageMemberBody = {
  /**
   * Member ID
   */
  memberId: string;

  /**
   * Audio Message
   */
  audio?: boolean;

} & Omit<Member, 'status' | 'id' | 'conversationId'>
  // This has "Reason" defined
  & Omit<UpdateMemberParameters, 'state' | 'from'>;
