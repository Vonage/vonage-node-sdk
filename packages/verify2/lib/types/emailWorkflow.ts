import { Channels } from '../enums';

export type EmailWorkflow = {
    channel: Channels.EMAIL
    to: string
    from?: string
}
