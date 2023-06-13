import { SilentAuthChannel } from '../enums';

export type SilentAuthWorkflow = {
  channel: SilentAuthChannel;
  to: string;
};
