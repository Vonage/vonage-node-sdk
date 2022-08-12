import { ConversationAction } from '../../interfaces/NCCO/ConversationAction'
import { Serializable } from '../../ncco'

export class Conversation implements ConversationAction, Serializable {
    action: 'conversation'
    name: string
    musicOnHoldUrl?: string[]
    startOnEnter?: boolean
    endOnExit?: boolean
    record?: boolean
    canSpeak?: string[]
    canHear?: string[]
    mute?: boolean

    constructor(
        name: string,
        musicOnHoldUrl?: string,
        startOnEnter?: boolean,
        endOnExit?: boolean,
        record?: boolean,
        canSpeak?: string[],
        canHear?: string[],
        mute?: boolean
    ) {
        this.name = name

        if (musicOnHoldUrl) {
            this.musicOnHoldUrl = [musicOnHoldUrl]
        }
        if (startOnEnter) {
            this.startOnEnter = startOnEnter
        }
        if (endOnExit) {
            this.endOnExit = endOnExit
        }
        if (record) {
            this.record = record
        }
        if (canSpeak) {
            this.canSpeak = canSpeak
        }
        if (canHear) {
            this.canHear = canHear
        }
        if (mute) {
            this.mute = mute
        }
    }

    serializeToNCCO() {
        const data: ConversationAction = {
            action: this.action,
            name: this.name,
        }

        if (this.musicOnHoldUrl) {
            data.musicOnHoldUrl = this.musicOnHoldUrl
        }
        if (this.startOnEnter) {
            data.startOnEnter = this.startOnEnter
        }
        if (this.endOnExit) {
            data.endOnExit = this.endOnExit
        }
        if (this.record) {
            data.record = this.record
        }
        if (this.canSpeak) {
            data.canSpeak = this.canSpeak
        }
        if (this.canHear) {
            data.canHear = this.canHear
        }
        if (this.mute) {
            data.mute = this.mute
        }

        return data
    }
}
