import { SilentAuthChannel, SilenAuthStatus } from '../enums';

export type SilentAuthCallback = {
  request_id: string;
  triggerd_at: string;
  type: string;
  channel: SilentAuthChannel.SILENT_AUTH;
  status: SilenAuthStatus;
  action: {
    type: 'check';
    check_url: string;
  };
};
