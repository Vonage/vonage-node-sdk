import { SilenAuthChannel } from '../enums';

export type SilentAuthWorkflow = {
    channel: SilenAuthChannel
    to: string
}
