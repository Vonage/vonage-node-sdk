import { Channels } from '../enums';

export type SMSWorkflow = {
    channel: Channels.SMS
    to: string
    appHash?: string
}
